/**
 * Created by Daniel on 9/4/2015.
 */

jQuery(document).ready(function(){
    $('body').height($(document).height());

    $('.concerts').on("mouseenter",function(){
        $('.white').removeClass('hidden');
        $('.concerts').addClass('hidden');
    });
    white($('.concerts'));
});

function white(button){
    $('.white').on('mouseout',function(){
        $('.white').addClass('hidden');
        button.removeClass('hidden');
    });
}