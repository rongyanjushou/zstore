$(function(){
	
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
