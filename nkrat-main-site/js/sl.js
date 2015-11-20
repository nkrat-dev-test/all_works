$("#sys-1").click(function(){
    $("div[id^='sys-']").fadeOut(500);
    $("#sys-2").fadeIn(500);
});

$("#sys-2").click(function(){
    $("div[id^='sys-']").fadeOut(500);
    $("#sys-3").fadeIn(500);
});

$("#sys-3").click(function(){
    $("div[id^='sys-']").fadeOut(500);
    $("#sys-4").fadeIn(500);
});

$("#sys-4").click(function(){
    $("div[id^='sys-']").fadeOut(500);
    $("#sys-1").fadeIn(500);
});



//$('.flip').click(function(){
//        $(this).find('.card').addClass('flipped').mouseleave(function(){
//            $(this).removeClass('flipped');
//        });
//        return false;
//    });

$('.flip').click(function(){
	    $('.flip').find('.card').removeClass('flipped');
        $(this).find('.card').addClass('flipped');
        return true;
    });


var start = new Vivus('start-graphics', {type: 'async', file:'images/anims/start.svg',  duration: 290, start: 'inViewport', forceRender: false, animTimingFunction: Vivus.LINEAR, pathTimingFunction:Vivus.EASE_OUT});

var fingerprint = new Vivus('fingerprint', {type: 'delayed', file:'images/anims/print.svg',  duration: 190, start: 'inViewport', forceRender: false, animTimingFunction: Vivus.LINEAR, pathTimingFunction:Vivus.EASE_OUT});

var console = new Vivus('console', {type: 'oneByOne', file:'images/anims/console2.svg',  duration: 350, start: 'inViewport', forceRender: false, animTimingFunction: Vivus.LINEAR, pathTimingFunction:Vivus.EASE_OUT});

//var service1 = new Vivus('service1', {type: 'delayed', file:'../../images/anims/service1.svg',  duration: 350, start: 'inViewport', forceRender: false, animTimingFunction: Vivus.LINEAR, pathTimingFunction:Vivus.EASE_OUT});



$(document).ready(function () {
    var rmarker = $('.app-n-bg2');

    $(window).scroll(function () {
        var y = $(this).scrollTop();
        var z = $('.app-n-bg2').offset().top;

        if (y >= z) {
	        
	        
	       $('.screen_off').fadeOut(700); 
	        	        
	        

           }
        
    });
    });  