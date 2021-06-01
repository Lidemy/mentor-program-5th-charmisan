## 什麼是 DOM？
# DOM 全名為 Document Object Model，就是把一份 HTML 文件內的各個標籤，包括文字、圖片等等都定義成物件，而這些物件會形成一個樹狀結構，在 DOM 中，通常分成以下四種節點，Document 、 Element 、 Text 和 Attribute，而瀏覽器就是利用這樣的結構來解析 HTML 文件

## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？
# 事件冒泡指的是從啟動事件的元素節點開始，逐層往上傳遞，直到整個網頁的根節點，也就是 document，事件捕獲機制則正好相反，事件由上往下依序被觸發

## 什麼是 event delegation，為什麼我們需要它？
# Event delegate 是基於 event binding 上而能減少監聽器數目的方法，將 click 事件綁在 parent 上，藉由 Event Bubbling 傳遞給 child，而非直接將事件綁定在 child 上


## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？
# event.stopPropagation() 是停止事件傳遞，就是阻止 DOM 再往下一個節點繼續捕獲或是冒泡事件，想要點擊 element 的時候，只觸發 element 的事件

element.addEventListener("click", function (e) {
 console.log("clicked")
 e.stopPropagation()
})

# event.preventDefault() 是取消瀏覽器預設行為，在點擊 link 加設了 preventDefault() ，則連結去別的地方的預設行為被取消

link.addEventListener("click", function (e) {
 e.preventDefault();
})

