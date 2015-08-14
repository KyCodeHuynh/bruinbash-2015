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
    images.on('click',function(){
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
    $('#tap').css({
         display:'none',
        width:'100%',
        'z-index':'10'
        });

    if(browserWidth<757){
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
            'top':(browserHeight *.4)+'px',
            'left':(browserWidth *.25)
        });

        images.css({
            'width':(browserWidth *.7)+'px',
            'top':(browserHeight *.4)+'px',
            'left':(browserWidth *.15)+'px'
        });
        $('#click').css({
            'display':'none'
        });
        setTimeout(function(){
            $('#flag').animate({
                'top':(browserHeight *.02)+'px'
            },1500);
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
        $('#click').css({
            'width':(browserWidth *.4)+'px',
            'top':(browserHeight *.85)+'px',
            'left':(browserWidth *.59),
            'display':'none'
        });
        images.css({
            'width':(browserWidth *.3)+'px',
            'top':(browserHeight *.15)+'px',
            'left':(browserWidth *.35)+'px'
        });
        $('#black-flag').css({
            'top':(browserHeight *.20)+'px',
            'left':(browserWidth *.68)+'px'
        });
        $('#click').css({
            'display':'none'
        });
        setTimeout(function(){
            $('#white-flag').animate({
                'top':(browserHeight *.20)+'px',
                'left':(browserWidth *.68)+'px'
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
