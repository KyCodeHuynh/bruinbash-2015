/**
 * Created by Daniel on 9/4/2015.
 */

jQuery(document).ready(function(){
    $('body').height($(document).height()*10);
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
    $('#logo-1').on('click',function(){scrollTo('#home')});
   $('#concert-button').on('click',function(){scrollTo('#concert-page')});

    $(window).scroll(function(){
        if($(window).scrollTop()>($(document).height() *.05)){
            logo.fadeIn('slow');
        }else{
            logo.fadeOut('slow');
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

function scrollTo(id){
    $('html, body').animate({
        scrollTop: $(id).offset().top
    }, 2000);
}