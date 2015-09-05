/**
 * Created by Daniel on 9/4/2015.
 */

jQuery(document).ready(function(){
    $('body').height($(document).height()*10);

    $('.concerts').on("mouseenter",function(){
        $('.white').removeClass('hidden');
        $('.concerts').addClass('hidden');

    });
    white($('.concerts'));

});

function white(button){
    var buttonID='#'+button;
    var buttonClass='.'+button;
    $(buttonClass).on("mouseenter",function(){
        $(buttonClass).children(".white").removeClass('hidden');
        $(buttonClass).children(buttonID).addClass('hidden');
    });
    $(buttonClass).find($('.white')).on('mouseout',function(){
        $(buttonClass).children('.white').addClass('hidden');
        $(buttonClass).children(buttonID).removeClass('hidden');
    });
}