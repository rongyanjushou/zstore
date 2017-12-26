$(function(){
	
	$("#btn").click(function(){
		$.getJSON("http://datainfo.duapp.com/shopdata/userinfo.php",{status:"login",userID:$("#shouji").val(),password:$("#mima").val()},function(data){
			if(data==0){
				confirm("用户名不存在");
			}else if(data==2){
				confirm("用户名密码不符");
			}else{
				window.location.replace("shouye.html");
			}
		})
	})
	
})
