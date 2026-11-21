# 臺灣景點 100 張｜GitHub Desktop 課堂專案

以 **100 張臺灣景點主題 AI 示意圖** 練習 GitHub Desktop 的大量檔案管理、Clone／Fork、Commit、Push 與 GitHub Pages 網頁發佈。每張 JPG 大約 100–200 KiB，檔名 `images/001.jpg` 至 `images/100.jpg`，附 100 筆名稱／縣市資料。

> **圖片不是實景攝影。** 這是教學示意圖卡，部分視覺素材重複，不保證畫面反映景點的真實外觀；請勿將其當作實景照片或旅遊路況資訊。

## 線上瀏覽

若儲存庫管理者已開啟 GitHub Pages：<https://jackchung-taiwan.github.io/Taiwan-Scene/>。如尚未啟用，請至 GitHub `Settings → Pages → Deploy from a branch → main → /(root) → Save`。

## 教材下載（直接點選）

| 素材 | 說明 |
|---|---|
| [100 張景點 JPG ZIP](downloads/Taiwan_Scenic_100_Images.zip) | 100 JPG + `attractions.csv` 名稱對照表，約 19 MB |
| [GitHub Desktop 圖文教學 PDF](downloads/GitHub_Desktop_Tutorial_TW.pdf) | 安裝、建立儲存庫、Commit、Push 等課程內容 |
| [網站原始碼 ZIP](downloads/Taiwan_Scenic_100_GitHub_Project.zip) | HTML、CSS、JS、景點資料與 100 張 JPG |
| [景點圖片總覽](downloads/Taiwan_Scenic_100_Preview.jpg) | 所有圖卡的預覽索引 |

如果 ZIP 暫未出現，代表 GitHub Actions 的「Package classroom downloads」尚未完成，請稍後查看 Actions 執行結果。

## 課堂操作（學生自行上傳的正確方式）

**方案 A：學生用現成教材建立自己的儲存庫**

1. 下載上面的網站 ZIP 並解壓縮。
2. 使用 GitHub Desktop 登入 GitHub，`File → New repository`。
3. 將解壓縮後的 `images/`、`index.html`、`app.js`、`data.js`、`style.css` 等放進本機儲存庫根目錄。
4. 在 Changes 區輸入摘要，例如 `Add 100 Taiwan scenic cards` → **Commit to main**。
5. 首次使用 **Publish repository** 上傳到 GitHub；後續更新使用 **Push origin**。

**方案 B：國一學生版（Fork → Clone → 修改 → Commit → Push）**

| 步驟 | 要做什麼？ | 這是在做什麼？ |
|---|---|---|
| 1. 準備 | 註冊 [GitHub](https://github.com/signup)，安裝 [GitHub Desktop](https://desktop.github.com/) 並登入 | 準備自己的帳號和工具 |
| 2. Fork | 開啟[老師的專案](https://github.com/JackChung-Taiwan/Taiwan-Scene)，在 GitHub 網站右上角按 **Fork → Create fork** | 在網路上複製一份老師的專案 |
| 3. Clone | GitHub Desktop → **File → Clone repository** → 選 `你的帳號/Taiwan-Scene` → **Clone** | 下載到自己的電腦 |
| 4. 修改 | 到下載的 `images` 資料夾，把有權使用的照片改名為 `001.jpg` 並取代舊圖 | 做出自己的內容 |
| 5. Commit | 在 **Changes** 確認修改；**Summary** 輸入「更換景點圖片」→ **Commit to main** | 像遊戲存檔，記錄這次修改 |
| 6. Push | 按 **Push origin**，再去自己的 GitHub 網頁重新整理 | 把修改上傳到網路 |

**加分挑戰：** 到自己儲存庫的 `Settings → Pages`，設定 `Deploy from a branch → main → /(root) → Save`，讓作品變成公開網站。

**常見問題：** 找不到 Fork？請到**瀏覽器的 GitHub 網站**。Changes 空白？檢查是否修改正確的 Clone 資料夾。Commit 以後網頁沒更新？記得按 **Push origin**。

> 教師本人如果登入的是 `JackChung-Taiwan`，**不用 Fork 自己的專案**，直接 Clone 就好。學生必須用自己的帳號 Fork，避免改到老師的原始專案。

## 專案結構

```
Taiwan-Scene/
├─ index.html                 # 景點圖片展示與教材下載頁
├─ style.css, app.js, data.js # 無框架前端
├─ images/                    # 001.jpg – 100.jpg
├─ attractions.csv            # 景點名稱、縣市與類型
├─ downloads/                 # 教學 PDF、ZIP、圖片總覽
└─ .github/workflows/         # 自動打包教材 ZIP
```

## 下載教材由誰製作？

景點示意圖與教學講義在課程準備過程中製作，ZIP 由 GitHub Actions 從此 repo 的圖片及網站程式碼打包產生。若要用於公開觀光宣傳，請改用已取得授權的實景照片。

- [GitHub Desktop 官方下載](https://desktop.github.com/)
- [GitHub Desktop 官方教學](https://docs.github.com/en/desktop/overview/creating-your-first-repository-using-github-desktop)
- [GitHub Pages 官方說明](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
