define(function(){return{mallText1:function(s){$(".same_fist").html('<div class="same_t1 same_c" style="margin-right:8px;"><div class="same_t_txt"></div><div class="same_t_img"></div></div><div class="same_t2 same_c"><div class="same_t2_txt"></div><div class="same_t2_img"></div></div><div class="same_t1 same_c"><div class="same_t_txt"></div><div class="same_t_img"></div></div>'),$(".same_b1").html('<div class="same_b_w same_b_w1"><div class="same_b_txt"></div><div class="same_b_img"></div></div><div class="same_b_w same_b_w1"><div class="same_b_txt"></div><div class="same_b_img"></div></div><div class="same_b_w same_b_w1"><div class="same_b_txt"></div><div class="same_b_img"></div></div>'),$.each($(".same_fist").children(),function(a,e){$(".same_c").children().eq(2*a).append('<p class="enbrand">'+s.hot[a].name+"</p><p>"+s.hot[a].brand+"</p><p>"+s.hot[a].price+"</p>"),$(".same_c").children().next().eq(a).append('<a href="###"><img src="'+s.hot[a].src+'" alt=""></a>'),$(".same_b_w1").children().eq(2*a).append('<p class="enbrand">'+s.hot[a+3].name+"</p><p>"+s.hot[a+3].brand+"</p><p>"+s.hot[a+3].price+"</p>"),$(".same_b_w1").children().next().eq(a).append('<a href="###"><img src="'+s.hot[a+3].src+'" alt=""></a>')})},mallText2:function(s){$(".same_two").html('<div class="same_t1 same_c1" style="margin-right:8px;"><div class="same_t_txt"></div><div class="same_t_img"></div></div><div class="same_t2 same_c1"><div class="same_t2_txt"></div><div class="same_t2_img"></div></div><div class="same_t1 same_c1"><div class="same_t_txt"></div><div class="same_t_img"></div></div>'),$(".same_b2").html('<div class="same_b_w same_b_w2"><div class="same_b_txt"></div><div class="same_b_img"></div></div><div class="same_b_w same_b_w2"><div class="same_b_txt"></div><div class="same_b_img"></div></div><div class="same_b_w same_b_w2"><div class="same_b_txt"></div><div class="same_b_img"></div></div>'),$.each($(".same_two").children(),function(a,e){$(".same_c1").children().eq(2*a).append('<p class="enbrand">'+s.newP[a].name+"</p><p>"+s.newP[a].brand+"</p><p>"+s.newP[a].price+"</p>"),$(".same_c1").children().next().eq(a).append('<a href="###"><img src="'+s.newP[a].src+'" alt=""></a>'),$(".same_b2").children().children().eq(2*a).append('<p class="enbrand">'+s.newP[a+3].name+"</p><p>"+s.newP[a+3].brand+"</p><p>"+s.newP[a+3].price+"</p>"),$(".same_b2").children().children().next().eq(a).append('<a href="###"><img src="'+s.newP[a+3].src+'" alt=""></a>')})},mallText3:function(s){$(".win_w").html('<dl><dd><a href="###"><img src="'+s.same[0].src+'" alt=""></a></dd><dt class="hua"><a href="###"><ul><li>'+s.same[0].name+"</li><li>"+s.same[0].brand+"</li><li><b></b></li><li><span>"+s.same[0].content+"</span></li></ul></a></dt></dl>"),$.each($(".alike"),function(a,e){$(this).html('<dd><a href="###"></a></dd><dt><a href="###"><ul></ul></a></dt>'),$(this).children().eq(0).children().append('<img src="'+s.same[a+1].src+'" alt="">'),$(this).children().next().children().children().append("<li>"+s.same[a+1].name+"</li><li>"+s.same[a+1].brand+"</li><li><b></b></li><li><span>"+s.same[a+1].content+"</span></li>")})}}});