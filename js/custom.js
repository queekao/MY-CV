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
		var animation = bodymovin.loadAnimation({
 		container: document.getElementById('skill1'),
 		renderer:'svg',
 		loop:'',
 		autoplay:'true',
 		path:'https://assets2.lottiefiles.com/private_files/lf30_24p1bq00.json'
		})
		var animation = bodymovin.loadAnimation({
 		container: document.getElementById('skill2'),
 		renderer:'svg',
 		loop:'',
 		autoplay:'true',
 		path:'https://assets5.lottiefiles.com/private_files/lf30_pzt6fyzj.json'
		})
		var animation = bodymovin.loadAnimation({
 		container: document.getElementById('skill3'),
 		renderer:'svg',
 		loop:'',
 		autoplay:'true',
 		path:'https://assets1.lottiefiles.com/private_files/lf30_kmsqivyk.json'
		})
		var animation = bodymovin.loadAnimation({
 		container: document.getElementById('skill4'),
 		renderer:'svg',
 		loop:'',
 		autoplay:'true',
 		path:'https://assets2.lottiefiles.com/private_files/lf30_qhrpbr3t.json'
		})
		var animation = bodymovin.loadAnimation({
 		container: document.getElementById('skill5'),
 		renderer:'svg',
 		loop:'',
 		autoplay:'true',
 		path:'https://assets8.lottiefiles.com/private_files/lf30_80xbe56b.json'
		})
		var animation = bodymovin.loadAnimation({
 		container: document.getElementById('skill6'),
 		renderer:'svg',
 		loop:'',
 		autoplay:'true',
 		path:'https://assets9.lottiefiles.com/private_files/lf30_83oy3ycs.json'
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
