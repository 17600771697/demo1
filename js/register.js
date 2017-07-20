$(function(){//注册
	//应用头部
	$("#header-r").load("common.html #index-Page",function(res){
		//鼠标滑过每个li
		$(".index-page-right li").hover(function(){
			$(this).css({
				background:"#fff"
			})
		},function(){
			$(this).css({
				background:"#f2f2f2"
			})
		})
		//我的账户
		$(".lione").on("mouseenter",function(){
			$(".lione-none-dl").stop().slideDown()
		})
		$(".lione").on("mouseleave",function(){
			$(".lione-none-dl").stop().slideUp()
		})
		$(".lione-none-dl a").hover(function(){
			$(this).css({
				color:"#ec3e7d"
			})
		},function(){
			$(this).css({
				color:"#888"
			})
		})
		//我的购物车
		$(".li-shop").on("mouseenter",function(){
			$(".li-shop-none").stop().css({
				display:"block"
			})
		})
		$(".li-shop").on("mouseleave",function(){
			$(".li-shop-none").stop().css({
				display:"none"
			})
		})
	})
	//console.log(1)
	//验证用户名
	$("#input-code-1").on("blur",function(){
		var value = this.value;
		var reg = /\w+@[a-z0-9]+\.[a-z]+/i;
		var reg1 = /^1[34578]\d{9}$/;
		//console.log(reg.test(value))
		//用户名
		if(reg.test(value)||reg1.test(value)){
			$(".code-span").html();
			
		}else{
			$(".code-span").html("请输入正确的邮箱或手机号码");
		}
		if(this.value == ""){
			$(".code-span").html();
		}
	})
	//密码
	$("#input-code-2").on("blur",function(){
		var value = this.value;
		var reg = /^\w{6,}$/;
		//console.log(reg.test(value))
		if(reg.test(value)){
			$(".code2-span").html();
		}else{
			$(".code2-span").html("请输入6-12位的密码");
		}
		if(this.value == ""){
			$(".code2-span").html();
		}
		
	})
	//再次输入密码
	$("#input-code-4").on("blur",function(){
		var value = this.value;
		var reg = /^\w{6,}$/;
		if(reg.test(value)){
			$(".code4-span").html();
		}else{
			$(".code4-span").html("请输入6-12位的密码");
		}
		console.log($("#input-code-2")[0].value!= $("#input-code-4")[0].value)
		if($("#input-code-2")[0].value != $("#input-code-4")[0].value){
			$(".code4-span").html("两次输入的密码不一致，请重新输入")
		}else{
			$(".code4-span").html();
		}
		if(this.value == ""){
			$(".code4-span").html();
		}
		
	})
	//引用表单验证
	 $('form').validate()
	//点击验证
	
	$("._btn").click(function(){
		var strUser = $("#input-code-1").val();
		console.log($("#input-code-1").val())
		var strPass = $("#input-code-2").val();
		$.ajax("http://datainfo.duapp.com/shopdata/userinfo.php",{
			data:{
				status:"register",
				userID:strUser,
				password:strPass
			}
		})
		.then(function(res){
			console.log(res)
			switch(res){
				case "0":$(".code-span").html("用户名重名，请重新输入!");break;
				case "1":$(".code-span").html("用户名可以使用");break;
				case "2":$(".code-span").html("服务器出现问题，技术正在处理，请稍等片刻");break;
			}
		})
	})
	
	
	
	
	
	
	
})
