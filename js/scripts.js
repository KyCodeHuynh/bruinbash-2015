/**
 * Created by Daniel on 9/4/2015.
 */

jQuery(document).ready(function(){

    //$('body').height($(document).height()*1.75);
    $.ajax('threelogos.html',{
        success:function(data){$('.3logos').html(data).fadeIn()}
    });
    $.ajax('madeon-gif.html',{
        success:function(data){$('#madeon-gif').html(data).fadeIn()}
    });

    white('concerts');
    white('festival');
    white('faq');
    white('film');
    white('tickets');
    white('thanks');
    var logo=$('#bbash');
    logo.css({
        top:$(window).height()-120+'px',
        left:$(window).width() *.40+'px'
    });
    $('#eaf').css({
        top:$(window).height()-130+'px',
        left:$(window).width() *.50+'px'
    });
    $('#logo-1').on('click',function(){scrollTo('#home')});
    $('#logo-2').on('click',function(){window.location.href = "eaf/eaf.html";});
    $('#concert-button').on('click',function(){scrollTo('#concert-page')});
    $('#film-button').on('click',function(){scrollTo('#film-page')});
    $('#festival-button').on('click',function(){scrollTo('#festival-page')});
    $('#faq-button').on('click',function(){scrollTo('#faq-page')});
    $('#tickets-button').on('click',function(){scrollTo('#tickets-page')});
    $('#thanks-button').on('click',function(){scrollTo('#thanks-page')});
    var counter=0;
    $(window).scroll(function(){
        if($(window).scrollTop()>($(document).height() *.05)){
            $(".logo-buttons").fadeIn('slow');
        }else{
            $(".logo-buttons").fadeOut('slow');
        }

        if($('#concert-page').height()<$(window).scrollTop()){
            if(counter==0){
                counter++;
                setTimeout(function(){
                    $('#intro-gif').fadeIn(2000,function(){
                        $('#intro-gif').on('click',function(){
                            $('#intro-gif').fadeOut();
                            $('#concert-block').fadeIn(3000);
                        });
                        setTimeout(function(){
                            $('#intro-gif').fadeOut();
                            $('#concert-block').fadeIn(3000);
                        },6000);
                    });
                },500);
            }
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
    $.ajax('faq-answers/tickets.html',{
        success:function(data){$('#faq-answers').html(data).fadeIn()}
    });
    $('#faq-film').on('click',function(){
        $('.answers').remove();
        $.ajax('faq-answers/films.html',{
            success:function(data){$('#faq-answers').html(data).fadeIn()}
        });
    });
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