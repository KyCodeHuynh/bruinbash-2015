/**
 * Created by Daniel on 7/10/2015.
 */

jQuery(document).ready(function(){
    var browserWidth=$(window).width();
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


    var pole=$('#flag-pole');
    var bbash=$('.bbash');
    setTimeout(function(){
        $('.temp-buffer').css({"display":"none"});
        $('.sm-temp-buffer').css({"display":"none"});
        bbash.fadeIn('slow');
    }, 6000);

});
