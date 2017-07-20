$(function(){//详情页
	//console.log(1)
	//小图
	$(".ul_1 li").on("mouseenter",function(){
		//console.log($(this).find(".active"))
		$(this).find(".thumbnail").css({
			borderWidth:"4px",
			borderStyle:"solid",
			borderColor:"#d2620b"
		})
	})
	$(".ul_1 li").on("mouseleave",function(){
		//console.log($(this).find(".active"))
		$(this).find(".thumbnail").css({
			borderWidth:"1px",
			borderStyle:"solid",
			borderColor:"#ddd"
		})
	})
	//选项卡
	function Tab(){
		this.zindex = 0;
		this.index = 0;
		this.init();
	}
	Tab.prototype.init = function(){
		var that = this;
		$.each($(".ul_1 li"),function(index){
			$(this).on("mouseenter",function(){
				//console.log(index)
				that.index = index;
				that.change()
			})
		})	
	}
	Tab.prototype.change = function(){
		//console.log(this.index)
		//console.log($(".div_smal").children().eq(this.index))
		$(".div_smal").children().stop().eq(this.index).css({
			zIndex :1
		}).siblings().stop().css({
			zIndex:0
		})
		$(".div_a").children().stop().eq(this.index).css({
			zIndex :1
		}).siblings().stop().css({
			zIndex:0
		})
	}
	new Tab()
	//放大镜引用插件 放大镜
	$(".page-content").Magnifier()

	//详情的跳转
	$(".product-tags").find(".tags-hd").on("click",function(){
		var target = $(".pr-box").children().eq($(this).index()).offset().top;
		//console.log(target)
		$("html,body").stop().animate({
			scrollTop:target
		})
	})
	
	
	
	
})

$(function(){
	//拼接
	console.log($.cookie("goodsId"))
	$.ajax("http://xiaopaopao.duapp.com/shasha/libs/list.json")
	.then(function(res){
		
		var str = res[$.cookie("goodsId")]	
		
		
		console.log(str.img)
		var html = "";
		html += `<div class="details-page-top">
					<div class="page-content clearfix">
						<div class="page-Reciprocal">
							<i class="i1"></i>
							<div class="Reciprocal-time">
								<i class="i2 iconfont icon-shizhong"></i>
								<span class="span-1">特卖进行中，完结时间倒数</span>
								<div class="Reciprocal-end-time">
									<span>0</span>天
									<span>18</span>时
									<span>29</span>分
									<span>22</span>秒
								</div>
							</div>
							<span class="span2">
								<b>23</b>
								人已购买，下手要快哦！
							</span>
						</div>
						<!--左边-->
						<div class="page-content-L">
							<i>
								<b>4</b>
							</i>
							<!--商品相册-->
							<div class="content-album">
								<strong></strong>
								
								<div class="content-album-big">
										<a class="a1" href=""></a>
										<div class="div_smal clearfix">
											
												<img src="${str.img}"/>
												<img src="images/smal2.jpg"/>
												<img src="images/smal3.jpg"/>
												<img src="images/smal4.jpg"/>
												<img src="images/smal5.jpg"/>
											
										</div>
										<div class="zhezhaoceng"></div>
								</div>
								</a>
								<div class="content-album-xq">
									<a href="">
										<img src="images/jb1.png"/>
										<b>韩国品牌</b>
									</a>
									<a href="">
										<img src="images/j_b1.png"/>
										<b>热卖中</b>
									</a>
									<a href="">
										<img src="images/j_b2.png"/>
										<b>好评中</b>
									</a>
								</div>
								<div class="content-album-smal">
									<div class="album-smal-L">
										<a class="icon iconfont icon-back" href=""></a>
									</div>
									<div class="album-smal-C">
										<ul class="ul_1 clearfix">
							                <li class="active">
							            		<div class="thumbnail">
							            			<a href="">
							            				<img src="images/00001-1.jpg">	
							            			</a>
							            		</div>
							          		</li>
							          		<li class="active">
							            		<div class="thumbnail">
							            			<a href="">
							            				<img src="images/00001-2.jpg">	
							            			</a>
							            		</div>
							          		</li>
							          		<li class="active">
							            		<div class="thumbnail">
							            			<a href="">
							            				<img src="images/00001-3.jpg">	
							            			</a>
							            		</div>
							          		</li>
							          		<li class="active">
							            		<div class="thumbnail">
							            			<a href="">
							            				<img src="images/00001-4.jpg">	
							            			</a>
							            		</div>
							          		</li>
							          		<li class="active">
							            		<div class="thumbnail">
							            			<a href="">
							            				<img src="images/00001-5.jpg">	
							            			</a>
							            		</div>
							          		</li>
							            </ul>	
									</div>
									<div class="album-smal-R">
										<a class="icon1 iconfont icon-more" href=""></a>
									</div>
								</div>
							</div>
						</div>
						<!--右边-->
						<div class="page-content-R">
							<div class="bonded-banner">
								<span>
									<img src="images/tax-free_banner.jpg"/>
								</span>
							</div>
							<div class="bonded-title">
								<i class="iicon iconfont icon-iconfonticon"></i>						
		            			SNP 金丝燕窝深层保湿面膜含有高浓缩燕窝原液，集中供给皮肤水分锁水能力突出，在皮肤水分子表面形成保护膜防止水分快速流失。        
							</div>
							<div class="bonded-line">
								<p class="bonded-title2">
									<b>[保税仓直送]</b>
									<a href="">SNP </a>							
					  				精华面膜系列            
								</p>
								<p class="bonded-title3">
									金丝燕窝深层保湿面膜(10片)
								</p>
							</div>
							<!--商品基本信息-->
							<div class="bonded-information">
								<!--购买区-->
								<div class="bonded-buy">
									<ul>
										<!--库存-->
										<li class="bonded-buy-quantity clearfix">
											<lable>数量:</lable>
											<span class="item-content">
												<span class="p-quantity">
													<a class="btn-l" href="">-</a>
													<input class="ipt" type="text"  value="1"/>
													<a class="btn-r" href="">+</a>
												</span>
											</span>
										</li>
										<!--价格显示区-->
										<div class="bonded-concerns">
											<span class="span-1">特卖价</span>
											<span class="span-2">￥68.0</span>
											<span class="span-1 span-3">市场价 ￥170.0</span>
										</div>
										<!--购买按钮-->
										<div class="bonded-buy-action">
											<a class="action-btn1" href="">立即抢购</a><a class="action-btn2" href="">扫描即可加入购物车</a>
											
										</div>
									</ul>
								</div>
								<!--商品评分-->
								<div class="bonded-score">
									
								</div>
								<!--商品收藏-->
								<div class="bonded-share">
									<a class="shoucang" href="">
										<i class="iconfont icon-like"></i>
										收藏
									</a>
									<ul class="share-mini">
										<span>分享到</span>
										<a class="a_1" href=""></a>
										<a class="a_2" href=""></a>
										<a class="a_3" href=""></a>
										<a class="a_4" href=""></a>
										<a class="a_5" href=""></a>
										<a class="a_6" href=""></a>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div class="product_container">
						<div class="div_a">
							<img src="images/big1.jpg"/>
							<img src="images/big2.jpg"/>
							<img src="images/big3.jpg"/>
							<img src="images/big4.jpg"/>
							<img src="images/big5.jpg"/>
						</div>						
					</div>
				</div>`
		//$("#details-page").append(html)json拼接的话 后面的特效都失效了。时间不够在修改了。
	})
	
})


