

$(".xtop").children("li").mousemove(function(){
   console.log(9)
   $(this).children("ul").stop().show().parent().siblings().children("ul").stop().hide()
})

