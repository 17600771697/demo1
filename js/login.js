$(function(){//登录
	//console.log(1)
	//应用头部
	$("#header-l").load("common.html #index-Page",function(res){
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
	//验证
	//$('form').validate()
	$("#input-code-1").on("blur",function(){
		var value = this.value;
		var reg = /\w+@[a-z0-9]+\.[a-z]+/i;
		var reg1 = /^1[34578]\d{9}$/;
		//console.log(reg.test(value))
		//用户名
		if(reg.test(value)||reg1.test(value)){
			$(".code-span1").html();
			
		}else{
			$(".code-span1").html("请输入正确的邮箱或手机号码");
		}
		if(this.value == ""){
			$(".code-span1").html();
		}
	})
	$('form').validate()
	$(".btn_rr").click(function(){
		console.log(1)
		var strUser = $("#input-code-1").val();
		console.log($("#input-code-1").val());
		var strPass = $("#input-code-2").val();
		$.ajax("http://datainfo.duapp.com/shopdata/userinfo.php",{
			data:{
					status:"login",
					userID:strUser,
					password:strPass
				}
		})
		.then(function(res){
			//console.log(res)
			switch(res){
				case "0":$("..code-span1").html("用户名不存在!");break;
				case "2":$("..code-span2").html("密码不正确请重新输入");break;
			}
		})
	})
})
