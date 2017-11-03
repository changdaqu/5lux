require.config({
	paths:{
		 'jquery':'../libs/jquery',
		 'head':'head'
	}
});
require(['jquery','head'],function($,head){
	$(function(){
		// 头部效果模块
		head.head();
		// 从localStorage中获取数据;
		var $dataArr = localStorage.lists ? JSON.parse(localStorage.lists) : [];
		var $sum = 0;
		var jijian = 0;
		$.each($dataArr, function(index, val) {
			// 拼接购物车
			var $nums =$dataArr[index].price1.split('￥')[1];
			var $num = parseInt($nums) * $dataArr[index].count;
			var $strNum = JSON.stringify($num);
			// 全部价格;
			$sum += $dataArr[index].count * parseInt($dataArr[index].price1.split('￥')[1]);
			$('.cart_w table tbody').append('<tr class="cars"><td class="messages messages1"><input type="checkbox" checked="checked" class="inp"></td><td class="messages"><a href="http://www.5lux.com/good/detail/2766282"><img src="'+$dataArr[index].src2+'" alt=""></a></td><td class="messages" style="width: 200px;"><a href="http://www.5lux.com/good/detail/2766282">'+$dataArr[index].name+'</a></td><td class="messages">黑色,35</td><td class="messages">'+$dataArr[index].price1+'.00</td><td class="messages"><p><a href="###" class="btns_r"></a><input type="text" value="'+$dataArr[index].count+'" class="val"><a href="###" class="btns_l"></a></p></td><td class="messages"></td><td class="messages price">￥'+$strNum+'</td><td class="messages operate"><a href="###" class="delete">删除</a><a href="###">移入收藏夹</a><a href="###" class="box"><b></b>定制包装</a></td></tr>');
			$('.textm strong').html('￥'+$sum+'');
			// 已选择商品;
			jijian += parseInt($dataArr[index].count)
			$('.number').html(''+jijian+'');
		});

		// 点击增加;
		var $shuzi = 0;
		$.each($('.btns_r'), function(i1, v1) {
			$(this).click(function(){
				$dataArr[i1].count++;
				var number = JSON.stringify($dataArr);
				localStorage.lists = number;
				var nus = $dataArr[i1].price1.split('￥')[1];
				var nums = parseInt(nus) * $dataArr[i1].count;
				// 改变总金额1:
				$shuzi = parseInt($('.textm strong').text().split('￥')[1])+parseInt($dataArr[i1].price1.split('￥')[1]);
				// 改变数字
				$(this).next().attr('value',$dataArr[i1].count);
				// 改变金额
				$(this).parent().parent().siblings('.price').html('￥'+nums+'');
				// 改变总金额2:
				$('.textm strong').html('￥'+$shuzi+'');
				return;
			})
		});
		// 点击减少;
		$.each($('.btns_l'), function(i2, v2) {
			$(this).click(function() {
				
				// 判断数量不可以小于0;
				if($(this).prev().val() <= 0){
					$(this).prev().attr('value','0');
				}else if($('.val').val() > 0){
					$dataArr[i2].count--;
					var number = JSON.stringify($dataArr);
					localStorage.lists = number;
					var nus = $dataArr[i2].price1.split('￥')[1];
					var nums = parseInt(nus) * $dataArr[i2].count;
					// 改变总金额1:
					$shuzi = parseInt($('.textm strong').text().split('￥')[1])-parseInt($dataArr[i2].price1.split('￥')[1]);
					// 改变数字
					$(this).prev().attr('value',$dataArr[i2].count);
					// 改变金额
					$(this).parent().parent().siblings('.price').html('￥'+nums+'');
					// 改变总金额2:
					$('.textm strong').html('￥'+$shuzi+'');
					return;
				}
				
			});
		});

		// 点击单个删除;
		$.each($('.delete'), function(index, val) {
			var arrs = 0
			$(this).click(function(){
				// 给总价创建数组;
				var arr = [];
				var brr = $('.price').text().split('￥')[index + 1];
				arr.push(brr);
				// 拿当前总价减去点击的单价;
				arrs = parseInt($('.textm strong').text().split('￥')[1]) - parseInt(arr);
				console.log(arrs);
				$('.textm strong').html('￥'+arrs+'');
				$dataArr.splice(this.index,1);
				var $str = JSON.stringify($dataArr);
				localStorage.lists = $str;
				$(this).parent().parent().remove();

			})
		});

		// 全选选择框;
		$('.select input').click(function(){
			if($(this).is(':checked') == true){
				$('.messages1 .inp').prop('checked',true);
				$('.account_l input').prop('checked',true);
			}else if($(this).is(':checked') == false){
				$('.messages1 .inp').prop('checked',false);
				$('.account_l input').prop('checked',false);
			}
		});
		$('.account_l input').click(function(){
			if($(this).is(':checked') == true){
				$('.messages1 .inp').prop('checked',true);
				$('.select input').prop('checked',true);
			}else if($(this).is(':checked') == false){
				$('.messages1 .inp').prop('checked',false);
				$('.select input').prop('checked',false);
			}
		});
		// 单个选择框
		$.each($('.inp'), function(index, val) {
			if(index <= 0){
				if($('.inp').is(':checked') == true){
					$('.account_l input').prop('checked',true);
				}else if($('.inp').is(':checked') == false){
					$('.account_l input').prop('checked',false);
				}
				
			}
		});

		// 删除全部数据
		$('.clear').click(function() {
			$('.cars').remove();
			$('.textm strong').html('0');
			localStorage.clear();
		});


	})
});



