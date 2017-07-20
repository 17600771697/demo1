$(function(){//公共样式
	$("#index-Quote-header").load("common.html header",function(res){
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
		//微博和微信
		$(".liwb").on("mouseenter",function(){
			$(this).find("div").stop().fadeIn()
		})
		$(".liwb").on("mouseleave",function(){
			$(this).find("div").stop().fadeOut()
		})
		$(".liwx").on("mouseenter",function(){
			$(this).find("div").stop().fadeIn()
		})
		$(".liwx").on("mouseleave",function(){
			$(this).find("div").stop().fadeOut()
		})
		//导航
		$(".nav-R li a").hover(function(){
			$(this).stop().css({
				color:"#ec3e7d"
			})
		},function(){
			$(this).stop().css({
				color:"#000"
			})
		})
		//品牌
		$(".li-brand").on("mouseenter",function(){
			$(".li-brand-none").stop().fadeIn()
		})
		$(".li-brand").on("mouseleave",function(){
			$(".li-brand-none").stop().fadeOut()
		})
		//全部分类
		$(".nav").on("mouseenter",".nav-L",function(){
			$(".nav-L-none-ul").stop().fadeIn()
			})
		$(".nav").on("mouseleave",".nav-L",function(){
			$(".nav-L-none-ul").stop().fadeOut()
		})

		$(".nav-L-none-ul li").hover(function(){
			$(this).css({
				background:"#fff"
			})
		},function(){
			$(this).css({
				background:"#fa3778"
			})
		})
		var o =$(".nav-L li")
		$.each(o, function(index) {
			var that = this;
			$(this).on("mouseenter",function(){		
				$(that).find(".nav-L-none-div").css({
					color:"#fa3778"
				})
				$(that).find(".nav-L-none-i").css({
					color:"#ccc"
				})		
				$(that).addClass("nav-L-none-li1"+index)
				$(".nav-L-none-div").hover(function(){
					$(this).stop().css({
						color:"#000"
					})
					},function(){
						$(this).stop().css({
							color:"#fa3778"
						})
				})
			})				
			$(this).on("mouseleave",function(){	
				$(that).find(".nav-L-none-div").css({
					color:"#fff"
				})
				$(that).find(".nav-L-none-i").css({
					color:"#fff"
				})		
				$(that).removeClass("nav-L-none-li1"+index)			
			})
			//三级菜单
			$(".nav-L-none-ul li").on("mouseenter",function(){
				//console.log($(this))
				$(this).find('.nav-L-none_li1').css({
					display:"block"
				})
				$(".nav-L-none_li1-1 a").hover(function(){
					$(this).css({
						color:"#fa3778"
					})
					},function(){
						$(this).css({
							color:"#999"
						})
					})
			})
			$(".nav-L-none-ul li").on("mouseleave",function(){
				//console.log($(this))
				$(this).find('.nav-L-none_li1').css({
					display:"none"
				})
			})			
		});		
	})
	$("#index-Quote-footer").load("common.html footer",function(res){
		//侧边栏 滚动条事件
		document.onscroll = function(){	
			var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
				//显示返回顶部按钮
				if(scrollTop > 0){
					$("#goTopBtn").css({
						visibility:"visible"
					})
				}else{
					$("#goTopBtn").css({
						visibility:"hidden"
					})
				}
				//点击返回顶部
				$("#goTopBtn").on("click",function(){
					if(document.body.scrollTop > 0){
						document.body.scrollTop = 0
					}else{
						document.documentElement.scrollTop = 0;
					}
				})
				//详情页悬浮
				if(scrollTop >= $(".product-tags").offset().top){
					$(".product-tags").css({
					 	position:"fixed",
					 	top:0,
					 	boxShadow:"2px 4px 5px #ccc"
					})
					// console.log(scrollTop)
					 //console.log($(".product-tags").offset().top)
					 
				} 
				if(scrollTop < 828){
					$(".product-tags").css({
					 	position:"absolute",
					 	boxShadow:0
					 })
				}
		}
		//我的账户
		$(".sidecarts-tab").on("mouseenter",function(){
			$(this).css({
				background:"#fa3778"
			})
			$(this).find(".sidebar-tab-tip")
			.stop()
			.css({display:"block"})
			.animate({
				right:38
			},200)	
		})
		$(".sidecarts-tab").on("mouseleave",function(){
			$(this).css({
				background:"#4c4c4c"
			})
			$(this).find(".sidebar-tab-tip")
			.stop()
			.css({display:"none"})
			.animate({
				right:88
			},200)	
		})
		//我的购物车
		$(".sidecart_").on("click","a",function(){
			$(".sidecart-cont").css({
				display:"block"
			})
		})
		$(".btn-close").on("click",function(){
			console.log(1)
			$(".sidecart_").find(".sidecart-cont").css({
				display:"none"
			})
		})
		$(".sidecart_").on("mouseenter",function(){
			$(this).stop().css({
				background:"#fa3778"
			})
		})
		$(".sidecart_").on("mouseleave",function(){
			$(this).stop().css({
				background:"#4c4c4c"
			})
		})
		//我的收藏
		$(".myfavdiv").on("mouseenter",function(){
			$(this).stop().css({
				background:"#fa3778"
			})
			$(this).find(".sidebar-tab-tip")
			.stop()
			.css({display:"block"})
			.animate({
				right:38
			},200)
		})
		$(".myfavdiv").on("mouseleave",function(){
			$(this).stop().css({
				background:"#4c4c4c"
			})
			$(this).find(".sidebar-tab-tip")
			.stop()
			.css({display:"none"})
			.animate({
				right:88
			},200)
		})
		//浏览记录仪
		$(".sidehistory").on("mouseenter",function(){
			$(this).stop().css({
				background:"#fa3778"
			})
			$(this).find(".sidebar-tab-tip")
			.stop()
			.css({display:"block"})
			.animate({
				right:38
			},200)
		})
		$(".sidehistory").on("mouseleave",function(){
			$(this).stop().css({
				background:"#4c4c4c"
			})
			$(this).find(".sidebar-tab-tip")
			.stop()
			.css({display:"none"})
			.animate({
				right:88
			},200)
		})
	})
	
});

