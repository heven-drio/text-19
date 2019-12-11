
var wrap = document.getElementById("wrap");
var box = document.querySelector(".box");
var bigArea = document.getElementById("bigArea");

var r = (wrap.clientWidth - box.clientWidth) / (800 - bigArea.clientWidth);

wrap.onmouseenter = function () {
    box.style.display = "block";
    bigArea.style.display = "block";
}

wrap.onmouseleave = function () {
    box.style.display = "none";
    bigArea.style.display = "none";
}
// wrap.on

box.onmousedown = function (e) {
    var x = e.clientX;
    var y = e.clientY;
    var left = box.offsetLeft;
    var top = box.offsetTop;

    document.onmousemove = function (e) {
        var moved_x = e.clientX;
        var moved_y = e.clientY;

        var resultX = left + moved_x - x;
        var resultY = top + moved_y - y;
        if (resultX < 0) {
            resultX = 0;
        } else if (resultX > wrap.clientWidth - box.clientWidth) {
            resultX = wrap.clientWidth - box.clientWidth;
        }

        if (resultY < 0) {
            resultY = 0;
        } else if (resultY > wrap.clientHeight - box.clientHeight) {
            resultY = wrap.clientHeight - box.clientHeight;
        }
        box.style.left = resultX + "px";
        box.style.top = resultY + "px";

        bigArea.style.backgroundPositionX = -resultX / r + "px";
        bigArea.style.backgroundPositionY = -resultY / r + "px";
    }
}
document.onmouseup = function () {
    document.onmousemove = null;
}

// ——————————————————————————————————————————
// class Magnifier{
//     constructor(){
// //				1.选元素
//         this.sBox = document.querySelector(".sBox");
//         this.sSpan = document.querySelector(".sBox span");
//         this.bBox = document.querySelector(".bBox");
//         this.bImg = document.querySelector(".bBox img");
        
// //				2.绑定事件
//         this.init()
//     }
//     init(){
//         var that = this;
// //				绑定事件
// //				进入
//         this.sBox.onmouseover = function(){
// //					3.显示隐藏的内容
//             that.over()
//         }
// //				移动
//         this.sBox.onmousemove = function(eve){
//             var e = eve || window.event;
// //					4.移动时计算比例
//             that.move(e)
//         }
// //				离开
//         this.sBox.onmouseout = function(){
// //					5.隐藏
//             that.out()
//         }
//     }
//     over(){
// //				显示
//         this.sSpan.style.display = "block";
//         this.bBox.style.display = "block";
// //				根据右边图和框的比例,计算span的宽高
//         this.sSpanW = (this.bBox.offsetWidth / this.bImg.offsetWidth * this.sBox.offsetWidth);
//         this.sSpanH = (this.bBox.offsetHeight / this.bImg.offsetHeight * this.sBox.offsetHeight);
// //				设置span的宽高
//         this.sSpan.style.width = this.sSpanW + "px";
//         this.sSpan.style.height = this.sSpanH + "px";
        
// //				提前获取尺寸,方便将来使用
//         this.sW = this.sBox.offsetWidth;
//         this.sH = this.sBox.offsetHeight;

//         this.bW = this.bBox.offsetWidth;
//         this.bH = this.bBox.offsetHeight;

//         this.bImgW = this.bImg.offsetWidth;
//         this.bImgH = this.bImg.offsetHeight;
//     }
//     move(e){
// //				计算span要移动的left和top
//         var l = e.clientX - this.sBox.offsetLeft - this.sSpan.offsetWidth/2;
//         var t = e.clientY - this.sBox.offsetTop - this.sSpan.offsetHeight/2;
// //				span的边界限定
//         if(l<0) l=0;
//         if(t<0) t=0;
//         if(l>this.sW - this.sSpanW){
//             l = this.sW - this.sSpanW;
//         }
//         if(t>this.sH - this.sSpanH){
//             t = this.sH - this.sSpanH;
//         }
// //				设置span的位置
//         this.sSpan.style.left = l + "px";
//         this.sSpan.style.top = t + "px";
// //				根据span移动的位置,计算出比例,在根据比例,计算右边大图要移动的距离
//         this.bImg.style.left = l / (this.sW - this.sSpanW) * (this.bW - this.bImgW) + "px";
//         this.bImg.style.top = t / (this.sH - this.sSpanH) * (this.bH - this.bImgH) + "px";
//     }
//     out(){
// //				隐藏
//         this.sSpan.style.display = "none";
//         this.bBox.style.display = "none";
//     }
// }

// new Magnifier();





