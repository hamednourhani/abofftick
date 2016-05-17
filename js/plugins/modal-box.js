(function($){

    // Defining our jQuery plugin

    $.fn.create_modal_box = function(prop){

        // Default parameters

        var options = $.extend({
            height : "250",
            width : "500",
            title:"JQuery Modal Box Demo",
            description: "Example of how to create a modal box.",
            top: "20%",
            left: "30%",
            input_tag: "",
        },prop);

        input_tag.change(function(e){
            var image_src = get_image_src(options.input_tag,options.image_tag);
            add_block_page();
            create_popup_box(image_src);
            add_styles();

            $('.offtick_modal_box').fadeIn();
            $('#modalImageTag').cropper({
                aspectRatio: 1 / 1,
                crop: function(e) {
                    // Output the result data for cropping image.
                    console.log(e.x);
                    console.log(e.y);
                    console.log(e.width);
                    console.log(e.height);
                    console.log(e.rotate);
                    console.log(e.scaleX);
                    console.log(e.scaleY);
                }
            });
        });

        function add_styles(){
            $('.offtick_modal_box').css({
                'left':options.left,
                'top':options.top,
                'height': options.height + 'px',
                'width': options.width + 'px',
            });

            var pageHeight = $(document).height();
            var pageWidth = $(window).width();

            $('.offtick_block_page').css({
                'height':pageHeight,
                'width':pageWidth,
            }).fadeIn();
            $('.offtick_inner_modal_box').css({
                'height':(options.height - 50) + 'px',
                'width':(options.width - 50) + 'px',
            });
        }

        function add_block_page(){
            var block_page = $('<div class="offtick_block_page"></div>');

            $(block_page).appendTo('body');
        }

        function create_popup_box(image_src){

            var pop_up = $('<div class="offtick_modal_box"><div class="offtick_inner_modal_box"><h2>'
                + options.title + '</h2><img id="modalImageTag" src="'+image_src+'"/></div></div>');
            $(pop_up).appendTo('.offtick_block_page');


        }



        return this;
    };

})(jQuery);