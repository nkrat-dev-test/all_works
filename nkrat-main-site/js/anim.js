$('.mobnav').click( function(menu){
        menu.stopPropagation();
        $('.nav').toggleClass('show');
       $('.langs').removeClass('flipInX');
        $('.langs').removeClass('show');
         $('.langs').removeClass('animated');
        
 setTimeout(function(){
  $('.nav').addClass('animated flipInX');
}, 1);
    });
$(document).click( function(){
	    $('.nav').removeClass('animated');
	    $('.nav').removeClass('flipInX');
        $('.nav').removeClass('show');
        
        
    }); 
        
    
 
 
 
 $('.langnav').click( function(langmenu){
        langmenu.stopPropagation();
        $('.langs').toggleClass('show');
        $('.nav').removeClass('show');
        $('.nav').removeClass('flipInX');
        $('.nav').removeClass('animated');
        
 setTimeout(function(){
  $('.langs').addClass('animated flipInX');
}, 1);
    });
$(document).click( function(){
	    $('.langs').removeClass('animated');
	    $('.langs').removeClass('flipInX');
        $('.langs').removeClass('show');
        
        
    });
 
 
 
 
 
 
 
 
 
 
 $("header").headroom({
   "offset": 205,
   "tolerance": 5,
   "classes": {
     "initial": "animated",
     "pinned": "slideInDown",
     "unpinned": "slideOutUp"
   }
 });
 
 // to destroy
 $("#header").headroom("destroy");








$(function() {
      $('#slides').superslides({
        hashchange: false,
        animation: 'fade',
        play: 2500
      });

      $('#slides').on('mouseenter', function() {
        $(this).superslides('stop');
        console.log('Stopped')
      });
      $('#slides').on('mouseleave', function() {
        $(this).superslides('start');
        console.log('Started')
      });
    });
    
    
    

 
 //pin
 
 
 
 
	 $(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
       
        
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        });
        $(this).addClass('active');
      
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+0
        }, 500, 'swing', function () {
            window.location.hash = '';
            $(document).on("scroll", onScroll);
        
        
        });
        
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.nav a').each(function () {
	   
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.nav ul li a').removeClass("active");
            currLink.addClass("active");
            
        }
        else{
            currLink.removeClass("active");
            
        }
    });
} 





      
      

    
    
    










    
//    $(document).ready(function () {
//    var rmarker = $('.for_parallax');

//    $(window).scroll(function () {
//        var y = $(this).scrollTop();
//        var z = $('.for_parallax').offset().top;

//        if (y >= z) {
	        
	        
	        
	        	        
	        

//           }
        
//    });
//    });  
    
    
        
    



$("#sch1").click(function() {
	 $('.popup').removeClass('off'); 
	  $('.popup').addClass('animated fadeInDown'); 
	  $('.big_hero-1').removeClass('off');
	  setTimeout(function(){
//$('body').addClass('noflow'); 
}, 800); 
	     
});








  $("#send").prop('disabled', true);   
  function check() {
  //var phone = $.trim($("#ph").val());
  var email = $.trim($("#em").val());
  var subj = $.trim($("#sb").val());
  
  if( email.length && subj.length >0) {
    $("#send").prop('disabled', false);
    $("#send").removeClass('disable');
  } else {
    $("#send").prop('disabled', true);
    $("#send").addClass('disable');
  }
} 




/**
 * @fileoverview dragscroll - scroll area by dragging
 * @version 0.0.5
 * 
 * @license MIT, see http://github.com/asvd/intence
 * @copyright 2015 asvd <heliosframework@gmail.com> 
 */


(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['exports'], factory);
    } else if (typeof exports !== 'undefined') {
        factory(exports);
    } else {
        factory((root.dragscroll = {}));
    }
}(this, function (exports) {
    var _window = window;
    var _document = document;
    var mousemove = 'mousemove';
    var mouseup = 'mouseup';
    var mousedown = 'mousedown';
    var EventListener = 'EventListener';
    var addEventListener = 'add'+EventListener;
    var removeEventListener = 'remove'+EventListener;

    var dragged = [];
    var reset = function(i, el) {
        for (i = 0; i < dragged.length;) {
            el = dragged[i++];
            el[removeEventListener](mousedown, el.md, 0);
            _window[removeEventListener](mouseup, el.mu, 0);
            _window[removeEventListener](mousemove, el.mm, 0);
        }

        dragged = _document.getElementsByClassName('all_story');
        for (i = 0; i < dragged.length;) {
            (function(el, lastClientX, lastClientY, pushed){
                el[addEventListener](
                    mousedown,
                    el.md = function(e) {
                        pushed = 1;
                        lastClientX = e.clientX;
                        lastClientY = e.clientY;

                        e.preventDefault();
                        e.stopPropagation();
                    }, 0
                );
                 
                 _window[addEventListener](
                     mouseup, el.mu = function() {pushed = 0;}, 0
                 );
                 
                _window[addEventListener](
                    mousemove,
                    el.mm = function(e, scroller) {
                        scroller = el.scroller||el;
                        if (pushed) {
                             scroller.scrollLeft -=
                                 (- lastClientX + (lastClientX=e.clientX));
                             scroller.scrollTop -=
                                 (- lastClientY + (lastClientY=e.clientY));
                        }
                    }, 0
                );
             })(dragged[i++]);
        }
    }

      
    if (_document.readyState == 'complete') {
        reset();
    } else {
        _window[addEventListener]('load', reset, 0);
    }

    exports.reset = reset;
}));

     