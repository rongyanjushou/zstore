$(function(){
			if(getCookie("cart")){
						var obj = JSON.parse(getCookie("cart"));
					}else{
						var obj = {};
				}
				var oZongjian = document.getElementById("zongjian");
				var totalNum = 0;
				for(var i in obj){
					totalNum +=parseInt(obj[i]) ;
				}
				oZongjian.innerHTML = totalNum;
	
				var $picList = $(".pic li");
				var $navList = $(".nav li");
				var index = 0;
				var timer1=null;
				$("#banner").hover(function(){
					clearInterval(timer1);
				},function(){
					timer1=setInterval(function(){
					index++;
					if(index==$picList.length){
						index=0;
					}
					$picList.eq(index).fadeIn().siblings().fadeOut();
					$navList.eq(index).addClass("select").siblings().removeClass("select");
					},2000);
					})
					$navList.click(function(){
						var _index = $(this).index();
						$picList.eq(_index).fadeIn().siblings().fadeOut();
						$navList.eq(_index).addClass("select").siblings().removeClass("select");
					})
				$.ajax({
					type:"get",
					url:"json/index1.json",
					async:true,
					success:function(data){
						shuchu(data);
					}
				});
				
				function shuchu(data){
					var html = template("test",data);
					var con = document.getElementById("con");
					con.innerHTML = html;
				}
				
				$("#oul li").mouseover(function(){
					var index = $(this).index();
					$("#banner .shuju").eq(index).show().siblings().hide();
					
					$("#banner .shuju").eq(index).hover(function(){
					$("#banner .shuju").eq(index).show();
						},function(){
					$("#banner .shuju").eq(index).hide()
					});
				})
				
			var index1 = 0;	
			var clone =$("#dianzi .imgList .list1").clone();
			$("#dianzi .imgList").append(clone);
			var timer = setInterval(function(){
				index1++;
				if(index1==3){
					index1=1;
					$("#dianzi .imgList").css({"left":0});
				}
				$("#dianzi .imgList").stop().animate({left:-index1*595},500);
				if(index1==1){
					$(".navList li").eq(0).addClass("select").siblings().removeClass("select");
				}else{
					$(".navList li").eq(1).addClass("select").siblings().removeClass("select");
				}
				
			},2000)
			
				
				
				
				
				
				
				
				
				
				
				
				
})