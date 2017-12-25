$(function(){
	var shouji = getCookie("shouji");
	var mima = getCookie("mima");
	console.log(shouji,mima);
	
	$("input").focus(function(){
		$(this).css({"border-color":"red"});
	})
	$("input").focusout(function(){
		$(this).css({"border-color":"#cecece"});
	})
	
	$("#shouji").change(function(){
				var str =$("#shouji").val();
				var jiance = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
				
				var flag = jiance.test(str);
					if(flag==false){
						$("#section .yanshouji").show();
					}else{
						$("#section .yanshouji").hide();
					}
			})
	
	$("#mima").change(function(){
			var str =$("#mima").val();
			var jiance = /^\w{6,16}$/;
			var flag = jiance.test(str);
				if(flag==false){
					$("#section .yanmima").show();
				}else{
					$("#section .yanmima").hide();
				}
	})
	$("#yanmima").change(function(){
			var str =$("#mima").val();
			var str2 = $("#yanmima").val();
				if(str!=str2){
					$("#section .yanmima2").show();
				}else{
					$("#section .yanmima2").hide();
				}
	})
	
	$("#btn").click(function(){
		setCookie("shouji",$("#shouji").val(),30);
		setCookie("mima",$("#mima").val(),30);
		
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
