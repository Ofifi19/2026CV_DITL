# 推送到 GitHub 的步驟

## ✅ 已完成
- [x] Remote URL 已設定為：`https://github.com/Ofifi19/2026CV-js.git`
- [x] 所有變更已 commit

## 🔐 需要認證才能推送

### 方法 1：使用 Personal Access Token（推薦）

1. **建立 Token**
   - 前往：https://github.com/settings/tokens
   - 點擊 **Generate new token (classic)**
   - Note：輸入 `2026CV-js project`
   - 勾選 **repo** 權限
   - 點擊 **Generate token**
   - **複製 token**（只會顯示一次！）

2. **推送**
   ```bash
   cd "/Users/happle/Desktop/Cursor Examples/2026CV-js"
   git push -u origin main
   ```
   - Username：`Ofifi19`
   - Password：**貼上剛才複製的 token**（不是 GitHub 密碼）

### 方法 2：使用 SSH（一次設定，之後更方便）

1. **產生 SSH key**
   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```
   （按 Enter 使用預設路徑）

2. **複製 public key**
   ```bash
   cat ~/.ssh/id_ed25519.pub
   ```
   複製顯示的內容

3. **加入 GitHub**
   - 前往：https://github.com/settings/keys
   - 點擊 **New SSH key**
   - Title：`MacBook for 2026CV-js`
   - Key：貼上剛才複製的 public key
   - 點擊 **Add SSH key**

4. **改用 SSH URL 並推送**
   ```bash
   cd "/Users/happle/Desktop/Cursor Examples/2026CV-js"
   git remote set-url origin git@github.com:Ofifi19/2026CV-js.git
   git push -u origin main
   ```

## ✅ 確認推送成功

推送成功後，前往以下網址確認：
**https://github.com/Ofifi19/2026CV-js**

應該可以看到所有檔案和 commit 歷史！
