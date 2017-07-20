$(function(){//活动页
	//console.log(1)
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
	
	//限时特卖2
	$.ajax("http://xiaopaopao.duapp.com/shasha/libs/activePag.json")
	.then(function(res){
		//console.log(res)
		var html = "";
		$.each(res,function(index,value){
			html += '<a class="sasa-link" href="">'+
						'<div class="sasa-seck">'+
							'<div class="sasa-seck-T">'+
								'<img src="'+res[index].img+'"/>'+
								'<div class="sasa-coutdown">'+
									'剩余'+
									'<span class="hour">16</span>:'+
									'<span class="minute">57</span>:'+
									'<span class="second">11</span>'+
								'</div>'+
							'</div>'+
							'<div class="sasa-seck-intro">'
								+res[index].intro+
							'</div>'+
							'<div class="sasa-seck-info">'+
								'<div class="info-sig">￥</div>'+
								'<p>'+
									'<span class="sasa_price_cur">'+res[index].num+'</span>'+
									'<span class="sasa_price_old">'+res[index].old+'</span>'+
									'<span class="sasa_price_sold">'+
										'已售'+
										'<span>'+res[index].Sold+'</span>'+
										'件'+
									'</span>'+
								'</p>'+
							'</div>'+
							'<div class="sasa-seck-bottom">'+
								'<p class="sasa-review">'+
									'<span class="sasa_price_num">'+res[index].soldnum+'</span>'+
									'条评论'+
								'</p>'+
								'<span class="sasa_btn">马上抢</span>'+
							'</div>'+
						'</div>'+
					'</a>'
		});
		$(".Sale-cantent").html(html);
		document.onscroll = function(){
			var scrollTop = document.documentElement.scrollTop||document.body.scrollTop
			var timer = null;			
			//console.log(scrollTop)
			timer = setTimeout(function(){
				if(scrollTop >= 4902 &&scrollTop < 76070){
					$(".Sale-cantent").append(html);
				}
			},1000)
		}	
	})
	//特效
	$(".Sale-cantent").on("mouseenter","img",function(){
		//console.log(1)
		$(this).stop().css({
			opacity:"1",
			boxShadow:"6px 5px 17px rgba(0, 0, 0, 0.3)"
		})
	})
	$(".Sale-cantent").on("mouseleave","img",function(){
		$(this).stop().css({
			opacity:"0.8",
			boxShadow:"none"
		})
	})
	$(".Sale-cantent").on("mouseenter",".sasa-seck-intro",function(){
		//console.log(1)
		$(this).stop().css({
			color:"#e93b78"
		})
	})
	$(".Sale-cantent").on("mouseleave",".sasa-seck-intro",function(){
		$(this).stop().css({
			color:"#222"
		})
	})
	
	
});
