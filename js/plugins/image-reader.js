

$("#imgInp").change(function(){
    readURL(this);
});
/**
 * Created by itstar on 2016/05/12.
 */
(function ( $ ) {

    $.fn.image_reader = function( options ) {

        //This is the easiest way to have default options.
        var settings = $.extend({
            inputID : "",
        }, options );

        var image_tag = this;

        function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $(image_tag).attr('src', e.target.result);
                }

                reader.readAsDataURL(input.files[0]);
            }
        }

        $(settings.inputID).change(function(){
            readURL(this);
        });


        return this;
    };

}( jQuery ));
