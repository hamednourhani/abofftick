/**
 * Created by itstar on 2016/05/12.
 */
(function ( $ ) {

    $.fn.select_payment = function( options ) {

        //This is the easiest way to have default options.
        var settings = $.extend({
            selectID : "",
        }, options );

        var selectID = settings.selectID;

        var select_handler = this;
        select_handler.children('li').click(function(event){
            event.preventDefault();
            var clickedList = $(this);
            select_handler.children('li').each(function(){
               $(this).removeClass('active');
            });
            clickedList.addClass('active');
            var clickedList_id = clickedList.attr('id');
            $(selectID).children('option').each(function(){
               var optionID =$(this).attr('id');
                if(optionID == clickedList_id+'Bank') {
                    $(this).attr('checked', "checked");
                } else {
                    $(this).attr('checked', false);
                }
                console.log('checkedList : '+ clickedList_id+'Bank');
                console.log('optionID : '+ optionID);
            });

        });
        return this;
    };

}( jQuery ));
