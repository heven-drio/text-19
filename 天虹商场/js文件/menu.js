
$(".bbox").children("li").mousemove(function(){
    $(this).children("ul").stop().show().parent().siblings().children("ul").stop().hide()
})

$(".bbox").children("li").mouseout(function() {
    $(".bbox").children("li").stop().children("ul").stop().hide()
 })
