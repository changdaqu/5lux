define(function(){
	var head = function(){
		// 搜索栏;
		var $input = $('.seek_w input');
		$input.bind('input propertychange', function() { 
			if($input.val().length != ''){
				$('.seek_n li .min').html($(this).val());
				$('.seek_n').show();
			}else{
				$('.seek_n li .min').html('');
				$('.seek_n').hide();
			}
		});
		$(document).click(function() {
			$('.seek_n').hide();
		});

		// 首页购物车划入划出
		$('.shopp_w p').mouseenter(function(){
			$('.shopp_n').slideDown(100);
		});
		$('.shopp').mouseleave(function(){
			$('.shopp_n').slideUp(100);
		});

		// 首页图标动画
		$('.icons li').mouseenter(function(){
			$(this).stop().animate({width:'145px'},240).siblings().stop().animate({width:'30px'},240);
		});
		$('.icons li').mouseleave(function(){
			$(this).stop().animate({width:'30px'},240).css('marginRight','12px');
		});	
		
		// 首页导航栏
		var timer = null;
 		$.getJSON('static/home.json', function(json) {
			$.each($('.group'), function(i1, v1) {
				$('.group').eq(i1).next().remove();
				$('.group').eq(i1).parent('li').append('<div class="pag"><div class="shop"><h2><a href="###">国际高端</a></h2><div class="shop_w"></div></div><div class="shop"><h2><a href="###">热销品牌</a></h2><div class="shop_w"></div></div><div class="shop"><h2><a href="###">最新品牌</a></h2><div class="shop_w"></div></div><div class="shopBtn"><a href="###">进入所有品牌</a></div></div>');

				var $shopW = $('.group').eq(i1).parent('li').find('.pag .shop_w');
				$.each($shopW, function(i2, v2) {
					$.each(json['barData'+(i1+1)][i2].data, function(i3, v3){

						$shopW.eq(i2).append('<a href="'+json['barData'+(i1+1)][i2].data[i3].src+'">'+json['barData'+(i1+1)][i2].data[i3].name+'</a>');
					});
				});
			});
			$('.pag').mouseenter(function(){
			 	clearTimeout(timer);
			 	$(this).show();
			 });
			$('.pag').mouseleave(function(){
				$('.pag').hide();
			});
		});
		$('.group').hover(function(){
	 		clearTimeout(timer);
	 		$(this).next().show();
		},function(){
			$(this).next().hide();
			timer = setTimeout(function(){
				$('.pag').hide();
			},200);
		});
	}
	return{
		head:head
	}
		
})