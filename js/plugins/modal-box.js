
/**
 * Created by itstar on 2016/05/12.
 */


var Modal_Crop_Box = function($) {

    'strict'
    var modal_crop_box_instance = this;

    this.methods = {
        modal_overlay: $('<div class="site-overlay" id="sietOverlay"></div>'),

        modal_box: $('<div class="modal-box" id="modalBox"></div>'),
        modal_content: $('<div class="modal-content" id="modalContent"></div>'),

        modal_image_tag: $('<img class="modal-image-tag" id="modalImageTag"/>'),
        modal_box_wrapper: $('<div class="modal-box-warpper"></div>'),

        close_button: $('<span class="close-modal" id="closeModal" data-method="getImageData" data-target="#imageData" data-option=""><i class="fa fa-times"></i> بستن</span>'),
        crop_button: $('<span class="crop-button" id="cropButton" data-method="getImageData" data-target="#imageData" data-option=""><i class="fa fa-crop"></i> برش تصویر</span>'),
        rotate_right: $('<span class="rotate-right" id="rotateRight" data-method="rotate" data-option="10"><i class="fa fa-repeat" aria-hidden="true"></i></span>'),
        rotate_left: $('<span class="rotate-left" id="rotateLeft" data-method="rotate" data-option="-10"><i class="fa fa-undo" aria-hidden="true"></i></span>'),
        zoom_in: $('<span class="zoom-in" id="zoomIn" data-method="zoom" data-option="0.1"><i class="fa fa-plus-square" aria-hidden="true"></i></span>'),
        zoom_out: $('<span class="zoom-out" id="zoomOut" data-method="zoom" data-option="-0.1"><i class="fa fa-minus-square" aria-hidden="true"></i></span>'),

        modal_header: $('<div class="modal-header"></div>'),
        modal_footer: $('<div class="modal-footer" id="modalFooter"></div>'),

        setup_crop_box: function () {
            this.modal_footer.append(this.crop_button, this.rotate_right, this.rotate_left, this.zoom_in, this.zoom_out,this.close_button);
            //this. modal_header.append(this.close_button);

            //this.modal_box.append(this.modal_header);
            this.modal_box.append(this.modal_content);
            this.modal_box.append(this.modal_footer);

            this.modal_box_wrapper.append(this.modal_box);

            $('body').append(this.modal_overlay);
            $('body').append(this.modal_box_wrapper);






        },
        init_crop_box: function (image_src,image_data_id) {
            this.modal_image_tag.attr('src', image_src);
            this.modal_content.empty();
            this.modal_content.append(this.modal_image_tag);
            this.crop_button.attr('data-target','#'+image_data_id);
            this.close_button.attr('data-target','#'+image_data_id);
        },
        layout_crop_box: function () {
            this.modal_box_wrapper.css({
                'top' : Math.floor($(window).innerHeight()/2) - Math.floor(this.modal_box_wrapper.outerHeight()/2),
                'left' : Math.floor($(window).innerWidth()/2) - Math.floor(this.modal_box_wrapper.outerWidth()/2),
            });

        },
        show_overlay: function () {
            this.modal_overlay.fadeIn();
        },
        show_crop_box: function () {
            this.modal_box_wrapper.fadeIn();
        },
        hide_crop_box: function () {
            this.modal_box_wrapper.fadeOut();
        },
        hide_overlay: function () {
            this.modal_overlay.fadeOut();
        },
        close_modal:function(){


            this.hide_crop_box();
            this.hide_overlay();
        }
    };




}

