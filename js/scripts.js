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
    var logo= $("#logo");
    logo.css({
        'width':(browserWidth *.4)+'px'
    });
    if(browserWidth<757){
        $('#clicker').css({
            'width':browserWidth+'px'
        });
    }
    else{
        $('#clicker').css({
            'width':browserWidth *.4+'px'
        });
    }
    logo.on('click',function(){
        $('.intro').fadeOut();
        setTimeout(function(){
            $('.main').fadeIn('slow');
        },1000);
    });
}
