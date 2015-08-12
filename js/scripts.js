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
    var x=$('#x');
    $('#twok15').css({
        'top':(browserHeight *.75)+'px',
        'left':(browserWidth *.3)+'px'
    });
    /*$('#cac').css({
        'left':(browserWidth *.73)+'px'
    });*/
    responsiveImg();
    images.on('click',function(){
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
                    $('.main').html();
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
    $('#click').css({
         'display':'none'
        });
    $('#first-gif').fadeIn();

    if(browserWidth<757){
        $('#first-gif').css({
            'width':(browserWidth *.7)+'px',
            'top':(browserHeight *.4)+'px',
            'left':(browserWidth *.15)+'px'
        });
        x.css({
            'right':"40px"
        });
        images.css({
            'width':(browserWidth *.7)+'px',
            'top':(browserHeight *.4)+'px',
            'left':(browserWidth *.15)+'px'
        });
        $('#click').css({
            'width':(browserWidth *.4)+'px',
            'top':(browserHeight *.05)+'px',
            'left':(browserWidth *.59)
        });
        setTimeout(function(){
            images.fadeIn('fast');
            $('#click').css({
                'display':'none'
            });
            setTimeout(function(){
                $('#first-gif').fadeOut('fast');
                $('#flag').animate({
                    'top':(browserHeight *.02)+'px'
                },1500);
                $('#slideshow').animate({
                    'top':(browserHeight *.5)+'px'
                },1500, function(){
                    $('#click').fadeIn();
                });
            },2000);
        },1000);

    }
    else{
        $('#first-gif').css({
            'width':(browserWidth *.4)+'px',
            'top':(browserHeight *.1)+'px',
            'left':(browserWidth *.3)+'px'
        });
        x.css({
            'right':"40px"
        });
        images.css({
            'width':(browserWidth *.4)+'px',
            'top':(browserHeight *.1)+'px',
            'left':(browserWidth *.3)+'px'
        });

        $('#click').css({
            'width':(browserWidth *.4)+'px',
            'top':(browserHeight *.05)+'px',
            'left':(browserWidth *.59),
            'display':'none'
        });
        setTimeout(function(){
            images.fadeIn('medium');
            $('#click').css({
                'display':'none'
            });
            setTimeout(function(){
                $('#first-gif').fadeOut('fast');
                $('#flag').animate({
                    'top':(browserHeight *.15)+'px',
                    'left':(browserWidth *.59)+'px'
                },1500, function(){
                    $('#twok15').fadeIn();
                    $('#click').fadeIn();
                });
                $('#slideshow').animate({
                    'top':(browserHeight *.03)+'px',
                    'left':(browserWidth *.02)+'px'
                },1500);
            },2000);

        },1000);

    }
}
