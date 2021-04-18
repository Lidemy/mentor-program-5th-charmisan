## 請解釋後端與前端的差異。

前端主要為我們用來送出 request 和接收 response 所使用的介面和作業系統以及相對應的硬體設備。比如 safari 和 macOS 和 網路卡
後端主要為處理 request 和送出 response 的 server 以及所儲存檔案的 DB. 

## 假設我今天去 Google 首頁搜尋框打上：JavaScript 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。

首先瀏覽器會將這個Google 網頁和搜尋JavaScript的指令翻譯傳給電腦的作業系統，作業系統再將這個指令傳給網卡，網卡透過網路將這個指令對 Goole server 送出一個 request ，
Google server 收到 request 後經過運算處理後存到自身的 DB 另外也回傳一個 response 給我們的網卡，網卡再傳給作業系統，作業系統再傳給瀏覽器，瀏覽器再翻譯並呈現搜尋結
果給我們看。


## 請列舉出 3 個「課程沒有提到」的 command line 指令並且說明功用

1. whoami 看現在是使用誰的帳號
2. top 印出所有的程序
3. less 分頁式印出檔案 
