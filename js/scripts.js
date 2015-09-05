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
<<<<<<< HEAD
    $('.clickable').on('click',function(){
        $('.intro').fadeOut();
        setTimeout(function(){
            $.ajax('countdown.html', {
                success: function (response) {
                    $('.main').html(response);
                },
                error: function(request, errorType, errorMessage) {
                    alert('Error: ' + errorType + ' with message: ' + errorMessage);
                },
                timeout: 4000,
                beforeSend: function() {
                    $('.main').addClass('isloading');
                },
                complete: function() {

                }
            });
        },1000);
    });
    x.on('click',function(){
        responsiveImg();
        $('.main').fadeOut();
        $('.intro').fadeIn();
=======
    $(buttonClass).find($('.white')).on('mouseout',function(){
        $(buttonClass).children('.white').addClass('hidden');
        $(buttonClass).children(buttonID).removeClass('hidden');
>>>>>>> 3d02a7142e53714cc9064317b1b165aa8b6b1fc5
    });
}

function scrollTo(id){
    $('html, body').animate({
        scrollTop: $(id).offset().top
    }, 2000);
}