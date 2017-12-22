			$(function(){
				
				$.ajax({
					type:"get",
					url:"json/dongyu.json",
					async:true,
					success:function(data1){
						shuchu1(data1);
					}
				});
				
				function shuchu1(data1){
					var html = template("dongyu1",data1);
					var con1 = $("#dongyu .center");
					con1[0].innerHTML = html;
				}
				
				$.ajax({
					type:"get",
					url:"json/dongyu.json",
					async:true,
					success:function(data2){
						shuchu2(data2);
					}
				});
				
				function shuchu2(data2){
					var html = template("dianzi2",data2);
					var con2 = $("#dianzi .right");
					con2[0].innerHTML = html;
					var con21 = $("#shuma .zhong");
					con21[0].innerHTML=html;
					var con22 = $("#shuma .middle");
					con22[0].innerHTML=html;
				}
				
				$.ajax({
					type:"get",
					url:"json/shuju2.json",
					async:true,
					success:function(data3){
						shuchu3(data3);
					}
				});
				function shuchu3(data3){
					var html = template("rexiao3",data3);
					var con3 = $("#rexiao .big");
					con3[0].innerHTML = html;
				}
				
				$.ajax({
					type:"get",
					url:"json/shuju4.json",
					async:true,
					success:function(data4){
						shuchu4(data4);
					}
				});
				
				function shuchu4(data4){
					var html = template("pinpai4",data4);
					var con4 = $("#pinpai .bigbox");
					con4[0].innerHTML = html;
				}
				
				$.ajax({
					type:"get",
					url:"json/shuju5.json",
					async:true,
					success:function(data5){
						shuchu5(data5);
					}
				});
				
				function shuchu5(data5){
					var html = template("tongcheng5",data5);
					var con5 = $("#tongcheng .xia");
					con5[0].innerHTML = html;
				}
				
				$.ajax({
					type:"get",
					url:"json/shuju6.json",
					async:true,
					success:function(data6){
						shuchu6(data6);
					}
				});
				
				function shuchu6(data6){
					var html = template("tongcheng6",data6);
					var con6 = $("#tongcheng .shang");
					con6[0].innerHTML = html;
					var con7 =$("#dongyu .right");
					con7[0].innerHTML = html;
				}
				
				
				
			})
			