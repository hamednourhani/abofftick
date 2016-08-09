
jQuery(document).ready(function($){
	'strict'

	$('.menu-search-area span#submit').click(function(e){
		console.log("i am clicked");
		$('nav.main-menu form#searchform').trigger('submit');
	});

	if(typeof $.fn.scrollToFixed !== 'undefined') {
		var site_header = $('.site-header').scrollToFixed({
			// minWidth : '700',
			maxWidth : '526'
		});
	}
	
	var lastScrollTop = 0;
	$(window).scroll(function(event){
		var st = $(this).scrollTop();
		if($(window).width() < 526) {
			if (st > lastScrollTop) {
				site_header.slideUp();
			} else {
				site_header.slideDown();
			}

		}
		lastScrollTop = st;
	});

	$('span#menu-toggler').click(function(){
		var mobile_nav = $('nav.mobile-nav');
		var menubar = $('#menubar');
		var buttom_search_container = $('#buttom-search-container');
		if(menubar.hasClass('imOnSearch')){
		}else{
			if(menubar.hasClass('imOnMenu')){
				menubar.removeClass('imOnMenu');

			}else{
				menubar.addClass('imOnMenu');
			}
			if(!buttom_search_container.hasClass('searchOn')){
				menubar.slideToggle();
			}
		}

		mobile_nav.slideToggle();

		if(mobile_nav.hasClass('menuOn')){
			mobile_nav.removeClass('menuOn');
		} else {
			mobile_nav.addClass('menuOn');
		}

	});

	$('li#userMenuToggler').click(function(){

		var company_nav = $('nav#companyNav');
		company_nav.slideToggle();
	});

	$('#search-toggler').click(function(){
		var menubar = $('#menubar');
		var mobile_nav = $('nav.mobile-nav');
		var buttom_search_container = $('#buttom-search-container');
		if(menubar.hasClass('imOnMenu')){

		}else{
			if(menubar.hasClass('imOnSearch')){
				menubar.removeClass('imOnSearch');
			}else{
				menubar.addClass('imOnSearch');

			}
			if(!mobile_nav.hasClass('menuOn')){
				menubar.slideToggle();
			}
		}

		buttom_search_container.slideToggle();
		if(buttom_search_container.hasClass('searchOn')){
			buttom_search_container.removeClass('searchOn');
		} else {
			buttom_search_container.addClass('searchOn');
		}

	});
	//$('#loggedin-settings-button').click(function(){
	//	var loggedin_settings_list = $('#loggedin-settings-list');
	//	//loggedin_settings_list.toggleClass('active');
	//	loggedin_settings_list.fadeToggle();
	//});
	$('.hidden-content span.slidetoggler').click(function(){
		var hidden_content = $(this).parent().children('ul.info-desc');
		console.log(hidden_content);
		hidden_content.toggleClass('slidedown');
	});
	//$('#lockSettingButton').click(function(){
	//	var dropdown_menu = $('#lockSettingList');
	//	dropdown_menu.fadeToggle();
	//});

	var fa_th_large = $('#fa-th-large');
	var fa_times = $("#fa-times");
	$('#f-toggler').click(function(){
		var side_columns_container = $('#side-columns-container');
		side_columns_container.toggleClass('show-side');
		fa_times.toggleClass('current');
		fa_th_large.toggleClass('current');
	});

	var side_followers_container = $('#side-followers-container');
	var side_important_apps = $('#side-important-apps');
	var side_followers_toggler = $('#side-followers-toggler');
	var side_apps_toggler = $('#side-apps-toggler');

	side_followers_toggler.click(function(event){
		event.preventDefault();
		side_important_apps.removeClass('current');
		side_followers_container.addClass('current');
		side_apps_toggler.removeClass('active');
		side_followers_toggler.addClass('active');

	});

	side_apps_toggler.click(function(event){
		event.preventDefault();
		side_followers_container.removeClass('current');
		side_important_apps.addClass('current');
		side_followers_toggler.removeClass('active');
		side_apps_toggler.addClass('active');

	});

	//if(typeof QRCode !== 'undefined') {
	//	new QRCode(document.getElementById("qrCode"), "http://offtick.com");
	//}

	if(typeof $.fn.hide_site_section !== 'undefined') {
		$('#hideFooter').hide_site_section({
				togglerID: 'hideFooterToggler',
				sectionName: "Footer"
			}
		);
	}

	if(typeof $.fn.select_payment !== 'undefined') {
		$('#bankHandler').select_payment({
			selectID : '#paymentMethod'
		});
	}

	(function doCarousel(){
		if(typeof $.fn.owlCarousel !== 'undefined') {
			var owl = $('.owl-carousel'),
				owlOptions = {
					margin: 10,
					//loop:true,
					autoWidth: true,
					//rtl:true,
					responsiveClass: true,
					responsive: {
						0: {
							items: 5,
							nav: false,
							loop: false,
							mouseDrag: true,
							touchDrag: true,
						},
						700: {
							items: 13,
							nav: false,
							loop: false,
							mouseDrag: false,
							touchDrag: false,

						},

					}


				};

			if ($(window).width() > 526) {
				var owlActive = owl.owlCarousel(owlOptions);
				owl.removeClass('off');
			} else {
				owl.addClass('off');
			}

			$(window).resize(function () {
				if ($(window).width() > 526) {
					if ($('.owl-carousel').hasClass('off')) {
						var owlActive = owl.owlCarousel(owlOptions);
						owl.removeClass('off');
					}
				} else {

					owl.addClass('off').trigger('destroy.owl.carousel');
						owl.find('.owl-stage-outer').children(':eq(0)').unwrap();

				}
			});
		}


		// if (typeof $.fn.owlCarousel !== 'undefined') {
        //
		// 	$('.owl-carousel').owlCarousel({
		// 		margin: 10,
		// 		//loop:true,
		// 		autoWidth: true,
		// 		//rtl:true,
		// 		responsiveClass: true,
		// 		responsive: {
		// 			0: {
		// 				items: 5,
		// 				nav: false,
		// 				loop: false,
		// 				mouseDrag: true,
		// 				touchDrag: true,
		// 			},
		// 			700: {
		// 				items: 13,
		// 				nav: false,
		// 				loop: false,
		// 				mouseDrag: false,
		// 				touchDrag: false,
        //
		// 			},
        //
		// 		}
		// 	});
		// }
	}());

	(function doMenuBar(){
		var menubar = $('#menubar');
		function hideShowMenuBar() {
			if ($(window).width() > 526) {
				menubar.show();
			} else {
				menubar.hide();
			}
		}
		hideShowMenuBar();
		$(window).resize(function(event){
			hideShowMenuBar();
		});

	}());

	//if(typeof $.fn.imagepicker !== 'undefined') {
	//	$("#PaymentMethod").imagepicker();
	//}

	if(typeof $.fn.sliderPro !== 'undefined') {
		$('#offer-slider').sliderPro({
			width: '100%',
			height: '400',
			arrows: true,
			buttons: false,
			waitForLayers: true,
			fade: true,
			autoplay: true,
			autoScaleLayers: true,
			loop: true,
			fullScreen: true,
			breakpoints: {
				600: {
					height: '240'
				}

			}
		});
	}
	if(typeof $.fn.gallery !== 'undefined') {
		$('#dg-container').gallery({
			current: 0,
			autoplay: true,
			interval: 2000
		});
	}

	if(typeof $.fn.chat_box !== 'undefined') {
		$("#chatContainer").chat_box();
	}

	if(typeof $.fn.emojiarea !== 'undefined') {
		$.emojiarea.path = 'images/icons/emojies/';
		$.emojiarea.icons = {
			':smile:': 'smile.png',
			':angry:': 'angry.png',
			':flushed:': 'flushed.png',
			':neckbeard:': 'neckbeard.png',
			':laughing:': 'laughing.png',

		};
		$('#currentMessage').emojiarea({button: '#emojiButton'});
	}

	if(typeof $.fn.offtick_image_uploader !== 'undefined') {
		$('#userPhotoUploader').offtick_image_uploader({
			imageHolderID : '#imageHolderID',
			singleUpload : true,
			placeholder_src : "images/user-image-placeholder.png",
		});
	}

	if(typeof Calendar !== 'undefined') {

		Calendar.setup({
			inputField: 'date_input',
			button: 'date_btn',
			ifFormat: '%Y/%m/%d',
			dateType: 'jalali'
		});
	}

	var changeLayout = function(){
		var window_width = $(window).innerWidth();
		var secondary = $('#singleOfferSecondary');
		//var comments_container = $('.comments-container');
		var primary = $('#singleOfferPrimary');
		var secondary_mobile_place = primary.children('.secondary-mobile-place');
		var single_offer_content = $('.single-offer-content');
		var single_offer_section = single_offer_content.children('section.layout');

		if(window_width < 700){

			secondary_mobile_place.append(secondary).show();
		} else {
			secondary_mobile_place.hide();
			single_offer_section.append(secondary);
		}
	};

	changeLayout();

	$(window).resize(function(){
		changeLayout();
	});

});
		