## 跟你朋友介紹 Git

### git 是一套專門來做版本控制的軟體，也可以讓多人協作更順利

1. 首先安裝好 git 後，建立好一個存放笑話的資料夾，並且在裡面執行 git init 來開始使用。
2. 將笑話寫成一個檔案 e.g. funny1i.
3. 再使用 git commit -am "funny1_v1" 寫下註釋即可完成 funny1 第一版的版本控制。
4. 此時可以使用 git log 看到這項改動紀錄。
5. 往後每改動一次 funny1 都重複步驟 3，日後就可以透過 git log 知道每一次改動所存在的版本以及透過註釋知道改動的內容。

### 可以搭配遠端 github 一起使用，也可以讓多人協作更順利

1. 在 github 網站上開一個新的 repostiry. 
2. 使用 git remote add origin https://xxxxxxx.git 讓自己的電腦與遠端 github 連結。
3. 日後則可以使用 git push origin master 將自己電腦裡的檔案存到 github上或是使用  git pull origin master 將檔案從 github 抓取到自己的電腦裡。

