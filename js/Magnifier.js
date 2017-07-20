jQuery.fn.Magnifier = function(options){//放大镜
	options =jQuery.extend({},options ||{});
	var index = 0;
	//鼠标移入
	$(".content-album-big").on("mouseenter",function(){
 		$(".zhezhaoceng").css({
	  		display:"block"
	  	})
	  	$(".product_container").css({
	  		display:"block"
	  	})
 	})
	//鼠标移出
	$(".content-album-big").on("mouseleave",function(){
 		$(".zhezhaoceng").css({
	  		display:"none"
	  	})
	  	$(".product_container").css({
	  		display:"none"
	  	})
 	})
	//鼠标移动
	$(".content-album-big").on("mousemove",function(event){
		var evt = event || window.event;
		var left = evt.offsetX - $(".zhezhaoceng").width()/2;
		//console.log($(".zhezhaoceng").width()/2)
		
		if(left<0){
			left =0;
		}else if(left > $(".content-album-big .a1").offsetWidth - $(".zhezhaoceng".offsetWidth)){
			left = $(".content-album-big .a1").offsetWidth - $(".zhezhaoceng".offsetWidth)
		}
		$(".zhezhaoceng")[0].style.left=left+"px";
		var top = evt.offsetY - $(".zhezhaoceng").height()/2
		if(top < 0 ){
			top = 0 
		}else if(top > $(".content-album-big .a1").offsetHeight - $(".zhezhaoceng".offsetHeight)){
			top = $(".content-album-big .a1").offsetHeight - $(".zhezhaoceng".offsetHeight)
		}
		$(".zhezhaoceng")[0].style.top=top+"px";
		var proportionX=left/($(".content-album-big .a1").width()-$(".zhezhaoceng").width());
		var proportionY=top/($(".content-album-big .a1").height()-$(".zhezhaoceng").height());
		//console.log(proportionX+':'+proportionY)
		$(".div_a")[0].style.left=-proportionX*($(".div_a").width()-$(".product_container").width())+"px";
		$(".div_a")[0].style.top=-proportionY*($(".div_a").height()-$(".product_container").height())+"px";		
 	})
	
	
	
	
	
	
}
