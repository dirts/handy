<style>
    * {
        margin: 0;
        padding: 0;
    }

    li {
        list-style: none;
    }

    li a {
        text-decoration: none;
    }

    h2 { margin: 30px 0 10px; font-size: 17px; }
    .loading { background: #EBF5FA url(assets/loading.gif) no-repeat 50% 50%; }

    p.code-switch { color: #09f; cursor: pointer; margin-top: 10px; }
    pre.code {
        color: #444;
        cursor: auto;
        border-left: 2px solid #7F96AA;
        margin-top: 5px;
        padding: 0 10px 20px 10px;
        font-size: 14px;
    }
</style>

<h2>Carousel - 旋转木马</h2>
<style>
    .scrollable {
        position: relative;
        width: 200px;
    }
    .scrollable .prev, .scrollable .next {
        position: absolute;
        top: 50px;
        color: #666;
        cursor: pointer;
    }
    .scrollable .prev { left: -50px; }
    .scrollable .next { right: -50px; }
    .scrollable .disable { color: #ddd; cursor: default; }

    .scrollable .ui-switchable-nav {
        position: absolute;
        right: 30px;
        top: -10px;
    }
    .scrollable .ui-switchable-nav li {
        float: left;
        padding: 5px;
        font-size: 18px;
        cursor: pointer;
    }
    .scrollable .ui-switchable-nav li.ui-switchable-active {
        color: #C8282B;
    }

    .scroller {
        position: relative;
        width: 200px;
        height: 120px;
        border: 1px solid #ccc;
        background-color: #F9F9F9;
        margin: auto;
        overflow: hidden;
    }
    .scroller .ui-switchable-content img {
        float: left;
        width: 50px;
        height: 50px;
        padding: 2px;
        margin: 20px 5px;
        background-color: #fff;
        border: 1px solid #ccc;
        display: inline !important; /* fix ie6 双边距 bug */
    }
</style>
<div id="demo4" class="section scrollable" data-effect="scrollx" data-easing="easeOutStrong" data-step="5" data-view-size="[680]" data-circular="true">
    <span id="scroller-prev" class="prev" data-role="prev">&lsaquo; prev</span>
    <span id="scroller-next" class="next" data-role="next">next &rsaquo;</span>
    <div class="scroller">
        <div class="ui-switchable-content" data-role="content">
            <!-- 1-5 -->
            <img alt="" src="http://farm1.static.flickr.com/143/321464099_a7cfcb95cf_t.jpg"/>
            <img alt="" src="http://farm4.static.flickr.com/3089/2796719087_c3ee89a730_t.jpg"/>
            <img alt="" src="http://farm1.static.flickr.com/79/244441862_08ec9b6b49_t.jpg"/>
            <img alt="" src="http://farm1.static.flickr.com/28/66523124_b468cf4978_t.jpg"/>
            <img alt="" src="http://farm1.static.flickr.com/164/399223606_b875ddf797_t.jpg"/>
            <!-- 5-10 -->
            <img alt="" src="http://farm1.static.flickr.com/163/399223609_db47d35b7c_t.jpg"/>
            <img alt="" src="http://farm1.static.flickr.com/135/321464104_c010dbf34c_t.jpg"/>
            <img alt="" src="http://farm1.static.flickr.com/40/117346184_9760f3aabc_t.jpg"/>
            <img alt="" src="http://farm1.static.flickr.com/153/399232237_6928a527c1_t.jpg"/>
            <img alt="" src="http://farm1.static.flickr.com/50/117346182_1fded507fa_t.jpg"/>
            <!-- 10-15 -->
            <img alt="" src="http://farm4.static.flickr.com/3629/3323896446_3b87a8bf75_t.jpg"/>
            <img alt="" src="http://farm4.static.flickr.com/3023/3323897466_e61624f6de_t.jpg"/>
            <img alt="" src="http://farm4.static.flickr.com/3650/3323058611_d35c894fab_t.jpg"/>
            <img alt="" src="http://farm4.static.flickr.com/3635/3323893254_3183671257_t.jpg"/>
            <img alt="" src="http://farm4.static.flickr.com/3624/3323893148_8318838fbd_t.jpg"/>
        </div>
        <ul class="ui-switchable-nav" data-role="nav">
            <li class="ui-switchable-active">&bull;</li>
            <li>&bull;</li>
            <li>&bull;</li>
        </ul>
    </div>
</div>

```javascript
seajs.use(['$','carousel'], function($,carousel) {
    new  carousel({
        element: '#demo4' ,
        viewSize: [200]
    });
});
```
