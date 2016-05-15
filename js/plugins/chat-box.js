/**
 * Created by itstar on 2016/05/12.
 */
(function ( $ ) {

    $.fn.chat_box = function( options ) {

        //This is the easiest way to have default options.
        var settings = $.extend({

        }, options );


        var chat_box_container = this;

        var window_height = $(window).innerHeight();
        var window_weight = $(window).innerWidth();

        var header_height = $('.site-header').innerHeight();
        var footer_height = $('.site-footer').innerHeight();
        var profile_menu_bar_height = $('.profile-menu-bar').innerHeight();
        var categories_list_height = $('.menu-bar').innerHeight();

        var visible_header_height =  header_height - profile_menu_bar_height - categories_list_height;

        function layout_cb() {
            chat_box_container.css({
                'width': window_weight - 10,
                'height': window_height - 10,
                'top': '5px',
                'left': '5px',
                'right': '5px',
                'bottom': '5px',
            });
        };

        layout_cb();
        //$('#list-messages-sent').scrollTop($('#list-messages-sent')[0].scrollHeight);

        $(window).resize(function(){
            layout_cb();
        });

        var chat_bw = chat_box_container.children('.chat-box-wrapper');

        var chat_bw_header_height = chat_bw.children('.chat-content-container')
            .children('.chat-content-header').innerHeight();

        var chat_bw_wrapper = chat_bw.children('.chat-content-container').children('.chat-wrapper');

        var chat_content_list_height = chat_bw_wrapper.children('.chat-content-list');

        var chat_bw_wrapper_height = chat_bw_wrapper.innerHeight();

        var chat_bw_footer_height = chat_bw.children('.chat-content-container')
            .children('.chat-content-footer').innerHeight();

        var chat_list_visisble_area =
            chat_bw_wrapper_height - chat_bw_header_height - chat_bw_footer_height;

        //chat_bw_wrapper.scrollTop(chat_content_list_height - chat_list_visisble_area);

        return this;
    };

}( jQuery ));
