/**
 * Created by Daniel on 7/10/2015.
 */

jQuery(document).ready(function(){
    var browserWidth=$(window).width();
    var browserHeight=$(window).height();
    /*if(browserWidth<767){
        document.location = "m.index.html";
    }*/
    var date = new Date(2015, 8, 21);
    var now = new Date();
    var diff = (date.getTime()/1000) - (now.getTime()/1000);
    var clock = $('.clock').FlipClock(diff,{
    clockFace: 'DailyCounter',
    countdown: true}
    );

    animation();

});

function animation(){
    var browserWidth=$(window).width();
    var browserHeight=$(window).height();
    var images=$('.images');
    var x=$('#bbash');
    responsiveImg();
    $('#twok15').css({
        'top':(browserHeight *.75)+'px',
        'left':(browserWidth *.3)+'px'
    });
    $('.clickable').on('click',function(){
        $('.intro').fadeOut();
        setTimeout(function(){
            $('.main').fadeIn(1000);
        },1000);
    });
    x.on('click',function(){
        responsiveImg();
        $('.main').fadeOut();
        $('.intro').fadeIn();
    });
}

function responsiveImg(){
    var browserWidth=$(window).width();
    var browserHeight=$(window).height();
    var images=$('.images');
    var x=$('#x');
    $('#twok15').css({
        'display':"none"
    });
    $('#black-flag').css({
        display:'none'
    });
    $('#tap').css({
         display:'none',
        'z-index':'10'
        });

    if(browserWidth<800){
        $.ajax('mobilelogos',{
           success: function(response){
               $('.mobileLogo').html(response);
           }
        });
        $('#bbash').css({
            'left':(browserWidth*.37) +'px',
            'width':(browserWidth*.3)+'px'
        });
        x.css({
            'right':"40px"
        });
        $('#tap').css({
            'top':(browserHeight *.35)+'px'
        });

        images.css({
            'width':(browserWidth *.7)+'px',
            'top':(browserHeight *.3)+'px',
            'left':(browserWidth *.15)+'px'
        });
        $('#black-flag').css({
            'width':(browserWidth *.7)+'px',
            'left':(browserWidth *.15)+'px',
            'top':(browserHeight *.02)+'px'
        });
        $('#click').css({
            'display':'none'
        });
        $('.images').delay(500).fadeIn();
        setTimeout(function(){
            $('#white-flag').animate({
                'top':(browserHeight *.02)+'px'
            },1500, function(){
                $('#black-flag').fadeIn();
                $('#white-flag').fadeOut();
            });
            $('#slideshow').animate({
                'top':(browserHeight *.5)+'px'
            },1500, function(){
                $('#tap').fadeIn();
            });
        },3000);
    }
    else{
        $.ajax('logos.html',{
            success: function(response){
                $('.logoPlacement').html(response);
            }
        });
        $('#bbash').css({
            'left':(browserWidth*.44) +'px',
            'width':(browserWidth*.1)+'px'
        });
        x.css({
            'right':"40px"
        });
        images.css({
            'width':(browserWidth *.4)+'px',
            'top':(browserHeight *.1)+'px',
            'left':(browserWidth *.33)+'px',
        });
        $('#black-flag').css({
            'width':(browserWidth *.4)+'px',
            'top':(browserHeight *.15)+'px',
            'left':(browserWidth *.58)+'px'
        });
        $('#click').css({
            'width':(browserWidth *.4)+'px',
            'top':(browserHeight *.05)+'px',
            'left':(browserWidth *.58),
            'display':'none'
        });
        $('.images').delay(500).fadeIn();
        setTimeout(function(){
            $('#white-flag').animate({
                'top':(browserHeight *.15)+'px',
                'left':(browserWidth *.58)+'px'
            },1500, function(){
                $('#twok15').fadeIn();
                $('#click').fadeIn();
                $('#black-flag').fadeIn();
                $('#white-flag').fadeOut();
            });
            $('#slideshow').animate({
                'top':(browserHeight *.03)+'px',
                'left':(browserWidth *.02)+'px'
            },1500);
        },2000);
    }
}
