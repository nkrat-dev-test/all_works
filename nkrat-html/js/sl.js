


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