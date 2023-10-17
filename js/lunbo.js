const shijian = 3000;  //自动播放速度
var index = 0  // 索引
const swiperitem = document.getElementById('swiper') //获取父元素
const swiper = swiperitem.getElementsByTagName('div') //获取合集
//    自动轮播
var setTime = setInterval(() => {
    if (index < swiper.length - 1) {
        index++
    } else {
        index = 0
    }
    style()
}, shijian)
// 点解切换
for (let i = 0; i < swiper.length; i++) {
    swiper[i].onclick = function () {
        if (i === index) return
        index = i
        style()
    }
}
// 鼠标移入暂停
swiperitem.onmouseover = function () {
    clearInterval(setTime)
}
// 鼠标移出继续轮播
swiperitem.onmouseout = function () {
    setTime = setInterval(() => {
        if (index < swiper.length - 1) {
            index++
        } else {
            index = 0
        }
        style()
    }, shijian)
}
// 滚动事件
function style() {
    console.log(index)
    for (let i = 0; i < swiper.length; i++) {
        swiper[i].className = 'swiper-time dd'
    }
    if (index === swiper.length - 1) {
        swiper[index].className = 'swiper-time b'
        swiper[0].className = 'swiper-time a'
        swiper[index - 1].className = 'swiper-time c'
    } else if (index === 0) {
        swiper[index].className = 'swiper-time b'
        swiper[index + 1].className = 'swiper-time a'
        swiper[swiper.length - 1].className = 'swiper-time c'
    } else {
        swiper[index].className = 'swiper-time b'
        swiper[index + 1].className = 'swiper-time a'
        swiper[index - 1].className = 'swiper-time c'
    }
}
