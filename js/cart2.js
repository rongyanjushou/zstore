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
				html +='<li id="gouwu" data-id="'+i+'"><img src="'+data[i].imgsrc+'"><span>'+data[i].name+'</span><span>'+data[i].price+'</span><span><em class="minus">-</em><input type="text" class="num" value="'+obj[i]+'"><em class="add">+</em></span><span class="del">删除</span></li>';
			}
		$("#cartbox")[0].innerHTML=html;
		
		
		var aJian = document.getElementsByClassName("minus");
		var aJia = document.getElementsByClassName("add");
		var aNum = document.getElementsByClassName("num");
		var aDel = document.getElementsByClassName("del");
		var aLi = $("#cartbox")[0].children;
		var oZongjia = document.getElementById("zongjia");
		var oCart = $("#cartbox")[0];
		var oZongjian = document.getElementById("zongjian");
			
			for(var i = 0; i < aJian.length; i++){
				aJian[i].onclick = function(){
					
					var oInput = this.nextElementSibling || this.nextSibling;
					oInput.value--;
					
					var id = this.parentNode.parentNode.getAttribute("data-id");
					
					obj[id] = parseInt(oInput.value);
					jszj();
					var str = JSON.stringify(obj);
					
					setCookie("cart",str,7);
					
				}
				
				aJia[i].onclick = function(){
					
					var oInput = this.previousElementSibling || this.previousSibling;
					oInput.value++;
					
					var id = this.parentNode.parentNode.getAttribute("data-id");
					
					obj[id] = parseInt(oInput.value);
					jszj();
					var str = JSON.stringify(obj);
					
					setCookie("cart",str,7);
					
				}
				
				aNum[i].onchange = function(){
					
					var id = this.parentNode.parentNode.getAttribute("data-id");
					obj[id] = parseInt(this.value);
					jszj();
					
					var str = JSON.stringify(obj);
					setCookie("cart",str,7);
					
				}
				
				aDel[i].onclick = function(){
					
					var id = this.parentNode.getAttribute("data-id");
					oCart.removeChild(this.parentNode);
					delete obj[id];
					jszj();
					var str = JSON.stringify(obj);
					setCookie("cart",str,7);
					
				}				
			}
			$("#qingkong").click(function(){
				$("#cartbox")[0].innerHTML=null;
				 obj = {};
				 jszj();
				var str = JSON.stringify(obj);
				setCookie("cart",str,7);
				
			})
			
			function jszj(){
				var totalPrice = 0;
				var totalNum = 0;
				for(var i in obj){
					var price = data[i].price.replace("￥","");
					totalPrice += obj[i]*price;
					totalNum +=parseInt(obj[i]) ;
				}
				oZongjian.innerHTML = totalNum;
				oZongjia.innerHTML = totalPrice;
			}
			
			
			jszj();
		
		
	}
	
	
		
		
		
		
		
		
		
		
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
