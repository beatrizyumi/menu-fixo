$(document).ready(function(){
	$('.menu>ul>li').on('click', function(){

	});
	$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    	if (scroll >= 130) {
    		$('.menu').css({'position': 'fixed', 'top': 0, 'left': 0, 'background': '#000'});
    	} else {
    		$('.menu').css({'position': 'relative', 'background': 'rgba(#000, 0.8)'});
    	};
	});
});