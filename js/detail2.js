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
		$("#btnshow .minus").click(function(){
			$("#snum")[0].value--;
			if($("#snum")[0].value<0){
				$("#snum")[0].value=0;
			}
		});
		$("#btnshow .add").click(function(){
			$("#snum")[0].value++;
		});
		
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
		
		$("#btn").click(function(){
		if(getCookie("cart")){
				var obj = JSON.parse(getCookie("cart"));
			}else{
				var obj = {};
		}	
		var id = $(this).attr("data-id");
			obj[id]=$("#snum").val();
		
		var cook = JSON.stringify(obj);
		setCookie("cart",cook,7);
		
	})
			
	var $zoom = $("#imgZoom .zoom");
	var $leftzoom = $("#imgZoom");
	console.log($leftzoom);
	var $rightzoom = $("#bigZoom");
	var $bigimg = $("#bigZoom img");
	$leftzoom.mousemove(function(e){
		$bigimg.show();
		$zoom.show();
		var _left = e.pageX-$leftzoom.offset().left-0.5*$zoom.width();
		var _top = e.pageY-$leftzoom.offset().top-0.5*$zoom.height();
		console.log(e.pageX,$leftzoom.offset().left,$zoom.width());
		if(_left<0){
		_left=0;	
		}
		if(_top<0){
		_top=0;
		}
		if(_left>$leftzoom.width()-$zoom.width()){
			_left=$leftzoom.width()-$zoom.width();
		}
		if(_top>$leftzoom.height()-$zoom.height()){
			_top=$leftzoom.height()-$zoom.height();
		}
		$zoom.css({"left":_left,"top":_top});
		$bigimg.css({"left":-2*_left,"top":-2*_top});
		
	})
	$leftzoom.mouseout(function(){
		$zoom.hide();
		$bigimg.hide();
	})
		
		
}	
	
	
	
	
	
	
	
	
	
	
	
	
})



