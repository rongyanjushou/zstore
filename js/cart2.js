$(function(){
	
	$.ajax({
		type:"get",
		url:"json/detail2.json",
		async:true,
		success:function(data){
			console.log(data);
			cart(data);
		}
	});
	function cart(data){
		function getCookie(name) {
			var str = document.cookie;
			var arr = str.split("; ");
			for(var i = 0; i < arr.length; i++) {
				var arr1 = arr[i].split("=");
				if(arr1[0] == name) {
					return arr1[1];
				}
			}
		}
		function setCookie(name, value, n) {
			var oDate = new Date();
			oDate.setDate(oDate.getDate() + n);
			document.cookie = name + "=" + value + ";expires=" + oDate;
		}
		if(getCookie("cart")){
				var obj = JSON.parse(getCookie("cart"));
			}else{
				var obj = {};
		}
			var html = "";
		for(var i in obj){
				html +='<li data-id="'+i+'"><img src="'+data[i].imgsrc+'"><span>'+data[i].name+'</span><span>'+data[i].price+'</span><span><em class="minus">-</em><input type="text" class="num" value="'+obj[i]+'"><em class="add">+</em></span><span class="del">删除</span></li>';
			}
		$("#cartbox")[0].innerHTML=html;
		
	}
	
	
		
		
		
		
		
		
		
		
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
