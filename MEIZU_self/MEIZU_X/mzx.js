$(function(){
	$("#section .l_img a img").mouseover(function(){
		var src=this.src;
		var mSrc=src.slice(0,src.length-5)+"m.jpg";
		$("#section .m_img a img").attr("src",mSrc);
	});
	$(".black").click(function(){
		$(this).addClass("current");
		$(".gold").removeClass("current");
		$("#section .m_img a img").attr("src","images/1_m.jpg");
	});
	$(".gold").click(function(){
		$(this).addClass("current");
		$(".black").removeClass("current");
		$("#section .m_img a img").attr("src","images/2_m.jpg");
	});
	//放大镜功能
	$("#superMask").mouseover(function(){
		$("#mask").show();
		var src=$("#mImg").attr("src");
		src=src.slice(0,src.indexOf(".")-1)+"l.jpg";
		console.log(src);
		$("#largeDiv").css("background-image","url('"+src+"')");
		$("#largeDiv").show();
	});
	$("#superMask").mouseout(function(){
		$("#mask").hide();
		$("#largeDiv").hide();
	});
	$("#superMask").mousemove(function(e){
		var e=window.event||arguements[0];
		var x = e.offsetX-180/2;
		var y = e.offsetY-180/2;
		(x<=0)&&(x=0);
		(x>=250)&&(x=250);
		(y<=0)&&(y=0);
		(y>=250)&&(y=250);
		$("#mask").css("left",x);
		$("#mask").css("top",y);
		var x = x*3/2*(-1);
    var y = y*3/2*(-1);
    $("#largeDiv").css("background-position-x",x);
    $("#largeDiv").css("background-position-y",y);
	});
	//商品详情，评价切换
	$("#btn>li").click(function(){
		$(this).addClass("cur").siblings().removeClass("cur");
	});
	$("#data1").click(function(){
		$("#pro_details").show();
		$("#bg_picture").show();
		$("#promise").hide();
		$("#state").hide();
		$("#comment").hide();
		$("#comment_list").hide();
	});
	$("#data2").click(function(){
		$("#pro_details").hide();
		$("#bg_picture").hide();
		$("#promise").show();
		$("#state").show();
		$("#comment").show();
		$("#comment_list").show();
	});
	$("#data3").click(function(){
		$("#pro_details").show();
		$("#bg_picture").show();
		$("#promise").hide();
		$("#state").hide();
		$("#comment").hide();
		$("#comment_list").hide();
	});
	$("#data4").click(function(){
		$("#pro_details").hide();
		$("#bg_picture").hide();
		$("#promise").show();
		$("#state").show();
		$("#comment").show();
		$("#comment_list").show();
	});
});
	