## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。

1. <bgsound> 加入背景音樂 
2. <marquee> 跑馬燈效果
3. <strong> 強調

## 請問什麼是盒模型（box modal）
   
- 盒模型是用來描述 HTML 元素的佈局，盒模型結構從內到外依次是內容（content）、內邊距（padding）、邊框（border）和外邊距（margin) ，在我們使用 CSS 的時候就需要透過這些定義來設計

## 請問 display: inline, block 跟 inline-block 的差別是什麼？

### inline: 
- 無法指定寬度 (width) 和高度 (height)，尺寸非固定會受 padding 值的影響
- 只能設定左右外距 (margin-left & margin-right)，無法設定上下外距 (margin-top & margin-bottom)
- 可以設定上下左右內距(padding)
- 元素不會自動換行，會在同一列一直顯示至空間不足才會換到下一行
- 相鄰的文字和元素之間可以垂直置中對齊
- 在搭配設定行高 (line-height) 的情況下，可以指定與相鄰文字的垂直對齊(vertical-align) 方式

### block: 
- 可以指定寬度 (width) 和高度(height)
- 可以設定上下左右外距(margin)
- 可以設定上下左右內距(padding)
- 元素會由上而下自動換行配置
- 無法設定垂直對齊屬性，元素內容會靠上對齊

### inline-block: 
- 可以指定寬度 (width) 和高度 (height)
- 可以設定上下左右外距 (margin)
- 可以設定上下左右內距 (padding)
- 元素不會自動換行，會在同一列一直顯示至空間不足才會換到下一行
- 可在父元素設定 text-align 屬性，能指定區塊在父元素中的水平對齊方式
- 可以設定垂直對齊 (vertical-align) 屬性，指定垂直對齊的方式

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？
 
- static: 不跳脫排版流不以特殊位置來排列的預設狀態
- relative: 不跳脫排版流以原來的位置當作原點去做移動
- fixed: 跳脫排版流以視窗為原點來移動
- absolute: absolute 的定位點是往上找第一個 position 不是 static 的元素，跳脫排版流以特定元素為原點來移動

