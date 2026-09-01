#!/usr/bin/env python3
"""Serve Seven's learning island to phones and tablets on the same Wi-Fi."""

from __future__ import annotations

import argparse
import functools
import http.server
import mimetypes
import re
import socket
import subprocess
from pathlib import Path
from urllib.parse import urlsplit


ROOT = Path(__file__).resolve().parent
VIDEO_SUFFIXES = {".mp4", ".m4v", ".mov", ".webm"}
LONG_LIVED_SUFFIXES = {
    ".avif",
    ".gif",
    ".ico",
    ".jpg",
    ".jpeg",
    ".otf",
    ".png",
    ".svg",
    ".ttf",
    ".vtt",
    ".webp",
    ".woff",
    ".woff2",
}
RANGE_PATTERN = re.compile(r"bytes=(\d*)-(\d*)", re.IGNORECASE)
mimetypes.add_type("text/vtt", ".vtt")


def discover_lan_ip() -> str:
    probe = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        probe.connect(("8.8.8.8", 80))
        detected = probe.getsockname()[0]
        if detected and not detected.startswith("127."):
            return detected
    except OSError:
        pass
    finally:
        probe.close()

    for interface in ("en0", "en1"):
        try:
            result = subprocess.run(
                ["/usr/sbin/ipconfig", "getifaddr", interface],
                check=False,
                capture_output=True,
                text=True,
                timeout=2,
            )
            detected = result.stdout.strip()
            if result.returncode == 0 and detected and not detected.startswith("127."):
                return detected
        except (OSError, subprocess.SubprocessError):
            pass

    try:
        candidates = socket.getaddrinfo(socket.gethostname(), None, socket.AF_INET)
        for candidate in candidates:
            detected = candidate[4][0]
            if detected and not detected.startswith("127."):
                return detected
    except OSError:
        pass
    return "127.0.0.1"


class RangeNotSatisfiable(ValueError):
    """Raised when a single HTTP byte range cannot be served."""


