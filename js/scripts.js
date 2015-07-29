/**
 * Created by Daniel on 7/10/2015.
 */

jQuery(document).ready(function(){
    var browserWidth=$(window).width();
    var browserHeight=$(window).height();
    /*if(browserWidth<767){
        document.location = "m.index.html";
    }*/
    var date = new Date(2015, 9, 21);
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

    var enter=$('.enter');


    var pole=$('#flag-pole');
    var slideshow=$('#slideshow');
    if(browserWidth<757){
        enter.css({
            'width':50+'%',
            'top':(browserHeight *.6) +'px',
            'left':(browserWidth *.07)+'px'
        });
        slideshow.css({
            'width':(browserWidth *.3)+'px',
            'height':'auto',
            'top':(browserHeight *.6) +'px',
            'left':(browserWidth *.15)+'px'
        });
        pole.css({
            'width':50+'%',
            'top':(browserHeight *.6) +'px',
            'left':(browserWidth *.07)+'px'
        });
    }
    else{
        enter.css({
            'top':(browserHeight *.25) +'px',
            'left':(browserWidth *.4)+'px'
        });
        slideshow.css({
            'top':(browserHeight *.25) +'px',
            'left':(browserWidth *.2)+'px'
        });
        pole.css({
            'top':(browserHeight *.05999999) +'px',
            'left':(browserWidth *.3)+'px'
        });
    }


    enter.on('click',function(){
        pole.animate({
            'left':-70+ '%',
            'top':-90+ '%',
            'height':(browserHeight*4.5) +'px'
        },'medium');
        slideshow.fadeOut('fast');
        pole.fadeOut('fast');
        enter.fadeOut('fast');
        setTimeout(function(){
            $('body').animate({
                backgroundColor:' rgb(250,226,45)'
            },'slow');
            $('.main').fadeIn('slow');
        },1000);
    });
}
