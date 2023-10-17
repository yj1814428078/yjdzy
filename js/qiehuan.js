var t = null;
time()
t = setTimeout(time, 1000);//開始运行
function time() {
    clearTimeout(t);//清除定时器
    dt = new Date();
    var y = dt.getFullYear();
    var mt = dt.getMonth() + 1;
    var day = dt.getDate();
    var h = dt.getHours();//获取时
    var m = dt.getMinutes();//获取分
    var s = dt.getSeconds();//获取秒
    document.querySelector(".showTime").innerHTML = y + "年" + mt + "月" + day + " " + h + "时" + m + "分" + s + "秒";
    t = setTimeout(time, 1000); //设定定时器，循环运行     
}
document.getElementById("index_xiezhen").onmouseover = function () {
    document.getElementById("left").style.display = "block"
    document.getElementById("right").style.display = "block"
}
document.getElementById("index_xiezhen").onmouseout = function () {
    document.getElementById("left").style.display = "none"
    document.getElementById("right").style.display = "none"
}
document.getElementById("right").onclick = function () {
    if (document.getElementById("one_xiezhen").style.display == "none") {
        document.getElementById("one_xiezhen").style.display = "block"
        document.getElementById("two_xiezhen").style.display = "none"
    } else {
        document.getElementById("one_xiezhen").style.display = "none"
        document.getElementById("two_xiezhen").style.display = "block"

    }
}
document.getElementById("left").onclick = function () {
    if (document.getElementById("one_xiezhen").style.display == "none") {
        document.getElementById("one_xiezhen").style.display = "block"
        document.getElementById("two_xiezhen").style.display = "none"
    } else {
        document.getElementById("one_xiezhen").style.display = "none"
        document.getElementById("two_xiezhen").style.display = "block"

    }
}