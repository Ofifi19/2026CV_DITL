#!/bin/bash

echo "🔍 檢查 GitHub 推送狀態..."
echo ""

# 檢查 remote 設定
echo "1️⃣  遠端倉庫設定："
git remote -v
echo ""

# 檢查分支狀態
echo "2️⃣  本地分支狀態："
git branch -vv
echo ""

# 檢查工作區狀態
echo "3️⃣  工作區狀態："
git status
echo ""

# 檢查遠端連線
echo "4️⃣  測試遠端連線："
if git ls-remote origin &>/dev/null; then
    echo "✅ 可以連接到遠端倉庫"
    echo ""
    echo "遠端分支："
    git ls-remote --heads origin
else
    echo "❌ 無法連接到遠端倉庫"
    echo "   請檢查："
    echo "   - GitHub URL 是否正確"
    echo "   - Repository 是否已建立"
    echo "   - 認證設定是否正確"
fi
echo ""

# 檢查本地與遠端的差異
echo "5️⃣  本地與遠端的差異："
LOCAL=$(git rev-parse main)
REMOTE=$(git rev-parse origin/main 2>/dev/null || echo "")

if [ -z "$REMOTE" ]; then
    echo "⚠️  遠端分支不存在，尚未推送過"
elif [ "$LOCAL" = "$REMOTE" ]; then
    echo "✅ 本地與遠端已同步"
else
    echo "⚠️  本地與遠端不同步"
    echo "   本地: $LOCAL"
    echo "   遠端: $REMOTE"
fi
