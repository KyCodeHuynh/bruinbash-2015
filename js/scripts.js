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
    var pole = $('#flag-pole');
    // General time-out function to execute <code> after specified delay
    setTimeout(function(){
        $('.flag-pole').fadeOut();
        setTimeout(function() {
            // Move flag to meet where the bar will be
            $('.flag-pole').css('height', '667px');
        }, 100)
        $('.temp-buffer').fadeOut();
        $('.bbash').fadeIn('slow');
        setTimeout(function() {
            $('.flag-pole').fadeIn('slow');
        }, 200)
    }, 4000);
});
