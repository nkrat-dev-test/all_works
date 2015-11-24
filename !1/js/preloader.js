$(window).on('load', function () {
    var $preloader = $('#preloader'),
        $spinner   = $preloader.find('.spinner');
        setTimeout(function(){
var start = new Vivus('start-graphics', {type: 'async', file:'images/anims/start.svg',  duration: 290, start: 'inViewport', forceRender: false, animTimingFunction: Vivus.LINEAR, pathTimingFunction:Vivus.EASE_OUT});


var fingerprint = new Vivus('fingerprint', {type: 'delayed', file:'images/anims/print.svg',  duration: 190, start: 'inViewport', forceRender: false, animTimingFunction: Vivus.LINEAR, pathTimingFunction:Vivus.EASE_OUT});


var console = new Vivus('console', {type: 'oneByOne', file:'images/anims/console2.svg',  duration: 350, start: 'inViewport', forceRender: false, animTimingFunction: Vivus.LINEAR, pathTimingFunction:Vivus.EASE_OUT});  
}, 2200);



setTimeout(function(){
$spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
}, 2200);


        
    
    
    

    
    
});