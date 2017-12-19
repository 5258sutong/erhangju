// JavaScript Document
//$(document).ready(function(e) {
//	
//	var winh=530;
//	
//	var h=window.setInterval(function(){
//		if(window.innerWidth<=1100){
//			winh=(window.innerWidth/1100)*530;
//		}
//		else{ winh=530;}
//        $(".img_gallery").height(winh);
//	},1);
//});

$(document).ready(function(){

/*	$(".img_gallery").hover(function(){
		$("#btn_prev,#btn_next").fadeIn()
	},function(){
		$("#btn_prev,#btn_next").fadeOut()
	});*/
	
    var len=$(".main_img li").length;
	var str="";
	for(var i=0; i<len; i++){
	   	str=str+'<a href="#">'+i+'</a>';
	}
	$(".point_box").html(str);
	
	$(".xuan .xuan_box").width(len*20+26);
	
	$dragBln = false;
	
	$(".main_img").touchSlider({
		flexible : true,
		speed :1000,
		btn_prev : $("#btn_prev"),
		btn_next : $("#btn_next"),
		paging : $(".point a"),
		counter : function (e){
			$(".point a").removeClass("on").eq(e.current-1).addClass("on");//图片顺序点切换
			$(".img_font span").hide().eq(e.current-1).show();//图片文字切换
		}
	});
	
	$(".btn_prev").click(function(){$("#btn_prev").click();});
	$(".btn_next").click(function(){$("#btn_next").click();});
	
	$(".main_img").bind("mousedown", function() {
		$dragBln = false;
	});
	
	$(".main_img").bind("dragstart", function() {
		$dragBln = true;
	});
	
	$(".main_img a").click(function(){
		if($dragBln) {
			return false;
		}
	});
	
	timer = setInterval(function(){
		$("#btn_next").click();
	}, 5000);
	
	$(".img_gallery").hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(function(){
			$("#btn_next").click();
		},5000);
	});
	
	$(".main_img").bind("touchstart",function(){
		clearInterval(timer);
	}).bind("touchend", function(){
		timer = setInterval(function(){
			$("#btn_next").click();
		}, 5000);
	});
	
});