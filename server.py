#!/usr/bin/env python3
"""Serve Seven's learning island to phones and tablets on the same Wi-Fi."""

from __future__ import annotations

import argparse
import functools
import http.server
import socket
import subprocess
from pathlib import Path


ROOT = Path(__file__).resolve().parent


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


class LearningIslandHandler(http.server.SimpleHTTPRequestHandler):
    server_version = "SevenLearningIsland/1.0"

    def do_GET(self) -> None:  # noqa: N802 - inherited HTTP method name
        request_path = self.path.split("?", 1)[0]
        if request_path == "/lan-config.js":
            share_url = getattr(self.server, "share_url", "")
            body = f'window.SEVEN_LAN_URL = "{share_url}";\n'.encode("utf-8")
            self.send_response(200)
            self.send_header("Content-Type", "application/javascript; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
            self.send_header("Cache-Control", "no-store")
            self.end_headers()
            self.wfile.write(body)
            return
        super().do_GET()

    def end_headers(self) -> None:
        self.send_header("X-Content-Type-Options", "nosniff")
        self.send_header("Referrer-Policy", "no-referrer")
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
