$(function(){
	$("#select").mouseover(function(){
		$("#select_box").show();
	});
	$("#select").mouseout(function(){
		$("#select_box").hide();
	});
	var index = 0;
	var data = ["banner01.jpg","banner03.jpg","banner04.jpg","banner09.jpg"];
	banner.init();
	page.init();
});
var banner={
	index:0,
	items:["banner01.jpg","banner03.jpg","banner04.jpg","banner09.jpg"],
	timer:null,
	WAIT:2000,
	nextImage:function(){
		$("#banner img").attr("src","images/"+this.items[this.index]);
		$("#banner li").eq(this.index).addClass("current").siblings().removeClass("current");
		this.index++;
		if(this.index == 4){
			this.index = 0;
		}
	},
	init:function(){
		this.timer = setInterval(this.nextImage.bind(banner),this.WAIT);
		var self = this;
		$("#banner").mouseover(function(){
			clearInterval(self.timer);
			self.timer = null;
			$("#prev").show();
			$("#next").show();
		});
		$("#banner").mouseout(function(){
			self.timer=setInterval(self.nextImage.bind(banner),self.WAIT);
			$("#prev").hide();
			$("#next").hide();
		});
		$("#banner li").click(function(){
			var n = $(this).index();
			self.index = n;
			self.nextImage();
		});
	}
}
var page={
		//1:创建属性保存当前页数
		pageNo:1,
		//2:创建一个属性保存总页数
		totalPage:4,
		//3:创建一个属性保存每次修改图片数
		pageSize:1,
		//4:创建一个属性保存所有图片名称
		items:["banner01.jpg","banner03.jpg","banner04.jpg","banner09.jpg"],
		//5:创建一个方法 init
		init:function(){
				var self = this;
				$("#next").click(function(){
						self.pageNo++;
						if(self.pageNo>self.totalPage){
								self.pageNo = 1;
							}
							//新增页数数组起始下标
						var offset=(self.pageNo-1)*self.pageSize;
						$("#banner img").attr("src","images/"+self.items[offset]);
						$("#banner li").eq(self.pageNo-1).addClass("current").siblings().removeClass("current");
					});
				$("#prev").click(function(){
						self.pageNo--;
						if(self.pageNo<1){
								self.pageNo = self.totalPage;
							}
							//新增页数数组起始下标
							var offset=(self.pageNo-1)*self.pageSize;
						$("#banner img").attr("src","images/"+self.items[offset]);
						$("#banner li").eq(self.pageNo-1).addClass("current").siblings().removeClass("current");
					});
			}
	}