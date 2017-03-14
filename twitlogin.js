function click(sel){var event=document.createEvent('MouseEvents');event.initMouseEvent('click',1,1,window,1,0,0,0,0,0,0,0,0,0,null);document.querySelector(sel).dispatchEvent(event);}
var page = require('webpage').create({viewportSize:{width: 1600,height: 900},
settings:{userAgent:'Mozilla/5.0 (X11; Linux x86_64; rv:49.0) Gecko/20100101 Firefox/49.0',
javascriptEnabled:'true',
loadImages:'false'
}});
// WOOOO: gabriel.e.c.haskins@gmail.com
page.onConsoleMessage = function (msg, line, source) {
    console.log('console> ' + msg);
};

page.open("https://twitter.com/login/error?redirect_after_login=%2F", function(status) {
    if ( status === "success" ) {
        page.evaluate(function(click) {
              document.querySelector("input[name='session[username_or_email]']").value = “USER”;
              document.querySelector("input[name='session[password]']").value = “PASS”;
              document.getElementsByClassName(‘t1-form clearfix signin js-signin’).item(0).submit();
              console.log("Login submitted!");
//          setTimeout(function(){ scrollTo(0,document.body.scrollHeight) },2500);//Scrolling to bottom.
//click("a[someAttr=someVal]")
        },click);
        setTimeout(function () {
          page.render('test1.png');
          phantom.exit();
        }, 5000);
   }
});
