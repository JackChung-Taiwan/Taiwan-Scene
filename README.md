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

**方案 B：學生從教師專案 Fork 再 Clone（推薦，全班每人一個作品）**

> **先理解這些動作：** Fork 是建立自己的「線上副本」、Clone 是下載到自己電腦、Commit 是記錄本機修改版本、Push 才是同步上傳到 GitHub；最後可用 GitHub Pages 公開作品。

1. **註冊與安裝：** 學生到 [GitHub](https://github.com/signup) 註冊自己的帳號，並下載 [GitHub Desktop](https://desktop.github.com/)。安裝後點 `Sign in to GitHub.com` 登入。
2. **Fork（在 GitHub 網頁操作）：** 用瀏覽器開啟 [教師的 Taiwan-Scene 專案](https://github.com/JackChung-Taiwan/Taiwan-Scene)，在右上角點 `Fork → Create a new fork`，Owner 選自己的帳號，按 `Create fork`。完成後網址為 `github.com/學生帳號/Taiwan-Scene`。**GitHub Desktop 的首頁沒有 Fork 按鈕。**
3. **Clone（下載到電腦）：** GitHub Desktop → `File → Clone repository...`；選擇 `學生帳號/Taiwan-Scene`，設定 `Local path`，按 `Clone`。可用 `Repository → Show in Explorer` 確認有 `images/`、`index.html`、`data.js`。
4. **修改（一定要修改 Clone 的資料夾）：** 例如將自己拍攝且可公開使用的圖片改名為 `001.jpg`，取代 `images/001.jpg`；或修改 `index.html` 標題、`data.js` 的 `name`、`region` 等欄位，儲存檔案。
5. **Commit（記錄版本）：** GitHub Desktop 左側 `Changes` 會出現修改檔案。確認勾選後，於左下角 `Summary (required)` 輸入 `Update Taipei 101 image`，按 `Commit to main`。**Commit 只先保留在本機。**
6. **Push（真正上傳）：** 點上方 `Push origin`，回到自己的 GitHub 專案頁並重新整理。看得到新的圖片、文字或 Commit 訊息才代表同步完成。
7. **Pages（進階，公開展示）：** 到自己的專案 `Settings → Pages`；在 `Build and deployment` 選 `Deploy from a branch`，設定 `main`、`/(root)`、`Save`。網站通常會在 `https://學生帳號.github.io/Taiwan-Scene/` 出現；第一次部署需要一些時間。

**常見問題：**

- **找不到 Fork？** 請到老師的 GitHub「網頁」右上角找，不是在 Desktop；老師本人無須 Fork 自己的專案。
- **Clone 清單沒有？** 先確認已 Fork，Desktop 要登入同一帳號，也可用 URL 分頁貼上自己的 Fork 網址。
- **Changes 空白？** 檔案可能修改在錯誤資料夾，或忘記儲存；要修改 Desktop Clone 的專案。
- **Commit 後 GitHub 沒變？** 還沒 Push origin。
- **Push 權限錯誤？** 檢查選的是學生自己的 Fork，不能直接推送老師原始專案。
- **Pages 圖片破圖？** 確認已 Push，且 `images/001.jpg` 路徑、大小寫、副檔名跟 `data.js` 完全一致。

網站首頁「學生完整操作流程」也提供每一步的**操作內容、原因解釋與完成檢查**。

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
