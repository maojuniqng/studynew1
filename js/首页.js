$(function(){
$(".tu-1,.tu-2,.tu-3").hover(function(){
	$(this).css({"transform":"scale(1.2)","transition":"all 0.5s"})	
	$(this).parent().children(".baikuang").css("background","rgb(255,255,255,0.5)")
},function(){
	$(this).css({"transform":"scale(1)","transition":"all 0.5s"})	
	$(this).parent().children(".baikuang").css("background","")
})

$(".tu-4,.tu-5,.tu-6").hover(function(){
	$(this).css({"transform":"scale(1.2)","transition":"all 0.5s"})	
	$(this).parent().children(".baikuang").css("background","rgb(255,255,255,0.5)")
},function(){
	$(this).css({"transform":"scale(1)","transition":"all 0.5s"})	
	$(this).parent().children(".baikuang").css("background","")
})

  $(".aa1").mouseenter(function(){
 $(this).children(".baikuang").stop().animate({"left":"30%","opacity":"1"},500);
  })

    $(".aa1").mouseleave(function(){
 $(this).children(".baikuang").stop().animate({"left":"0%","opacity":"0"},500);
  })
    
    $(".aa2").mouseenter(function(){
 $(this).children(".baikuang").stop().animate({"left":"30%","opacity":"1"},500);
  })

    $(".aa2").mouseleave(function(){
 $(this).children(".baikuang").stop().animate({"left":"0%","opacity":"0"},500);
  })
      $(".aa3").mouseenter(function(){
 $(this).children(".baikuang").stop().animate({"left":"30%","opacity":"1"},500);
  })

    $(".aa3").mouseleave(function(){
 $(this).children(".baikuang").stop().animate({"left":"0%","opacity":"0"},500);
  })
    
    
     $(".aa4").mouseenter(function(){
 $(this).children(".baikuang").stop().animate({"left":"30%","opacity":"1"},500);
  })

    $(".aa4").mouseleave(function(){
 $(this).children(".baikuang").stop().animate({"left":"0%","opacity":"0"},500);
  })
    $(".aa5").mouseenter(function(){
 $(this).children(".baikuang").stop().animate({"left":"30%","opacity":"1"},500);
  })

    $(".aa5").mouseleave(function(){
 $(this).children(".baikuang").stop().animate({"left":"0%","opacity":"0"},500);
  })
    
    $(".v1").mouseenter(function(){
//  	alert("dsviuo")
    	$(this).children(".t1>img").css({"transform":"rotate(360deg)","transition":"all 0.5s"});
    })
    
    
    
    //底部
    $(".xz").mouseenter(function(){
		$(this).children("img").css({"transform":"rotate(360deg)","transition":"all 0.5s"});
    })
    $(".xz").mouseleave(function(){
    	$(this).children("img").css({"transform":"rotate(-360deg)","transition":"all 0.5s"});
    })
    $("#yi").hover(function(){
    	$("#er").show();
    },function(){
    	$("#er").hide();
    })

    //返回顶部
    	$(document).on('scroll',function(){
		var src=$(document).scrollTop();
//		console.log(src);
		if(src>=1000){
			$('.e').animate({top:src},10);
			$('.back').show();
		}else{
			$('.e').animate({top:1000},0);
			$('.back').hide();
		}
		
		$('.back').click(function(){
			$(document).scrollTop(0);
		})
		
	})
})