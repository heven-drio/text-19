

$(".nav li").click(function(){
    //			1获取点击元素的索引
    //			console.log($(this).index())
                var i = $(this).index();
    //			2根据索引找到指定结构,获取距离顶部的位置
                var t = $(".admin").eq(i).offset().top;
    //			$(document).scrollTop(t);
    //			3配合动画方法,设置滚动距离
                $("html").animate({
                    scrollTop:t
                })
            })


            // var flag = true //设置标识。防止出现跑马灯  
            // $(".nav li").click(function(){  
            //     flag = false  
            //     $(this).addClass("active").siblings().removeClass("active")  
            //     var index = $(this).index()//获取当前点击元素的索引  
            //     var top = $("div").eq(index).offset().top;//获取每个banner到顶部的距离  
            //     $("html,body").stop(true).animate({"scrollTop":top},function(){flag = true})  
            // })  
         