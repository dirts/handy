<style>
    body{
        padding: 0;
        margin: 0;
        text-align:center;
    }
    a{
        text-decoration:none;
    }
</style>

<h1>您应该使用 Android OS 内置浏览器访问这个页面</h1>
<a id="J-show" href="javascript:void(0)">显示一个 shim</a>
<a id="J-hide" href="javascript:void(0)" style="margin-left:30px;">销毁一个 shim</a>
<br />    <br /><br />
<select>
    <option value="one">one</option>
    <option value="two">two</option>
</select>
<br />
<input type="radio" />
<br />
<input type="text" />
<br />
<input type="checkbox" /><br />
<a href="http://qiqicartoon.com" target="_blank">知托付-颂赞</a>
</body>

```javascript
    seajs.use(['android-shim','$'], function (Shim,$) {
        var shown = false;
        var shim = null;
        $('#J-show').click(function (){
            if(shown || !$.os.android){return;}
            shown = true;
            shim = new Shim($('<div id="J-shim">我可以遮住后面的表单控件</div>')
                    .css({
                        left: $('select').offset().left,
                        top: $('select').offset().top ,
                        position: 'absolute',
                        zIndex: 3  ,
                        background: 'rgba(0,0,0,.5)',
                        padding:5,
                        height:150,
                        color :'#fff',
                    })
                    .appendTo('body'));
            shim.sync();
        });
        $('#J-hide').click(function (){
            if(!shown || !$.os.android){return;}
            shown = false;
            $('#J-shim').remove();
            shim.destroy();
        });
    })
```

