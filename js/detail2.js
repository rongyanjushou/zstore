$(function(){
	var str = location.search;
	var id = str.split("=")[1];
	$.ajax({
		type:"get",
		url:"json/detail2.json",
		async:true,
		success:function(data){
			console.log(data);
			detail(data);
		}
	});
	function detail(data){
		var html = template("detail2",data[id]);
		$("#detailbox")[0].innerHTML = html;
		$("#btn").click(function(){
		if(getCookie("cart")){
				var obj = JSON.parse(getCookie("cart"));
			}else{
				var obj = {};
		}	
		var id = $(this).attr("data-id");
		if(!obj[id]){
			obj[id] = 1;
			}else{
			obj[id]++;
		}
		console.log(obj);
		
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
		var cook = JSON.stringify(obj);
		setCookie("cart",cook,7);
		
	})
	}	
	
	
	
	
	
	
	
	
	
	
	
	
})



