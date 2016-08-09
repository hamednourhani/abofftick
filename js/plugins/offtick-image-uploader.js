


/**
 * Created by itstar on 2016/05/12.
 */
(function ( $ ) {

    $.fn.offtick_image_uploader = function( prop ) {

        'strict'
        var options = $.extend({
            imageHolderID : '#imageHolderID',
            singleUpload : true,
            placeholder_src : "",
        }, prop );

        var input_file = this;
        var modalCropBox = new Modal_Crop_Box(jQuery);
        modalCropBox.methods.setup_crop_box();




        function crop_image(image_src,image_cont_id,image_data_id){
            console.warn('crop me');
            //var image_src = image_grid.children('img').attr('src');
            var modal_crop_data = {};
            modalCropBox.methods.init_crop_box(image_src,image_data_id);

            modalCropBox.methods.modal_image_tag.load(function(e){
                modalCropBox.methods.layout_crop_box();
                var $current_img = $(this);
                 var cropper_options =  {
                    aspectRatio: 9 / 9,
                    preview: '#'+image_cont_id,
                        crop: function(e) {
                        // Output the result data for cropping image.
                            modal_crop_data = {
                                'position' : {
                                    x : e.x,
                                    y : e.y
                                },
                                'size' :{
                                    width : e.width,
                                    height : e.height,
                                } ,
                                'rotate' : e.rotate,
                                'scale' : {
                                    scaleX : e.scaleX,
                                    scaleY : e.scaleY,
                                },
                            }
                            //console.log(e.x);
                            //console.log(e.y);
                            //console.log(e.width);
                            //console.log(e.height);
                            //console.log(e.rotate);
                            //console.log(e.scaleX);
                            //console.log(e.scaleY);
                            //console.log(JSON.stringify(modal_crop_data));
                        }
               };

                $current_img.on({
                        'build.cropper': function (e) {
                            console.log(e.type);
                        },
                        'built.cropper': function (e) {
                            console.log(e.type);
                        },
                        'cropstart.cropper': function (e) {
                            console.log(e.type, e.action);
                        },
                        'cropmove.cropper': function (e) {
                            console.log(e.type, e.action);
                        },
                        'cropend.cropper': function (e) {
                            console.log(e.type, e.action);
                        },
                        'crop.cropper': function (e) {
                            console.log(e.type, e.x, e.y, e.width, e.height, e.rotate, e.scaleX, e.scaleY);
                        },
                        'zoom.cropper': function (e) {
                            console.log(e.type, e.ratio);
                        }
                    }).cropper(cropper_options);

                $('.modal-footer').on('click', '[data-method]', function () {
                    var $this = $(this);
                    var data = $this.data();
                    var $target;
                    var result;

                    if ($this.prop('disabled') || $this.hasClass('disabled')) {
                        return;
                    }

                    if ($current_img.data('cropper') && data.method) {
                        data = $.extend({}, data); // Clone a new one

                        if (typeof data.target !== 'undefined') {
                            $target = $(data.target);

                            if (typeof data.option === 'undefined') {
                                try {
                                    data.option = JSON.parse($target.val());
                                } catch (e) {
                                    console.log(e.message);
                                }
                            }
                        }

                        result = $current_img.cropper(data.method, data.option, data.secondOption);

                        switch (data.method) {
                            case 'scaleX':
                            case 'scaleY':
                                $(this).data('option', -data.option);
                                break;

                            case 'getCroppedCanvas':
                                if (result) {

                                    // Bootstrap's Modal
                                    $('#getCroppedCanvasModal').modal().find('.modal-body').html(result);

                                    if (!$download.hasClass('disabled')) {
                                        $download.attr('href', result.toDataURL());
                                    }
                                }

                                break;
                            case 'getImageData' :
                                modalCropBox.methods.close_modal();
                                break;
                        }

                        if ($.isPlainObject(result) && $target) {
                            try {
                                $target.val(JSON.stringify(result));
                            } catch (e) {
                                console.log(e.message);
                            }
                        }

                    }
                });

            });

            $(window).resize(function(){
                modalCropBox.methods.layout_crop_box();
            });

            modalCropBox.methods.show_overlay();
            modalCropBox.methods.show_crop_box();

            function close_crop_box(){
                modalCropBox.methods.close_modal();
            }

            // modalCropBox.methods.modal_overlay.click(function(e){
            //     close_crop_box();
            //});


        }

        var counter = 1;

        function imageFileReader(file) {

            var temp_image = "";
            var image_src = "";
            var image_id = "";
            var crop_button = "";
            var remove_button = "";
            var single_reader = new FileReader();
            var file_name = (file.name).replace(/\.[^/.]+$/, "");
            var image_cont_id = "";
            var image_data_id = "";
            var image_data_input ="";
            var image_grid = "";
            console.log(file_name);
            single_reader.onload = function (e) {

                image_src = e.target.result;
                console.log(e.target.result);
                image_id = 'image_' + file_name;
                image_data_id = 'image_data_'+file_name;
                image_cont_id = 'cont_'+image_id;
                temp_image = $('<img id="' + image_id + '" src="' + image_src + '"/>');
                image_grid = $('<div class="image-grid" id="'+image_cont_id+'" ></div>');
                image_data_input = $('<input type="text" id="'+image_data_id+'" style="display:none"/>');
                //image_data_input = $('<input type="text" id="imageData" style="display:none"/>');

                $(options.imageHolderID).empty();


                $(options.imageHolderID).append(image_grid).append(image_data_input);

                var croped_image = crop_image(image_src,image_cont_id,image_data_id);

            }

            single_reader.readAsDataURL(file);
        }



        function proccessInput(input) {
            if (input.files && input.files) {
                for (var i = 0; i < input.files.length; i++) {
                    console.log(input.files[i]);

                    imageFileReader(input.files[i]);
                }
            }
        }



        $(input_file[0]).change(function(){
            proccessInput(this);

        });


        return this;
    };

    $.fn.offtick_mobile_image_uploader =  function (prop) {
        'strict'
        var options = $.extend({
            imageHolderID : '#imageHolderID',
            placeholder_src : "",

        }, prop );
        var image_reader = $(options.imageHolderID).children().children('img');
        var input_file = this;

        function readURL(input) {

            if (input.files && input.files[0]) {
                var reader = new FileReader();
                console.log(input.files);
                reader.onload = function (e) {
                    image_reader.attr('src', e.target.result);
                }

                reader.readAsDataURL(input.files[0]);
            }
        }

        input_file.change(function(){
            console.log(input_file);
            readURL(this);
        });

        return this;
    }



}( jQuery ));
