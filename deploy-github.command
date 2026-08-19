#!/bin/zsh

set -e
cd -- "$(dirname -- "$0")"
clear

REPOSITORY_NAME="seven-rainbow-island"

echo "正在检查 GitHub 登录…"
if ! gh auth status >/dev/null 2>&1; then
  echo "GitHub 尚未登录或登录已过期。"
  echo "请先运行：gh auth login -h github.com"
  echo "登录后再次双击 deploy-github.command。"
  read -r "?按回车键关闭…"
  exit 1
fi

GITHUB_OWNER=$(gh api user --jq .login)

if [ ! -d .git ]; then
  git init -b main
fi

git add .
if ! git diff --cached --quiet; then
  git -c user.name="$GITHUB_OWNER" \
    -c user.email="$GITHUB_OWNER@users.noreply.github.com" \
    commit -m "Publish Seven learning island"
fi

if gh repo view "$GITHUB_OWNER/$REPOSITORY_NAME" >/dev/null 2>&1; then
  if ! git remote get-url origin >/dev/null 2>&1; then
    git remote add origin "https://github.com/$GITHUB_OWNER/$REPOSITORY_NAME.git"
  fi
  git push -u origin main
else
  gh repo create "$REPOSITORY_NAME" \
    --public \
    --description "Seven 的无广告幼儿学习与每日打卡网站" \
    --source=. \
    --remote=origin \
    --push
fi

gh api -X POST "repos/$GITHUB_OWNER/$REPOSITORY_NAME/pages" \
  -f build_type=workflow >/dev/null 2>&1 || true

gh workflow run deploy-pages.yml --repo "$GITHUB_OWNER/$REPOSITORY_NAME" >/dev/null 2>&1 || true

PUBLIC_URL="https://$GITHUB_OWNER.github.io/$REPOSITORY_NAME/"
echo ""
echo "部署已经提交！"
echo "公开网址：$PUBLIC_URL"
echo "首次发布通常需要 1–3 分钟。"
echo ""
read -r "?按回车键关闭…"
