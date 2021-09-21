$(document).ready(function(){
	// lottie animation
$(window).ready(function(){
		var animation = bodymovin.loadAnimation({
 		container: document.getElementById('logo'),
 		renderer:'svg',
 		loop:false,
 		autoplay:'true',
 		path:'https://assets5.lottiefiles.com/private_files/lf30_0g4jfhqn.json'
		})
		var animation = bodymovin.loadAnimation({
 		container: document.getElementById('skill1'),
 		renderer:'svg',
 		loop:'4',
 		autoplay:'true',
 		path:'https://assets4.lottiefiles.com/private_files/lf30_coea7bte.json'
		})
		var animation = bodymovin.loadAnimation({
 		container: document.getElementById('skill2'),
 		renderer:'svg',
 		loop:'4',
 		autoplay:'true',
 		path:'https://assets10.lottiefiles.com/packages/lf20_g4m1auuk.json'
		})
		var animation = bodymovin.loadAnimation({
 		container: document.getElementById('skill3'),
 		renderer:'svg',
 		loop:'4',
 		autoplay:'true',
 		path:'https://assets10.lottiefiles.com/private_files/lf30_31yi2jtl.json'
		})
		var animation = bodymovin.loadAnimation({
 		container: document.getElementById('skill4'),
 		renderer:'svg',
 		loop:'4',
 		autoplay:'true',
 		path:'https://assets7.lottiefiles.com/private_files/lf30_qrnxyorl.json'
		})
		var animation = bodymovin.loadAnimation({
 		container: document.getElementById('skill5'),
 		renderer:'svg',
 		loop:'4',
 		autoplay:'true',
 		path:'https://assets3.lottiefiles.com/private_files/lf30_ztkzfr9e.json'
		})
		var animation = bodymovin.loadAnimation({
 		container: document.getElementById('skill6'),
 		renderer:'svg',
 		loop:'4',
 		autoplay:'true',
 		path:'https://assets7.lottiefiles.com/private_files/lf30_zkxz853t.json'
		})
	$(document).ready(function(){
		$('#logo').scroll(function(){
			play.addEvenlistener('scroll',() => {
				animItem.GoToAndPlay(0,true);
			})
		})
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
	$('[data-fancybox="gallery"]').fancybox({
		loop: true,
	});
	// stellar plugin initialize
	if(screen.width > 768){
		$(window).stellar();
	}

	

})

