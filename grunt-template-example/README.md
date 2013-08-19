grunt-template-example
======================

Generate index.html for different setups by grunt template

在執行grunt之後，css與js檔案可能會經過壓縮、合併，檔案名稱會與原本的不同，那html這邊的引用要怎麼辦呢?

這時候就可以利用grunt的template來做。

###gruntfile.js###
#### (1) 這邊註冊了三個task: dev, prod, default</li>####

若執行：
```
grunt       // 執行default，依照這個gruntfile的設定，會去執行dev這個task
grunt dev   // 執行dev這個task
grunt prod  // 執行prod這個task
```
由於這邊只是一個小小的範例，所以dev與prod的差別只是一個config變數:isProd，在prod中設定成true，以便提供給template檔參考。

#### (2) 還有一個index的task，這邊是把template轉成html。</li>####


###dev/index.tmpl###
  這邊其實就是要產出的index.html的樣本檔，注意這邊有用到剛剛在gruntfile.js中設定的isProd這個變數。

參考資料：
<a href="http://stackoverflow.com/questions/12401998/have-grunt-generate-index-html-for-different-setups" target="_blank">have-grunt-generate-index-html-for-different-setups</a>
