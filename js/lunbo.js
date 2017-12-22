$(function(){
	
				var $picList = $(".pic li");
				var $navList = $(".nav li");
				var index = 0;
				setInterval(function(){
					index++;
					if(index==$picList.length){
						index=0;
					}
				$picList.eq(index).fadeIn().siblings().fadeOut();
				$navList.eq(index).addClass("select").siblings().removeClass("select");
				},2000);
				
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
				
			
				
				
				
				
				
				
				
				
				
				
				
				
})