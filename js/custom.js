$(document).ready(function(){
	// lottie animation
	$(window).ready(function(){
			var animation = bodymovin.loadAnimation({
 		container: document.getElementById('svg'),
 		renderer:'svg',
 		loop:'',
 		autoplay:'true',
 		path:'https://assets3.lottiefiles.com/packages/lf20_3uoshewc.json'
		})
	// header color change
	$(window).on("scroll",function(){
		var scrollDistance = $(window).scrollTop();
		var $header = $(".js-header");
		if(scrollDistance > 80){
			$header.addClass("header--colored");
		}
		else{
			$header.removeClass("header--colored");
		}

		
 	})
		play.addEvenlistener('click', () => {
			animItem.GoToAndPlay(0,true);

		})
	})
	// wow plugin initialize
	if(screen.width > 768){
		new WOW().init();
	}
	
	// fancybox plugin options
	$('[data-fancybox]').fancybox({
		loop: true
	});
	// stellar plugin initialize
	if(screen.width > 768){
		$(window).stellar();
	}
	

})
