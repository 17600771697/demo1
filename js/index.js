$(function(){//主页
	//全部分类
	$(".nav").on("mouseenter",".nav-L",function(){
		$(".nav-L-none-ul").stop().fadeOut()
	})
	$(".nav").on("mouseleave",".nav-L",function(){
		$(".nav-L-none-ul").stop().fadeOut()
	})
//----------------------------------------------------------------
	//banner 轮播图
	var ospan = $(".banner-smal li")
	function Banner(){
		this.all = null;
		this.index = 0;
		
		this.init();			
		this.timer=null;
		//console.log(ospan)
		//console.log($(".banner-smal"))
	}		
	Banner.prototype.init = function(){
		var that = this;
		
		$.each($(".banner-smal li"),function(index){		
			$(this).on("mouseenter",function(){
				//console.log(index)
				 that.index = index;
					that.change(this,index)
					//console.log(index)					
			})			
		})	
		this.ini()			
	}
	Banner.prototype.change = function(a,ipt){
		//console.log(ipt)
		var that = this;
		clearInterval(that.timer)
		$(a).addClass("active").siblings().removeClass("active")
		$(".banner-big").children().eq(ipt)
		.stop().fadeIn()
		.siblings()
		.stop().fadeOut()
	}	
	Banner.prototype.ini = function(){
		var that = this;
		$("#index-banner").on("mouseenter",function(){
			clearInterval(that.timer)
		})
		$("#index-banner").on("mouseleave",function(){
			that.move();
		})
	}
	Banner.prototype.move = function(){
		var that = this;
		//console.log(this.index)
		clearInterval(this.timer)
		this.timer = setInterval(function(){
			clearInterval(this.timer)
		if(that.index >= ospan.length -1){
			that.index = 0
		}else{
			that.index ++
		}
		ospan.eq(that.index).addClass("active").siblings().removeClass("active")
		$(".banner-big").children().eq(that.index)
			.stop().fadeIn()
			.siblings()
			.stop().fadeOut()
		},3000)
		//this.all = that.index;
	}
	new Banner()
//--------------------滚动新闻--------------------------------------		
	$(".content_ul li").on("mouseenter",function(){
		$(this).css({
			color:"#fa3778"
		})
	})
	$(".content_ul li").on("mouseleave",function(){
		$(this).css({
			color:"#999"
		})
	})
	function Roll(){
		var that = this;
		var i = 0;
		var timer = null;
		var height= $(".content_ul").height()
		clearInterval(timer)
		timer = setInterval(function(){		
			if(i == $(".content_ul").height()){
				i=0;
			}
				i++;
			
			$(".content_ul")[0].style.top = -i +"px"
		},100)	
	}
	Roll()	
	//------------------每日必看---------------------------------
	$.ajax("http://xiaopaopao.duapp.com/shasha/libs/see.json")
	.then(function(res){
		//console.log(res)
		var html = "";
		$.each(res,function(index,res){
			html += '<a class="container-odd" href="">'+
						'<div class="container-item-odd">'+
							'<img src="'+res.img+'"/>'+
							'<div class="container-item-info">'+
								'<p class="container-item-info-title">'+res.title+'</p>'+
								'<p class="container-item-info-subtit">'+res.subtit+'</p>'+
								'<p class="container-item-info-date">'+res.date+'</p>'+
								'<span class="container-item-info-date-btn">立即疯抢</span>'+
							'</div>'+
						'</div>'+
					'</a>'		
		});
		$(".Daily-must-see-container").html(html)
	})
	//----------------限时特卖----------------------------
	$.ajax("http://xiaopaopao.duapp.com/shasha/libs/offer.json")
	.then(function(res){
		//console.log(res)
		var html = "";
		$.each(res,function(index,res){
			html += '<a href="">'+
							'<div class="Flash-Sale-item">'+
								'<div class="Flash-Sale-item-L">'+
									'<img src="'+res.img+'"/>'+
									'<i>'+
										'<b>'+
											res.count+
											'<span>折</span>'+
										'</b>'+
									'</i>'+
								'</div>'+
								'<div class="Flash-Sale-item-R">'+
									'<div class="Flash-Sale-item-R-down">'+
										'剩余'+
										'<span>12</span>:'+
										'<span>12</span>:'+
										'<span>12</span>'+
									'</div>'+
									'<div class="brief-introduction">'+
										'<div class="brief-introduction-intro">'+
											'<i class="iconfont icon-iconfonticon"></i>'+
											res.intro+
										'</div>'+
										'<div class="brief-introduction-title">'+
											'<b>[保税仓直送]</b>'+
											res.title+              
										'</div>'+
										'<div class="brief-introduction-price">'+
											'<div class="brief-introduction-price-cur">'+
												'<span class="brief-introduction-price-cur-sig">￥</span>'+
												'<span class="brief-introduction-price-cur-num">'+res.num+'</span>'+
											'</div>'+
											'<div class="brief-introduction-price-old">'+
												'<span class="brief-introduction-price-old-num">'+res.old+'</span>'+
											'</div>'+
										'</div>'+
									'</div>'+
									'<div class="Flash-Sale-item-Open-grab">'+
										'<div class="Flash-Sale-item-Open-grab-sold">'+
											'已售'+
											'<span>'+res.soldnum+'</span>'+
											'件'+
										'</div>'+
										'<span class="Flash-Sale-item-Open-grab-qiang">马上抢</span>'+
									'</div>'+
								'</div>'+
							'</div>'+
						'</a>'
		})
		$(".Flash-Sale-cantent").html(html)
	})
//----------------排行榜-左-------------------
	$.ajax("http://xiaopaopao.duapp.com/shasha/libs/Ranking.json")	
	.then(function(res){
		//console.log(res[1].img)
		var html = "";
		$.each(res,function(index,value){
			//console.log(value)
	html += '<div class="Ranking-L-cantent-icon"></div>'+
				'<div class="">'+
					'<a href="">'+
						'<img src="'+res[index].img+'"/>'+
					'</a>'+
					'<div class="Ranking-L-cantent-info">'+
						'<div class="Ranking-L-cantent-name">'
							+res[index].name+
						'</div>'+
						'<div class="Ranking-L-cantent-price">'+
							'<div class="Ranking-L-cantent-price-cur">'+
								'<span>'+res[index].num+'</span>'+
							'</div>'+
							'<div class="Ranking-L-cantent-price-old">'+
								'<span>'+res[index].old+'</span>'+
							'</div>'+
							'<div class="Ranking-L-cantent-price-sold">'+
								'已售'+
								'<span>'+res[index].soldnum+'</span>'+
							'</div>'+											
						'</div>'+
					'</div>'				
		});
		$(".Ranking-L-cantent").html(html)
	})
	//----------排行榜中-------
	$.ajax("http://xiaopaopao.duapp.com/shasha/libs/Ranking2.json")
	.then(function(res){
//		/console.log(res)
		var html = "";
		$.each(res,function(index,value){
			//console.log(value)
			html += '<div class="Ranking-L-cantent-icon"></div>'+
						'<div class="">'+
							'<a href="">'+
								'<img src="'+value.img+'"/>'+
							'</a>'+
							'<div class="Ranking-L-cantent-info">'+
								'<div class="Ranking-L-cantent-name">'
									+value.name+
								'</div>'+
								'<div class="Ranking-L-cantent-price">'+
									'<div class="Ranking-L-cantent-price-cur">'+
										'<span>'+value.num+'</span>'+
									'</div>'+
									'<div class="Ranking-L-cantent-price-old">'+
										'<span>'+value.old+'</span>'+
									'</div>'+
									'<div class="Ranking-L-cantent-price-sold">'+
										'已售'+
										'<span>'+value.soldnum+'</span>'+
									'</div>'+											
								'</div>'+
							'</div>'
		});
		$(".Ranking-L-cantent2").html(html)
	})
	//----------排行榜右-------
	$.ajax("http://xiaopaopao.duapp.com/shasha/libs/Ranking3.json")
	.then(function(res){
		var html = "";
		$.each(res,function(index,value){
			html += '<div class="Ranking-L-cantent-icon"></div>'+
						'<div class="">'+
							'<a href="">'+
								'<img src="'+value.img+'"/>'+
							'</a>'+
							'<div class="Ranking-L-cantent-info">'+
								'<div class="Ranking-L-cantent-name">'
									+value.name+
								'</div>'+
								'<div class="Ranking-L-cantent-price">'+
									'<div class="Ranking-L-cantent-price-cur">'+
										'<span>'+value.num+'</span>'+
									'</div>'+
									'<div class="Ranking-L-cantent-price-old">'+
										'<span>'+value.old+'</span>'+
									'</div>'+
									'<div class="Ranking-L-cantent-price-sold">'+
										'已售'+
										'<span>'+value.soldnum+'</span>'+
									'</div>'+											
								'</div>'+
							'</div>'		
		});
		$(".Ranking-L-cantent3").html(html)
	})
		
		
})
	
	
	
	
	
	

