$(function(){
	
	var shouji = getCookie("shouji");
	var mima = getCookie("mima");
	console.log(shouji,mima);
	$("#btn").click(function(){
	if($("#shouji").val()==shouji){
	if($("#mima").val()==mima){
		window.location.assign("shouye.html");
			}
		}
	})
		
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
