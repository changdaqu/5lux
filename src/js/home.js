require.config({
	paths:{
		 'jquery':'../libs/jquery',
		 'swiper':'../libs/swiper.jquery',
		 'moduleHome':'moduleHome',
		 'head':'head'
	}
});
require(['jquery','swiper','moduleHome','head'],function($,swi,moduleHome,head){
	$(function(){
		head.head();
			// 首页轮播图
			bannerListFn(
			    $(".banner"),
			    $(".img-btn-list"),
			    $(".left-btn"),
			    $(".right-btn"),
			    2000,
			    true
			);
			function bannerListFn(a,b,c,d,e,f){
		    var $bannerMaxWapDom=a;
		    var windowWidth=$(window).width();
		    var timeShow=0;
		    var array=0;
		    var timeOff=0;
		    var imgPos=$bannerMaxWapDom.find("ul").find("li");
		    var cloneOne=imgPos.first().clone();
		    $bannerMaxWapDom.find("ul").append(cloneOne);
		    $bannerMaxWapDom.find("li").width(windowWidth);
		    var liWidth=imgPos.width();
		    var liLength=$bannerMaxWapDom.find("li").length;
		    $bannerMaxWapDom.find("ul").width(liWidth*(liLength+1));
		    var $imgBtnList=b;
		    setTimeout(function(i){
		        timeShow++;
		        (timeShow == 1) ? $bannerMaxWapDom.find("ul").fadeIn() : $bannerMaxWapDom.find("ul").hide();
		    },20);
		    (e === undefined) ? e=2000 : e=e;
		    function imgListBtn (){
		        for (var i=0; i < liLength-1; i++ ){
		            $imgBtnList.append("<span></span>");
		        }
		        $imgBtnList.children().eq(0).addClass("current");
		        $imgBtnList.children().mouseenter(function(){
		            var index=$(this).index();
		            array=index;
		            bannerImgList(index);
		            $imgBtnList.children().eq(array).addClass("current").siblings().removeClass("current");
		        });
		    }
		    imgListBtn();
		    function bannerImgList(a){
		        $bannerMaxWapDom.find("ul").stop().animate({left: -a*windowWidth},400)
		    }
		    function setTime(){
		        timeOff=setInterval(function(){
		            array++;
		            move();
		        },e)
		    }
		    (f) ? setTime() : setTime;
		    c.stop(true).click(function(){
		        array--;
		        move();
		    });
		    d.stop(true).click(function(){
		        array++;
		        move();
		    });
		    function move(){
		        if (array == liLength){
		            $bannerMaxWapDom.find("ul").css({left:0});
		            array=1;
		        }
		        if (array == -1){
		            $bannerMaxWapDom.find("ul").css({left:-liWidth*(liLength-1)});
		            array=liLength-2
		        }
		        $bannerMaxWapDom.find("ul").stop(true).animate({
		            left:-array*liWidth
		        });
		        (array == liLength-1) ? $imgBtnList.children().stop().eq(0).addClass("current").siblings().removeClass("current") : $imgBtnList.children().eq(array).addClass("current").siblings().removeClass("current");
		    }
		    $bannerMaxWapDom.hover(function(){
		        clearInterval(timeOff);
		    },function(){(f) ? setTime() : setTime;});
		}

		// 首页热门旗舰店
		var $l = 0;
		$('.hot_next').click(function(){
			$l -= 1209;
			if($l >= -2418){
				$('.hotflagbox').animate({left:$l},200);
			}else{
				$l = -2418;
			}
		});
		$('.hot_pre').click(function(){
			$l += 1209;
			if($l <= 0){
				$('.hotflagbox').animate({left:$l},200);
			}else{
				$l = 0;
			}
		});

		// 商场同款
		var r = 0;
		$.getJSON('static/mnue.json', function(json){
			moduleHome.mallText1(json);
			$('.mallSameBtn li').mouseenter(function(){
				moduleHome.mallText2(json);
				if($(this).index() == 0){
					r = 0;
				}else if($(this).index() == 1){
					r = -1219;
				}else if($(this).index() == 2){
					r = -2429;
					moduleHome.mallText3(json);
				}
				$('.mallSame_w').css('left',r);
				$(this).css('background','#000').siblings().css('background','#999');
				
			})
		});
	// *******1:
	var $keysVal = [];
	// 经典箱包以下数据
	$.getJSON('static/shopping.json',function(json){
		var arr = [];
		$.each(json, function(index, val) {
			// *******2:
			$keysVal.push(index);//key
			$.each(json[index], function(i, v) {
				
				arr.push(json[index][i].src1);
			});
		});

		$.each($('.Luggagedivc'), function(ix, vl){
			$(this).data('keys',$keysVal[ix]);
			$('.Luggagedivc').html('<img src="images/150883743722_275x180.jpg" alt=""><img src="images/150883743691_275x180.jpg" alt="" style="margin-right: 0;"><img src="images/150883743741_275x180.jpg" alt=""><img src="images/150883743799_275x180.jpg" alt="" style="margin: 0;">');
		});
		$.each($('.Luggagedivc img'), function(is, vs) {
			$(vs).attr('src',arr[is]);
		});
		$('.Luggage').on('click','.Luggagedivc img',function(e){
			// *******3:
				var $key = $(this).parent().data('keys')// egs : jdxb
				var strJson = JSON.stringify(json[$key][$(this).index()]);
				window.location.href = 'deta.html?title1='+strJson;
				
		});
	});
			









		// 经典箱包效果
		var $left = 0;
		$('.spna').click(function() {
			$left = 0;
			$('.LuggageDivUl').animate({left:$left},200);
			add();
		});
		$('.spnb').click(function() {
			$left = -220;
			$('.LuggageDivUl').animate({left:-220},200);
			add();
		});
		$('.spnc').click(function() {
			$left = -440;
			$('.LuggageDivUl').animate({left:-440},200);
			add();
		});
		add();
			$('.bb').click(function(){
				$left += -220;
				if($left < -440){
					$left = 0;
				}
				$('.LuggageDivUl').animate({left:$left},200);
				add();
			});
			$('.ab').click(function(){
				$left += 220;
				if($left > 0 ){
					$left = -440;
				}
				$('.LuggageDivUl').animate({left:$left},200);
				add();
			});
			function add(){
				if($left == 0){
					$('.spna').css({"background": '#C77F40'});
					$('.spnb').css({"background": '#808080'});
					$('.spnc').css({"background": '#808080'});
				}else if($left == -220){
					$('.spna').css({"background": '#808080'});
					$('.spnb').css({"background": '#C77F40'});
					$('.spnc').css({"background": '#808080'});
				}else if($left == -440){
					$('.spna').css({"background": '#808080'});
					$('.spnb').css({"background": '#808080'});
					$('.spnc').css({"background": '#C77F40'});
				}
			}

		// 购物中心点击改变滚动条
		$('.shopcenterli').click(function(){
			if($(this).index() == 0){
				$(window).scrollTop(2240);
			}else if($(this).index() == 1){
				$(window).scrollTop(2240 + 432);
			}else if($(this).index() == 2){
				$(window).scrollTop(2240 + 432 * 2);
			}else if($(this).index() == 3){
				$(window).scrollTop(2240 + 432 * 3);
			}else if($(this).index() == 4){
				$(window).scrollTop(2240 + 432 * 4);
			}
		});

		// 尾部切换
		$('.promotion3Ul li').mouseenter(function(){
			var $index = $(this).index() + 1;
			$('.promotion3div').children().children().attr('src','../images/'+$index+'bank.jpg');
		});

		// 右边栏
		$('.offside_t ul li').hover(function(){
			$(this).children().next().toggle();

		});
		$('.offside_b ul li').hover(function(){
			$(this).children().next().toggle();
		});

		// 返回顶部
		$('.getTop').click(function(){
			$('html,body').stop().animate({scrollTop:'0px'},300);
		})
	});
});
