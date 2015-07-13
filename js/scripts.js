/**
 * Created by Daniel on 7/10/2015.
 */

jQuery(document).ready(function(){
    var date = new Date(2015, 9, 21);
    var now = new Date();
    var diff = (date.getTime()/1000) - (now.getTime()/1000);
    var clock = $('.clock').FlipClock(diff,{
    clockFace: 'DailyCounter',
    countdown: true}
    );
    var browserHeight=$(window).height()-20;
    $(".slideshow-img").css({'height':browserHeight + "px"});
    var pole=$('#flag-pole');
    var bbash=$('.bbash');
    setTimeout(function(){
        $('.temp-buffer').fadeOut();
        bbash.fadeIn('slow');
    }, 5000);

});
