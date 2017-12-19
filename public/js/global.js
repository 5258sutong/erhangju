// JavaScript Document
$(document).ready(function(e) {
	var url = window.location.href;	
    if($(".ab_newsnav").length>0){
		var len=$(".ab_newsnav a").length;
		for(var i=0;i<len;i++){
			var str=$(".ab_newsnav a").eq(i).attr("href");
			
			if(url.indexOf(str)>=0){
				$(".ab_newsnav a").eq(i).addClass('on');
			}else if(url.indexOf("Care")>=0){
				$(".ab_newsnav a").eq(5).addClass('on');
			}else if(url.indexOf("/service/qualifications/")>=0){
				$(".ab_newsnav a").eq(1).addClass('on');
			}else if(url.indexOf("marketlin")>=0){
				$(".ab_newsnav a").eq(4).addClass('on');
			}
			
		}
	}

});

$(document).ready(function(e) {
	
    $(".search_icon").click(function(){		
	     $(".search_box").slideToggle();
	});
	$(".search_close").click(function(){
	     $(".search_box").slideUp();	
	});
	 
	$(document).bind("click",function(e){ 
		var target = $(e.target); 
		if(target.closest(".search_icon").length == 0&&target.closest(".form_search input").length == 0){ 
			$(".search_box").slideUp(); 
		} 
	});
	$("body").keydown(function() {
		if (event.keyCode == "27") {
		   $(".search_box").slideUp(); 
		}
	});
});

/*
$(document).ready(function(e) {
    var len=$(".solution_cpxx_nei .solution_cpxx_title").length;
	
	for(var i=0;i<len;i++){
	    $(".solution_cpxx_nei .solution_cpxx_title").eq(i).html(i+1);	
	}
	
});*/
//头部特效
$(document).ready(function(e) {
	
    $(window).scroll(function(){
	     if($(window).scrollTop()>1){
		     $(".top").removeClass("on");

		 }	
	     else{
			 $(".top").addClass("on");  
		 }	
	});
	
    $(window).scroll(function(){
		 if($(".newsnav").length>0){
			 if($(window).scrollTop()>320){
				 $(".newsnav").addClass("on");
				 $(".neibanner").css({"margin-bottom":"41px"});
			 }	
			 else{
				 $(".newsnav").removeClass("on");
				 $(".neibanner").css({"margin-bottom":"0px"});  
			 }	
		 }
	});
	
	$(".menu_xun").hover(function(){
		var t=$(this).find(".menu_drop");
		timer = setTimeout(function(){
			 t.slideDown();
		},600);
	},function(){
		clearTimeout(timer);
		$(".menu_drop").hide();
	});
	
});
//首页解决方案
$(document).ready(function(e) {
    var len=$(".jjfa_xun").length;
	var w=1200*len;
	var src=str=title=herf=smalltext="";
	
	$(".jjfa_box").width(w);
	for(var i=0;i<len;i++){
	   	src=$(".jjfa_xun:eq("+i+") .jjfa_xun_left tr:eq(0) td img").attr("src");
	   	title=$(".jjfa_xun:eq("+i+") .jjfa_xun_left tr:eq(0) td img").attr("title");
	   	smalltext=$(".jjfa_xun:eq("+i+") .jjfa_xun_left tr:eq(0) td img").attr("smalltext");
		href=$(".jjfa_xun:eq("+i+") .jjfa_xun_left tr:eq(0) td img").attr("href");
		
	   	$(".jjfa_xun:eq("+i+") .jjfa_xun_left tr:eq(0) td").addClass("on");	
			
		$(".jjfa_xun:eq("+i+") .jjfa_xun_img .jxi_ban_title").html(title);
		$(".jjfa_xun:eq("+i+") .jjfa_xun_img .jxi_ban_small").html(smalltext);
		$(".jjfa_xun:eq("+i+") .jjfa_xun_img .jxi_img img").attr("src",src);
		$(".jjfa_xun:eq("+i+") .jjfa_xun_img").attr("href",href);
	}
	$(".jjfa_xun_left td").click(function(){
		$(this).parents(".jjfa_xun").find(".jjfa_xun_left").find("td").removeClass("on");
	    $(this).addClass("on");
		
		src=$(this).find(".jxf_imgbox").find("img").attr("src");
		title=$(this).find(".jxf_imgbox").find("img").attr("title");
		smalltext=$(this).find(".jxf_imgbox").find("img").attr("smalltext");
		href=$(this).find(".jxf_imgbox").find("img").attr("href");

		$(this).parents(".jjfa_xun").find(".jxi_ban_title").html(title);	
		$(this).parents(".jjfa_xun").find(".jxi_ban_small").html(smalltext);	
		$(this).parents(".jjfa_xun").find(".jxi_img").find("img").attr("src",src);	
		$(this).parents(".jjfa_xun").find(".jjfa_xun_img").attr("href",href);
		$(this).parents(".jjfa_xun").find(".jjfa_xun_img").css({"opacity":"0.5"}).animate({"opacity":"1"});	
	});
	
	$(".index2_icon div").eq(0).addClass("on");
	
	$(".index2_icon div").click(function(){
	    $(this).addClass("on").siblings().removeClass("on");	
		var left=$(this).index()*1200;
		$(".jjfa_box").animate({"margin-left":-left});
	});
});

$(document).ready(function(e) {
    $(".ser_link_xun").hover(function(){
		$(this).find(".ser_link_box").slideDown();
	},function(){
		$(".ser_link_box").slideUp();
	});
});

$(document).ready(function(e) {
    if($(".pro_xun").length>=3){
		$(".pro_box .pro_box_nei").css({"width":1242,"margin-left":"-21px"});
	}
});









