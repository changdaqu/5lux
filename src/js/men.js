require.config({
	paths:{
		'jquery':'../libs/jquery',
		'head':'head'
	}
});
require(['jquery','head'],function($,head){
	head.head();
	$('.top').click(function(){
			$('html,body').stop().animate({scrollTop:'0px'},300);
		})
})