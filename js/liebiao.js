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
	$.ajax({
			type:"get",
			url:"json/liebiao.json",
			async:true,
			success:function(data){
				liebiao(data);
			}
		});
	
	function liebiao(data){
		var html = template("liebiao1",data)
		$("#section")[0].innerHTML = html;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
