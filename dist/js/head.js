define(function(){return{head:function(){var e=$(".seek_w input");e.bind("input propertychange",function(){""!=e.val().length?($(".seek_n li .min").html($(this).val()),$(".seek_n").show()):($(".seek_n li .min").html(""),$(".seek_n").hide())}),$(document).click(function(){$(".seek_n").hide()}),$(".shopp_w p").mouseenter(function(){$(".shopp_n").slideDown(100)}),$(".shopp").mouseleave(function(){$(".shopp_n").slideUp(100)}),$(".icons li").mouseenter(function(){$(this).stop().animate({width:"145px"},240).siblings().stop().animate({width:"30px"},240)}),$(".icons li").mouseleave(function(){$(this).stop().animate({width:"30px"},240).css("marginRight","12px")});var i=null;$.getJSON("static/home.json",function(e){$.each($(".group"),function(i,n){$(".group").eq(i).next().remove(),$(".group").eq(i).parent("li").append('<div class="pag"><div class="shop"><h2><a href="###">国际高端</a></h2><div class="shop_w"></div></div><div class="shop"><h2><a href="###">热销品牌</a></h2><div class="shop_w"></div></div><div class="shop"><h2><a href="###">最新品牌</a></h2><div class="shop_w"></div></div><div class="shopBtn"><a href="###">进入所有品牌</a></div></div>');var a=$(".group").eq(i).parent("li").find(".pag .shop_w");$.each(a,function(n,s){$.each(e["barData"+(i+1)][n].data,function(s,t){a.eq(n).append('<a href="'+e["barData"+(i+1)][n].data[s].src+'">'+e["barData"+(i+1)][n].data[s].name+"</a>")})})}),$(".pag").mouseenter(function(){clearTimeout(i),$(this).show()}),$(".pag").mouseleave(function(){$(".pag").hide()})}),$(".group").hover(function(){clearTimeout(i),$(this).next().show()},function(){$(this).next().hide(),i=setTimeout(function(){$(".pag").hide()},200)})}}});