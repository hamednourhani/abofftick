
jQuery(document).ready(function($){
	

	$('.menu-search-area span#submit').click(function(e){
		console.log("i am clicked");
		$('nav.main-menu form#searchform').trigger('submit');
	});

	// $('div#menubar').scrollToFixed({
	// 	minWidth : '700',
	// });

	$('span#menu-toggler').click(function(){
		console.log("clicked");
		var mobile_nav = $('nav.mobile-nav');
		mobile_nav.slideToggle();
	});

	$('#search-toggler').click(function(){
		console.log("clicked");
		var buttom_search_container = $('#buttom-search-container');
		buttom_search_container.slideToggle();
	});
	$('#loggedin-settings-button').click(function(){
		var loggedin_settings_list = $('#loggedin-settings-list');
		//loggedin_settings_list.toggleClass('active');
		loggedin_settings_list.fadeToggle();
	});
	$('.hidden-content span.slidetoggler').click(function(){
		var hidden_content = $(this).parent().children('ul.info-desc');
		console.log(hidden_content);
		hidden_content.toggleClass('slidedown');
	});
	$('ul.profile-links i.fa-caret-down').click(function(){
		var dropdown_menu = $(this).parent().children('ul.dropdown-menu');
		dropdown_menu.fadeToggle();
	});
	//$(function(){
	//	$("span.item-address").each(function(i){
	//		var item_address = $(this);
	//		len=item_address.text().length;
	//		//<span class="full-address"><i class="fa fa-map-marker">
	//		if(len>50)
	//		{
	//			var full_address = '<span class="full-address"><i class="fa fa-map-marker"></i>' + item_address.text() + '</span>';
	//			item_address.text(item_address.text().substr(0,47));
	//			item_address.prepend('<i class="fa fa-map-marker"></i>');
	//			item_address.append(full_address);
	//		}
	//	});
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
				loop:false,
				mouseDrag:true,
				touchDrag:true,
			},
			700:{
				items:13,
				nav:false,
				loop:false,
				mouseDrag:false,
				touchDrag:false,

			},

		}
	});

	$( '#offer-slider' ).sliderPro({
		width : '100%',
		height : '400',
		arrows: true,
		buttons: false,
		waitForLayers: true,
		fade: true,
		autoplay: true,
		autoScaleLayers: true,
		loop : true,
		fullScreen : true,
		breakpoints: {
			600: {
				height : '240'
			}

		}
	});

	$("#profileSlider").AnimatedSlider( {
		//prevButton: "#btn_prev2",
		//nextButton: "#btn_next2",
		visibleItems: 5,
		infiniteScroll: true,
		//willChangeCallback: function(obj, item) { $("#statusText").text("Will change to " + item); },
		//changedCallback: function(obj, item) { $("#statusText").text("Changed to " + item); }
	});
	$("#profileSliderHandle").simpleSlider();



	var profileSlider = $("#profileSlider").data("AnimatedSlider");
	var profile_slider_handle = $("#profileSliderHandle");

	$(profile_slider_handle).change(function(){
		var profile_slider_handle_val = profile_slider_handle.val();
		profileSlider.setItem(profile_slider_handle_val);
	});


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
		