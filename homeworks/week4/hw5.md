## 請以自己的話解釋 API 是什麼
API 就是一個資料交換的控制介面，可以訂定規則如何交換資料和決定要開放多少資料能交換


## 請找出三個課程沒教的 HTTP status code 並簡單介紹
505 HTTP Version Not Supported 
這個 sever 不支援 HTTP version

415 Unsupported Media Type
不支援這種 Media type 

410 Gone
Requested page 已不再可用


## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

Base URL: https://charismafood

說明	         Method	      path	           參數	                    範例
回傳所有餐廳	  GET	     /shops       _limit:限制回傳資料數量	  /shops?_limit=5
回傳單一餐廳	  GET	     /shops/:id      	無	              /shops/10
新增餐廳	      POST	     /shops	          name: 店名	               無
刪除餐廳	      DELETE	 /shops/:id	        無	                   無
更改餐廳  	  PATCH	     /shops/:id	      name: 店名	               無
