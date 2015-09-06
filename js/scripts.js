/**
 * Created by Daniel on 9/4/2015.
 */

jQuery(document).ready(function(){
    $('body').height($(document).height()*1.5);
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
    $('#film-button').on('click',function(){scrollTo('#film-page')});
    $('#festival-button').on('click',function(){scrollTo('#festival-page')});
    $('#faq-button').on('click',function(){scrollTo('#faq-page')});
    $('#thanks-button').on('click',function(){scrollTo('#thanks-page')});
    $(window).scroll(function(){
        if($(window).scrollTop()>($(document).height() *.05)){
            logo.fadeIn('slow');
        }else{
            logo.fadeOut('slow');
        }
    });
    faq();
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
        scrollTop:$(id).offset().top
    },2000);
}

function faq(){
    $('#faq-ticket').on('click',function(){
        $('.answers').remove();
        $.ajax('faq-answers/tickets.html',{
            success:function(data){$('#faq-answers').html(data).fadeIn()}
        });
    });
    $('#faq-concert').on('click',function(){
        $('.answers').remove();
        $.ajax('faq-answers/concert.html',{
            success:function(data){$('#faq-answers').html(data).fadeIn()}
        });
    });
    $('#faq-festival').on('click',function(){
        $('.answers').remove();
        $.ajax('faq-answers/festival.html',{
            success:function(data){$('#faq-answers').html(data).fadeIn()}
        });
    });
    $('#faq-general').on('click',function(){
        $('.answers').remove();
        $.ajax('faq-answers/general.html',{
            success:function(data){$('#faq-answers').html(data).fadeIn()}
        });
    });
}