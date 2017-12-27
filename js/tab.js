$(function(){
	
	var li1=$("#zhixuan .ul1").children();
	var li2=$("#zhixuan .ul2").children();
	li1.hover(function(){
		var index = $(this).index();
		li2.eq(index).show().siblings().hide();
		$(this).css({"background":"red","color":"white"}).siblings().css({"background":"#ececec","color":"black"});
	})
	$("#zhixuan .youxi1").hover(function(){
		$(this).children().eq(0).show().animate({"top":0},500);
	},function(){
		$(this).children().eq(0).hide().animate({"top":173},10);
	})
	$("#huakuai div:not(:last)").hover(function(){
		$(this).children().eq(0).hide();
		$(this).children().eq(1).show().animate({"left":-65},500);
	},function(){
		$(this).children().eq(0).show();
		$(this).children().eq(1).hide().animate({"left":0},10);
	})
	
	$("#huakuai .shangqu").click(function(){
		$("html,body").animate({"scrollTop":0},0)
	})
	$("#huakuai .shangqu").hover(function(){
		$(this).children().eq(0).hide();
		$(this).children().eq(1).show();
	},function(){
		$(this).children().eq(0).show();
		$(this).children().eq(1).hide();
	})
	
	
	
	
	
	
	
	
})
