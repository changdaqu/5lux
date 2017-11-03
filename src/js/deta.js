require.config({
	paths:{
		 'jquery':'../libs/jquery',
		 'head':'head'
	}
});
require(['jquery','head'],function($,head){
	$(function(){
		// 搜索栏;
		head.head();
		// 放大镜
		$('.imgs_c_w ul li').click(function(){
			$('.imag').children().attr('src',$(this).children().children().attr('src'));
			$('.main_c').children().attr('src',$(this).children().children().attr('src'));
		});
		var l = 0;
		$('.btn_r').click(function(){
			l += -91;
			if(l <= -1000){
				l = -1000;
			}
				$('.imgs_c_w').children().animate({left:l});
		});
		$('.btn_l').click(function(){
			l -= -91;
			if(l >= 0){
				l = 0;
			}
			$('.imgs_c_w').children().animate({left:l});
		});
		$('.imag').hover(function(){
			$('.main_c').show();
		},function(){
			$('.main_c').hide();
		});
		$('.imag').mousemove(function(e) {
			$('.chonk').show();
			var $w = $('.imag').offset();
			var $x = e.pageX - $w.left - $('.chonk').width()/2;
			var $y = e.pageY - $w.top - $('.chonk').height()/2;
			if($x<=0){
				$x=0;
			}else if($x >= $('.imag').width()-$('.chonk').width()){
				$x = $('.imag').width()-$('.chonk').width();
			}
			if($y<=0){
				$y=0;
			}else if($y >= $('.imag').height()-$('.chonk').height()){
				$y = $('.imag').height()-$('.chonk').height();
			}
			var percentageX = $x/($('.imag').width()-$('.chonk').width());
			var percentageY = $y/($('.imag').height()-$('.chonk').height());
			$('.main_c img').css({
				left:-percentageX*(600 - $('.main_c').width()),
				top:-percentageY*(600 - $('.main_c').height()),
			})
			$('.chonk').css({
				'left':$x + 'px',
				'top':$y + 'px'
			})
		});
		$('.imag').mouseleave(function() {
			$('.chonk').hide();
		});

		// 点击号码
		$('.item').click(function(){
			$(this).css('borderColor','#dc0000').siblings().css('borderColor','#c9c9c9');
		});
		// 点击数量
		var one = 1;
		$('.btns_r').click(function(){
			one++;
			if(one <= 10){
				$('.num_w').children('input').val(one);
			}else{
				alert('对不起该商品的库存已经紧张');
			}
		});
		$('.btns_l').click(function() {
			one--;
			if(one <= 0){
				one = 1;
			}
			$('.num_w').children('input').val(one);
		});

		// 页面传值
		var $param = window.location.search;
		$strJson = decodeURI($param.split('?')[1].split('=')[1]);
		var $objJson = JSON.parse($strJson);
		// 名字
		$('.title1').html('<dl><dd><a href="http://www.5lux.com/brand/detail/42" class="fontSize18 color999">'+$objJson.title1+'</a></dd><dd><a href="###" class="fontSize18 color000">'+$objJson.name+'</a></dd><dd class="color999" style="font-size: 12px;">货号:'+$objJson.title2+'</dd></dl>')
		// 价格
		$('.price').html(''+$objJson.price1+'');
		$('.passPrice').html(''+$objJson.price2+'');
		// 图片
		$('.imag').children('img').attr('src',$objJson.src2);
		$('.imgs_c_w ul li div img').attr('src',$objJson.src2);
		$('.main_c img').attr('src',$objJson.src2);



		// 返回顶部
		$('.getTop').click(function(){
			$('html,body').stop().animate({scrollTop:'0px'},300);
		});
		$('.offside_t ul li').hover(function(){
			$(this).children().next().toggle();

		});
		$('.offside_b ul li').hover(function(){
			$(this).children().next().toggle();
		});

		// 点击加入购物车
		var bol = true;
		$('.joinCart_r').click(function(){
			var $listArr = localStorage.lists ? JSON.parse(localStorage.lists) : [];
			alert('已成功加入购物车');
			window.location.href = 'cartShop.html';
			$.each($listArr, function(index, val) {
				if($objJson.id == $listArr[index].id){
					$listArr[index].count++;
					var $strs = JSON.stringify($listArr);
					localStorage.lists = $strs;
					bol = false;
					return;
				}
			});
			if(bol == false){
				return;
			}
			bol = true;
			$listArr.push($objJson);
			var $str = JSON.stringify($listArr);
			localStorage.lists = $str;
			// window.location.href = 'cartShop.html';
		});
	});
});



