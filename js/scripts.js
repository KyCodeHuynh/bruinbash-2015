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

    white('concerts');
    white('festival');
    white('faq');
    white('film');
    white('tickets');
    white('thanks');
    var logo=$('#logo');
    logo.css({
        top:$(window).height()-120+'px',
        left:$(window).width() *.45+'px'
    });
    logo.on('click',function(){
        $('html, body').animate({
            scrollTop: $("#home").offset().top
        }, 2000);
    });
    $(window).scroll(function(){
        if($(window).scrollTop()>($(document).height() *.1)){
            logo.fadeIn('slow');
        }
        else{
            logo.fadeOut();
        }
    });


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