## 請說明雜湊跟加密的差別在哪裡，為什麼密碼要雜湊過後才存入資料庫
兩者主要的差異在於加密有金鑰，可以透過金要還原，而雜湊沒有金鑰無法還原。雜湊後再存入資料庫可以防止被盜取密碼因為無法直接還原


## `include`、`require`、`include_once`、`require_once` 的差別
使用 include 可以告訴 PHP 提取特定的檔案，並載入它的全部內容。每次使用 include 時，它都會重新將請求的檔案匯入，即使這個檔案已經被匯入過。而如果我們使用 include 匯入到的檔案中又包含了已經匯入的檔案，而通過巢狀，我們已經會將檔案匯入了兩次，這就會產生錯誤，因為我們試圖多次定義同名的變數或函式。為了避免這樣的事情發生，我們使用 
include_once 來代替 include。此時，如果在相同的檔案中遇到另一個 include 或 include_once 時，PHP 會檢查它是否已經被匯入過，如果是就忽略它。使用 include 和 
include_once 時 PHP 只會試圖匯入被請求匯入的檔案，即使該檔案沒有被找到，程式依舊會執行。當我們絕對需要匯入一個檔案時，就要使用 require，對於使用 require_once 
的原因也是如同 include_once

## 請說明 SQL Injection 的攻擊原理以及防範方法
在 PHP 的頁面上利用可以自己輸入文字的地方將字串串接成 SQL 的指令來達到攻擊的目的。
使用 prepared statement 的指令讓 SQL 的執行是透過內建的串接方式執行，


##  請說明 XSS 的攻擊原理以及防範方法
Cross-site scripting，在別的人網頁上利用可輸入文字的地方輸入 script 指令來達成攻擊目的。
利用 htmlspecailchars 的指令將輸入的東西都看作普通字串而不是 script 

## 請說明 CSRF 的攻擊原理以及防範方法
Cross Site Request Forgery，跨站請求偽造。透過偽造自己是使用者的身份來執行各種指令來達成攻擊的目的。
使用 session 機制來讓使用者的身份認證是由 sever 端提供的通行證 id 來認證並在每一次登出後消滅
