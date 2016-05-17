

$("#imgInp").change(function(){
    readURL(this);
});
/**
 * Created by itstar on 2016/05/12.
 */
(function ( $ ) {

    $.fn.offtick_image_uploader = function( prop ) {

        //This is the easiest way to have default options.
        var options = $.extend({
            imageHolderID : '#imageHolderID',
            singleUpload : true,
            placeholder_src : "",
        }, prop );

        function put_placeholder(){
            if($(options.imageHolderID).children() > 0){
                console.log('i have child');
            } else {
                $(options.imageHolderID).append('<div class="image-grid" id="placeholderImageGrid"><img src="'+options.placeholder_src+'" class="image-reader"></div>');
            }
        }

        function crop_image(image_grid){
            console.warn('crop me');
            image_grid.children('img').cropper({
                aspectRatio: 16 / 9,
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
        }

        var counter = 1;

        function imageFileReader(file) {

            var temp_image = "";
            var image_src = "";
            var image_id = "";
            var crop_button = "";
            var remove_button = "";
            var single_reader = new FileReader();

            single_reader.onload = function (e) {

                image_src = e.target.result;
                console.log(e.target.result);
                image_id = 'temp_image_' + counter;
                temp_image = $('<img id="' + image_id + '" src="' + image_src + '"/>');
                if(options.singleUpload == true) {
                    $(options.imageHolderID).empty();
                } else {
                    $(options.imageHolderID).children('#placeholderImageGrid').remove();
                }

                remove_button = $('<span class="remove"><i class="fa fa-times"></i></span>');

                remove_button.click(function(){
                   $(this).parent('.image-grid').remove();
                    put_placeholder();
                });
                crop_button = $('<span class="crop"><i class="fa fa-crop"></i></span>');
                crop_button.click(function(){
                    var image_grid = $(this).parent('.image-grid');
                     crop_image(image_grid);

                });

                $(options.imageHolderID).append($('<div class="image-grid"  data-index="'+counter+'"></div>').append(temp_image).append(remove_button).append(crop_button));

                counter++;
            }

            single_reader.readAsDataURL(file);
        }



        function proccessInput(input) {
            if (input.files && input.files) {

                for (var i = 0; i < input.files.length; i++) {
                    imageFileReader(input.files[i]);
                }
            }
        }

        $(this).change(function(){
            proccessInput(this);

        });


        return this;
    };

}( jQuery ));
