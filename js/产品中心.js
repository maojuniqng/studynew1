$(function(){
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
