$(function(){
	
	var li1=$("#zhixuan .ul1").children();
	var li2=$("#zhixuan .ul2").children();
	li1.hover(function(){
		var index = $(this).index();
		li2.eq(index).show().siblings().hide();
		$(this).css({"background":"red","color":"white"}).siblings().css({"background":"#ececec","color":"black"});
	})
	
	$("#zhixuan .youxi1").hover(function(){
		$("#zhixuan .youxi2").slideToggle();
	})
	
	
	
	
	
	
	
	
	
	
	
})
