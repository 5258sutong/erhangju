// JavaScript Document
$(document).ready(function(e) {
	//淡入淡出banner
    var len=$(".banner_xun").length;
	var str="<span class='on'></span>";
	var str1="<span></span>";
	var time=6000;
	for(var i=1; i<len; i++){
		str=str+str1;
	}
	$(".banner_point_box").html(str);
	
	var ind=0;
	qiehuan(ind);
	
	$(".banner_point_box span").click(function(){
		ind=$(this).index();
		qiehuan(ind);	
	});
	
	var zidong=window.setInterval(function(){
		ind=ind+1;
		if(ind==len){
			ind=0;
		} 
		qiehuan(ind)
	},time);
	
	$(".ba_right").click(function(){
		ind=ind+1;
		if(ind>=len){
			ind=0;
		} 
		qiehuan(ind)
    });
	
	$(".ba_left").click(function(){
		ind=ind-1;
		if(ind<0){
			ind=len-1;
		} 
		qiehuan(ind);
    });
	
	$(".banner").hover(function(){
		 window.clearInterval(zidong);
	},function(){
		zidong=window.setInterval(function(){
			ind=ind+1;
			if(ind==len){
				ind=0;
			} 
			qiehuan(ind)
		},time);
	})
	
	function qiehuan(ind){
		$(".banner_point_box span").eq(ind).addClass("on").siblings().removeClass("on");
		$(".banner_xun").eq(ind).addClass("on").siblings().removeClass("on");
		
	}
	
});