class LearningIslandHandler(http.server.SimpleHTTPRequestHandler):
    server_version = "SevenLearningIsland/1.2"

    def send_response(self, code: int, message: str | None = None) -> None:
        self._response_status = code
        super().send_response(code, message)

    def do_GET(self) -> None:  # noqa: N802 - inherited HTTP method name
        request_path = urlsplit(self.path).path
        if request_path == "/lan-config.js":
            share_url = getattr(self.server, "share_url", "")
            body = f'window.SEVEN_LAN_URL = "{share_url}";\n'.encode("utf-8")
            self.send_response(200)
            self.send_header("Content-Type", "application/javascript; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)
            return
        super().do_GET()

    @staticmethod
    def _parse_range(range_header: str, file_size: int) -> tuple[int, int]:
        if "," in range_header:
            raise RangeNotSatisfiable("multiple ranges are not supported")

        match = RANGE_PATTERN.fullmatch(range_header.strip())
        if not match or file_size <= 0:
            raise RangeNotSatisfiable("invalid byte range")

        start_text, end_text = match.groups()
        if not start_text and not end_text:
            raise RangeNotSatisfiable("empty byte range")

        if not start_text:
            suffix_length = int(end_text)
            if suffix_length <= 0:
                raise RangeNotSatisfiable("invalid suffix length")
            start = max(file_size - suffix_length, 0)
            end = file_size - 1
            return start, end

        start = int(start_text)
        if start >= file_size:
            raise RangeNotSatisfiable("range starts beyond the file")

        end = file_size - 1 if not end_text else min(int(end_text), file_size - 1)
        if end < start:
            raise RangeNotSatisfiable("range ends before it starts")
        return start, end

    def send_head(self):
        self._byte_range = None
        file_path = Path(self.translate_path(self.path))
        if not file_path.is_file() or file_path.suffix.lower() not in VIDEO_SUFFIXES:
            return super().send_head()

        try:
            source = file_path.open("rb")
        except OSError:
            self.send_error(404, "File not found")
            return None

        try:
            stat_result = file_path.stat()
            file_size = stat_result.st_size
            range_header = self.headers.get("Range")
            if range_header:
                try:
                    start, end = self._parse_range(range_header, file_size)
                except (RangeNotSatisfiable, ValueError):
                    source.close()
                    self.send_response(416)
                    self.send_header("Content-Range", f"bytes */{file_size}")
                    self.send_header("Accept-Ranges", "bytes")
                    self.send_header("Content-Length", "0")
                    self.end_headers()
                    return None

                self._byte_range = (start, end)
                self.send_response(206)
                self.send_header("Content-Range", f"bytes {start}-{end}/{file_size}")
                content_length = end - start + 1
            else:
                self.send_response(200)
                content_length = file_size

            self.send_header("Content-Type", self.guess_type(str(file_path)))
            self.send_header("Content-Length", str(content_length))
            self.send_header("Accept-Ranges", "bytes")
            self.send_header("Last-Modified", self.date_time_string(stat_result.st_mtime))
            self.end_headers()
            return source
        except Exception:
            source.close()
            raise

    def copyfile(self, source, outputfile) -> None:
        byte_range = getattr(self, "_byte_range", None)
        if byte_range is None:
            super().copyfile(source, outputfile)
            return

        start, end = byte_range
        source.seek(start)
        remaining = end - start + 1
        while remaining > 0:
            chunk = source.read(min(64 * 1024, remaining))
            if not chunk:
                break
            outputfile.write(chunk)
            remaining -= len(chunk)

    def _cache_control(self) -> str:
        status = getattr(self, "_response_status", 200)
        if status >= 400:
            return "no-store"

        request_path = urlsplit(self.path).path
        suffix = Path(request_path).suffix.lower()
        filename = Path(request_path).name

        if request_path == "/lan-config.js":
            return "no-store"
        if request_path.endswith("/") or suffix == ".html" or filename == "sw.js":
            return "no-cache"
        if suffix == ".webmanifest" or suffix in {".css", ".js"}:
            return "public, max-age=0, must-revalidate"
        if suffix in VIDEO_SUFFIXES:
            return "public, max-age=604800"
        if suffix in LONG_LIVED_SUFFIXES:
            return "public, max-age=86400"
        return "no-cache"

    def end_headers(self) -> None:
        self.send_header("Cache-Control", self._cache_control())
        self.send_header("X-Content-Type-Options", "nosniff")
        self.send_header("Referrer-Policy", "no-referrer")
        self.send_header("Cross-Origin-Resource-Policy", "same-origin")
        super().end_headers()


def main() -> None:
    parser = argparse.ArgumentParser(description="在家庭 Wi-Fi 中打开 Seven 的彩虹成长岛")
    parser.add_argument("--port", type=int, default=8000, help="服务端口，默认 8000")
    args = parser.parse_args()

    lan_ip = discover_lan_ip()
    if lan_ip.startswith("127."):
        computer_name = socket.gethostname().strip().rstrip(".") or "localhost"
        share_host = computer_name if computer_name.endswith(".local") else f"{computer_name}.local"
    else:
        share_host = lan_ip
    share_url = f"http://{share_host}:{args.port}/"
    handler = functools.partial(LearningIslandHandler, directory=str(ROOT))

    try:
        server = http.server.ThreadingHTTPServer(("0.0.0.0", args.port), handler)
    except OSError as error:
        raise SystemExit(f"无法启动端口 {args.port}：{error}") from error

    server.share_url = share_url
    print("\nSeven 的彩虹成长岛已经启动！")
    print(f"电脑访问：  http://localhost:{args.port}/")
    print(f"手机/iPad： {share_url}")
    print("请让设备连接同一个 Wi-Fi。按 Control+C 可停止服务。\n")

    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\n学习岛已停止。")
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
