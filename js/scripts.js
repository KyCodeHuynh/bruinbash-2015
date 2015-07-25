/**
 * Created by Daniel on 7/10/2015.
 */

jQuery(document).ready(function(){
    var browserWidth=$(window).width();
    var browserHeight=$(window).height();
    if(browserWidth<767){
        document.location = "m.index.html";
    }
    var date = new Date(2015, 9, 21);
    var now = new Date();
    var diff = (date.getTime()/1000) - (now.getTime()/1000);
    var clock = $('.clock').FlipClock(diff,{
    clockFace: 'DailyCounter',
    countdown: true}
    );
    var enter=$('.enter');
    enter.css({
        'top':(browserHeight *.25) +'px',
        'left':(browserWidth *.4)+'px'
    });

    var pole=$('#flag-pole');
    var slideshow=$('#slideshow');
    slideshow.css({
        'top':(browserHeight *.25) +'px',
        'left':(browserWidth *.2)+'px'
    });
    pole.css({
        'top':(browserHeight *.05999999) +'px',
        'left':(browserWidth *.3)+'px'
    });

    enter.on('click',function(){
        slideshow.fadeOut('fast');
        pole.fadeOut('fast');
        enter.fadeOut('fast');
       $('body').animate({
           backgroundColor:' rgb(250,226,45)'
       },'fast');
        $('.main').fadeIn('slow');
    });

});
