$(document).ready(function  () {
	//点击添加按钮时弹框
	$('.tianjia').click(function(){
		$(this).closest('.right-btn').addClass("open");
	});
	//点击页面其他位置时关闭弹框
	 $(document).bind("click",function(e){
		 if($(e.target).closest(".right-btn.open").length == 0){
			 $(".right-btn").removeClass("open");
		 }
	});

	 $('.danxuan label').each(function(){
		var e=$(this);
		e.click(function(){
			$('.danxuan label').removeClass("active");
			e.addClass("active");
		});
	});
})