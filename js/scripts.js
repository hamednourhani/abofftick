
jQuery(document).ready(function($){
	
	// setTimeout(function(){ 
	// 	window.loading_screen.finish();
	//  }, 1000);

	//$('nav.main-menu').scrollToFixed({
	//	minWidth : '700',
	//});
	$('.menu-search-area span#submit').click(function(e){
		console.log("i am clicked");
		$('nav.main-menu form#searchform').trigger('submit');
	});

	// var smh = $('.sidebar-widget').outerHeight(true) + 40;
	// $('.secondary').css('min-height',smh);
 
	// $('.sidebar-widget').scrollToFixed({
 //            limit: function() {
 //                var limit = $('.site-footer').offset().top - $('.sidebar-widget').outerHeight(true) - 40;
 //                return limit;
 //            },
	// 		marginTop: 50,
	// 		minWidth: 750,
 //            zIndex: 998,
 //            fixed: function() {  },
 //            dontCheckForPositionFixedSupport: true
 //        });

 //    $('aside,article').onScreen({
	//    container: window,
	//    direction: 'vertical',
	  
	//    doIn: function() {
	//      // Do something to the matched elements as they come in
	//    },
	//    doOut: function() {
	//     // Do something to the matched elements as they get off scren
	//    },
	//    tolerance: 0,
	//    throttle: 250,
	//    toggleClass: 'onScreen',
	//    lazyAttr: null,
	//    lazyPlaceholder: 'someImage.jpg',
	//    debug: false
	// });

	// $('a#register-show').click(function(event){
	// 	event.preventDefault();
	// 	$('.register-container').toggleClass('form-display');
	// 	$('.login-container').removeClass('form-display');
	// });

	// $('a#login-show').click(function(event){
	// 	event.preventDefault();
	// 	$('.login-container').toggleClass('form-display');
	// 	$('.register-container').removeClass('form-display');
	// });

	// setTimeout(function(){
	// 	window.loading_screen.finish();
	// },2000);
	
	$('span#menu-toggler').click(function(){
		console.log("clicked");
		var mobile_nav = $('nav.mobile-nav');
		mobile_nav.slideToggle();
	});

	//$(".slider").slick({
    //
	//	// normal options...
	//	infinite: false,
    //
	//	// the magic
	//	responsive: [{
    //
	//		breakpoint: 1024,
	//		settings: {
	//			slidesToShow: 3,
	//			infinite: true
	//		}
    //
	//	}, {
    //
	//		breakpoint: 600,
	//		settings: {
	//			slidesToShow: 2,
	//			dots: true
	//		}
    //
	//	}, {
    //
	//		breakpoint: 300,
	//		settings: "unslick" // destroys slick
    //
	//	}]
	//});
	$('.owl-carousel').owlCarousel({
		margin:10,
		//loop:true,
		autoWidth:true,
		//rtl:true,
		responsiveClass:true,
		responsive:{
			0:{
				items:5,
				nav:false,
				loop:true,
			},
			630:{
				items:13,
				nav:false,
				loop:false,
				mouseDrag:false,
				touchDrag:false,

			},

		}
	});
});
		