define(function(){
	// 封装商场同款第一页数据
	var mallText1 = function(json){
		$('.same_fist').html('<div class="same_t1 same_c" style="margin-right:8px;"><div class="same_t_txt"></div><div class="same_t_img"></div></div><div class="same_t2 same_c"><div class="same_t2_txt"></div><div class="same_t2_img"></div></div><div class="same_t1 same_c"><div class="same_t_txt"></div><div class="same_t_img"></div></div>');
		$('.same_b1').html('<div class="same_b_w same_b_w1"><div class="same_b_txt"></div><div class="same_b_img"></div></div><div class="same_b_w same_b_w1"><div class="same_b_txt"></div><div class="same_b_img"></div></div><div class="same_b_w same_b_w1"><div class="same_b_txt"></div><div class="same_b_img"></div></div>');
		$.each($('.same_fist').children(), function(index, val) {
			$('.same_c').children().eq(index * 2).append('<p class="enbrand">'+json.hot[index].name+'</p><p>'+json.hot[index].brand+'</p><p>'+json.hot[index].price+'</p>');
			$('.same_c').children().next().eq(index).append('<a href="###"><img src="'+json.hot[index].src+'" alt=""></a>');
			$('.same_b_w1').children().eq(index * 2).append('<p class="enbrand">'+json.hot[index + 3].name+'</p><p>'+json.hot[index + 3].brand+'</p><p>'+json.hot[index + 3].price+'</p>');
			$('.same_b_w1').children().next().eq(index).append('<a href="###"><img src="'+json.hot[index + 3].src+'" alt=""></a>');
		});
	}
	// 封装商场同款第二页数据
	var mallText2 = function(json){
		$('.same_two').html('<div class="same_t1 same_c1" style="margin-right:8px;"><div class="same_t_txt"></div><div class="same_t_img"></div></div><div class="same_t2 same_c1"><div class="same_t2_txt"></div><div class="same_t2_img"></div></div><div class="same_t1 same_c1"><div class="same_t_txt"></div><div class="same_t_img"></div></div>');
		$('.same_b2').html('<div class="same_b_w same_b_w2"><div class="same_b_txt"></div><div class="same_b_img"></div></div><div class="same_b_w same_b_w2"><div class="same_b_txt"></div><div class="same_b_img"></div></div><div class="same_b_w same_b_w2"><div class="same_b_txt"></div><div class="same_b_img"></div></div>');
		$.each($('.same_two').children(), function(index, val) {
			$('.same_c1').children().eq(index * 2).append('<p class="enbrand">'+json.newP[index].name+'</p><p>'+json.newP[index].brand+'</p><p>'+json.newP[index].price+'</p>');
			$('.same_c1').children().next().eq(index).append('<a href="###"><img src="'+json.newP[index].src+'" alt=""></a>');
			$('.same_b2').children().children().eq(index * 2).append('<p class="enbrand">'+json.newP[index + 3].name+'</p><p>'+json.newP[index + 3].brand+'</p><p>'+json.newP[index + 3].price+'</p>');
			$('.same_b2').children().children().next().eq(index).append('<a href="###"><img src="'+json.newP[index + 3].src+'" alt=""></a>');
		});
	}

	// 封装商场同款第三页数据
	var mallText3 = function(json){
		$('.win_w').html('<dl><dd><a href="###"><img src="'+json.same[0].src+'" alt=""></a></dd><dt class="hua"><a href="###"><ul><li>'+json.same[0].name+'</li><li>'+json.same[0].brand+'</li><li><b></b></li><li><span>'+json.same[0].content+'</span></li></ul></a></dt></dl>');
		$.each($('.alike'), function(index, val) {
			$(this).html('<dd><a href="###"></a></dd><dt><a href="###"><ul></ul></a></dt>');
			$(this).children().eq(0).children().append('<img src="'+json.same[index + 1].src+'" alt="">');
			$(this).children().next().children().children().append('<li>'+json.same[index + 1].name+'</li><li>'+json.same[index + 1].brand+'</li><li><b></b></li><li><span>'+json.same[index + 1].content+'</span></li>');
		});
	}
	return {
		mallText1:mallText1,
		mallText2:mallText2,
		mallText3:mallText3
	}
})
	

		