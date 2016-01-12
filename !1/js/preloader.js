$(window).on('load', function () {
    var $preloader = $('#preloader'),
        $spinner_a   = $preloader.find('#micro');
        $spinner_b   = $preloader.find('#micro1');
        $spinner_c   = $preloader.find('#micro2');
        setTimeout(function(){
/*var start = new Vivus('start-graphics', {type: 'async', file:'images/anims/start.svg',  duration: 290, start: 'inViewport', forceRender: false, animTimingFunction: Vivus.LINEAR, pathTimingFunction:Vivus.EASE_OUT});*/


var fingerprint = new Vivus('fingerprint', {type: 'delayed', file:'images/anims/print.svg',  duration: 190, start: 'inViewport', forceRender: false, animTimingFunction: Vivus.LINEAR, pathTimingFunction:Vivus.EASE_OUT});


/*var console = new Vivus('console', {type: 'oneByOne', file:'images/anims/console2.svg',  duration: 50, start: 'inViewport', forceRender: false, animTimingFunction: Vivus.LINEAR, pathTimingFunction:Vivus.EASE_OUT});  */



movie.pause();
}, 2200);



setTimeout(function(){
$spinner_a.fadeOut();
$spinner_b.delay(150).fadeOut();
$spinner_c.delay(350).fadeOut();
    $preloader.delay(350).fadeOut('slow');
    movie.load();
            
}, 2200);


        
    
    
    

    
    
});



$(document).ready(function() {
    var $window = $(window);
    

    function checkWidth() {
	    
	    var link1 = document.getElementById('link1');
        var link2 = document.getElementById('link2');
        var link3 = document.getElementById('link3');
        var link4 = document.getElementById('link4');
        var link5 = document.getElementById('link5');
	    
        var windowsize = $window.width();
        if (windowsize < 1024) {
           link1.href="#about-mob";
           link3.href="#tech-mob"; 
            
         }
         else{
	       link1.href='#about';
           link3.href='#tech';  
         }
    }
    
    checkWidth();
    $(window).resize(checkWidth);
});