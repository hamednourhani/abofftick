
jQuery(document).ready(function($){
	

	$('.menu-search-area span#submit').click(function(e){
		console.log("i am clicked");
		$('nav.main-menu form#searchform').trigger('submit');
	});

	
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

	$(function(){
		$("span.item-address").each(function(i){
			var item_address = $(this);
			len=item_address.text().length;
			//<span class="full-address"><i class="fa fa-map-marker">
			if(len>50)
			{
				var full_address = '<span class="full-address"><i class="fa fa-map-marker"></i>' + item_address.text() + '</span>';
				item_address.text(item_address.text().substr(0,47));
				item_address.prepend('<i class="fa fa-map-marker"></i>');
				item_address.append(full_address);
			}
		});
	});

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
		