$(function(){//列表页
	//console.log(1)
	//商品列表
	$.ajax("http://xiaopaopao.duapp.com/shasha/libs/list.json")
	.then(function(res){
		//console.log(res)
		var html = "";
		var html1 = ""
		$.each(res,function(index,value){
			html += '<li>'+
						'<div class="formall">'+
							'<div class="formallcont">'+
								'<div class="arrivals-pic" >'+
									'<b>'+
										'<img src="images/80b.png" alt="" />'+
									'</b>'+
									'<dl>'+
										'<dd>'+
											'<i class="icountry">'+
												'<img src="images/jb1.png" alt="" />'+
											'</i>'+
											'韩国品牌'+
										'</dd>'+
									'</dl>'+
									'<a href="javascript:;">'+
										'<img src="'+res[index].img+'"/>'+
									'</a>'+
								'</div>'+
								'<div class="sale-price">'+
									'<span class="fr">'+res[index].count+'折</span>'+
									'<span class="pirce">'+res[index].num+'</span>'+
									'<span class="die">'+res[index].old+'</span>'+
								'</div>'+
								'<div class="arrivals-info">'+
									'<div class="infoconts">'+
										'<div class="des02">'+
											'<b>[保税仓直送]</b>'+
											'<a href="javascript:;">'+res[index].title+'</a>'+
										'</div>'+
										'<p class="des03">'+
											'<a href="javascript:;">'+res[index].intro
												+
											'</a>'+
										'</p>'+
										'<p class="des04">'+res[index].Number+'</p>'	+								
									'</div>'+
									'<p class="salenum">已售'+res[index].soldnum+'件</p>'+
								'</div>'+
								'<div class="btn-buy">'+
									'<a class="btn-major" href="javascript:;">'+
										'<span id='+res[index].id+'>立即抢购</span>'+
									'</a>'+
								'</div>'+
							'</div>'+
							'<div class="formalpic">'+
								'<dl class="formalpic_list">'+
									'<dd class="">'+
										'<img src="'+res[index].img2+'" alt="" />'+
									'</dd>'+
									'<dd class="">'+
										'<img src="'+res[index].img3+'" alt="" />'+
									'</dd>'+
									'<dd class="">'+
										'<img src="'+res[index].img4+'" alt="" />'+
									'</dd>'+
								'</dl>'+
							'</div>'+
						'</div>'+
					'</li>'
		});
			html1 = '<li class="last">'+
						'<b class="ipak"></b>'+
						'<a class="flip" href="details.html">'+
							'<i class="itips"></i>'+
							'<p class="nextpage">下一页</p>'+
							'<p class="pageinfo">显示下一页结果</p>'+
						'</a>'+
					'</li>'
		
		$(".arrivalslist").html(html);
		$(".arrivalslist").append(html1);
		
		$(".arrivalslist").on("click",".btn-major span",function(){ 
				console.log(1)
				var goodsId = this.getAttribute("id");

				$.cookie("goodsId",goodsId);
				location.href = "details.html"
				
		})
		
		
		
		
	})
	//其他特效
	//console.log($(".arrivalslist"))
	var index = 0
	$(".arrivalslist").on("mouseenter","li",function(){
		//console.log(this)
		$(this).not(".last").css({
			zIndex:10
		})
		$(this).not(".last").children().stop().css({
			width:341,
			height:520
		})
		$(this).not(".last").find(".formalpic").stop().css({
			display:"block"
		})
		$(this).not(".last").find(".btn-buy").stop().css({
			display:"block"
		})
			
	})
	
	$(".arrivalslist").on("mouseleave","li",function(){
		//console.log(this)
		$(this).not(".last").css({
			zIndex:0
		})
		$(this).not(".last").children().stop().css({
			width:253,
			height:482
		})
		$(this).not(".last").find(".formalpic").stop().css({
			display:"none"
		})
		$(this).not(".last").find(".btn-buy").stop().css({
			display:"none"
		})
			
	})
	//nav 
	//console.log($(".ahover"))
	var aa = 0
	$(".ahover").on("click",function(){
		aa++;
		//console.log(index)
		if(aa % 2){
			$(this).find(".l_btwo").css({
				display:"block"
			})
		}else{
			$(this).find(".l_btwo").css({
				display:"none"
			})
		}
		
	})
	$(".l_btwo a").on("mouseenter",function(){
		$(this).stop().css({
			color:"#D2620B"
		})
		$(this).stop().find("span").css({
			backgroundPosition:"-88px -3px"
		})
		
	})
	$(".l_btwo a").on("mouseleave",function(){
		$(this).stop().css({
			color:"#828282"
		})
		$(this).stop().find("span").css({
			backgroundPosition:"-74px -3px"
		})
		
	})
})
