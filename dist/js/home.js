require.config({paths:{jquery:"../libs/jquery",swiper:"../libs/swiper.jquery",moduleHome:"moduleHome",head:"head"}}),require(["jquery","swiper","moduleHome","head"],function(n,i,e,t){n(function(){function i(){0==l?(n(".spna").css({background:"#C77F40"}),n(".spnb").css({background:"#808080"}),n(".spnc").css({background:"#808080"})):-220==l?(n(".spna").css({background:"#808080"}),n(".spnb").css({background:"#C77F40"}),n(".spnc").css({background:"#808080"})):-440==l&&(n(".spna").css({background:"#808080"}),n(".spnb").css({background:"#808080"}),n(".spnc").css({background:"#C77F40"}))}t.head(),function(i,e,t,c,s,a){function l(n){u.find("ul").stop().animate({left:-n*d},400)}function o(){h=setInterval(function(){f++,r()},s)}function r(){f==v&&(u.find("ul").css({left:0}),f=1),-1==f&&(u.find("ul").css({left:-b*(v-1)}),f=v-2),u.find("ul").stop(!0).animate({left:-f*b}),f==v-1?k.children().stop().eq(0).addClass("current").siblings().removeClass("current"):k.children().eq(f).addClass("current").siblings().removeClass("current")}var u=i,d=n(window).width(),g=0,f=0,h=0,m=u.find("ul").find("li"),p=m.first().clone();u.find("ul").append(p),u.find("li").width(d);var b=m.width(),v=u.find("li").length;u.find("ul").width(b*(v+1));var k=e;setTimeout(function(n){1==++g?u.find("ul").fadeIn():u.find("ul").hide()},20),s=void 0===s?2e3:s,function(){for(var i=0;i<v-1;i++)k.append("<span></span>");k.children().eq(0).addClass("current"),k.children().mouseenter(function(){var i=n(this).index();f=i,l(i),k.children().eq(f).addClass("current").siblings().removeClass("current")})}(),a&&o(),t.stop(!0).click(function(){f--,r()}),c.stop(!0).click(function(){f++,r()}),u.hover(function(){clearInterval(h)},function(){a&&o()})}(n(".banner"),n(".img-btn-list"),n(".left-btn"),n(".right-btn"),2e3,!0);var c=0;n(".hot_next").click(function(){(c-=1209)>=-2418?n(".hotflagbox").animate({left:c},200):c=-2418}),n(".hot_pre").click(function(){(c+=1209)<=0?n(".hotflagbox").animate({left:c},200):c=0});var s=0;n.getJSON("static/mnue.json",function(i){e.mallText1(i),n(".mallSameBtn li").mouseenter(function(){e.mallText2(i),0==n(this).index()?s=0:1==n(this).index()?s=-1219:2==n(this).index()&&(s=-2429,e.mallText3(i)),n(".mallSame_w").css("left",s),n(this).css("background","#000").siblings().css("background","#999")})});var a=[];n.getJSON("static/shopping.json",function(i){var e=[];n.each(i,function(t,c){a.push(t),n.each(i[t],function(n,c){e.push(i[t][n].src1)})}),n.each(n(".Luggagedivc"),function(i,e){n(this).data("keys",a[i]),n(".Luggagedivc").html('<img src="images/150883743722_275x180.jpg" alt=""><img src="images/150883743691_275x180.jpg" alt="" style="margin-right: 0;"><img src="images/150883743741_275x180.jpg" alt=""><img src="images/150883743799_275x180.jpg" alt="" style="margin: 0;">')}),n.each(n(".Luggagedivc img"),function(i,t){n(t).attr("src",e[i])}),n(".Luggage").on("click",".Luggagedivc img",function(e){var t=n(this).parent().data("keys"),c=JSON.stringify(i[t][n(this).index()]);window.location.href="deta.html?title1="+c})});var l=0;n(".spna").click(function(){l=0,n(".LuggageDivUl").animate({left:l},200),i()}),n(".spnb").click(function(){l=-220,n(".LuggageDivUl").animate({left:-220},200),i()}),n(".spnc").click(function(){l=-440,n(".LuggageDivUl").animate({left:-440},200),i()}),i(),n(".bb").click(function(){(l+=-220)<-440&&(l=0),n(".LuggageDivUl").animate({left:l},200),i()}),n(".ab").click(function(){(l+=220)>0&&(l=-440),n(".LuggageDivUl").animate({left:l},200),i()}),n(".shopcenterli").click(function(){0==n(this).index()?n(window).scrollTop(2240):1==n(this).index()?n(window).scrollTop(2672):2==n(this).index()?n(window).scrollTop(3104):3==n(this).index()?n(window).scrollTop(3536):4==n(this).index()&&n(window).scrollTop(3968)}),n(".promotion3Ul li").mouseenter(function(){var i=n(this).index()+1;n(".promotion3div").children().children().attr("src","../images/"+i+"bank.jpg")}),n(".offside_t ul li").hover(function(){n(this).children().next().toggle()}),n(".offside_b ul li").hover(function(){n(this).children().next().toggle()}),n(".getTop").click(function(){n("html,body").stop().animate({scrollTop:"0px"},300)})})});