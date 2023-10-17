var oTop = document.getElementById("gotop");
var screenw = document.documentElement.clientWidth || document.body.clientWidth;
var screenh = document.documentElement.clientHeight || document.body.clientHeight;
oTop.style.left = screenw - oTop.offsetWidth + "px";
oTop.style.top = screenh - oTop.offsetHeight + "px";

    oTop.style.position='fixed'
    oTop.style.right='50px'
    oTop.style.bottom='50px'

oTop.onclick = function () {
    document.documentElement.scrollTop = document.body.scrollTop = 0;
}

var c = document.getElementById('index_jieshao')

c.onmousemove=function(){
  c.style.backgroundImage='linear-gradient(120deg, #ccc, #ddd)';
}
c.onmouseout=function(){
    c.style.backgroundImage='';
  }