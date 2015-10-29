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
 
 

    
    


















$(document).ready(function () {
    var rmarker = $('#m1');

    $(window).scroll(function () {
        var y = $(this).scrollTop();
        var z = $('#m1').offset().top;

        if (y >= z) {
	        
setTimeout(function(){
  $('.pin6').addClass('slideDown2');
}, 200);	         



setTimeout(function(){
  $('.pin5').addClass('slideUp2');
}, 400);
setTimeout(function(){
  $('.pin4').addClass('slideDown2');
}, 400);
setTimeout(function(){
  $('.pin3').addClass('slideDown2');
}, 800);
setTimeout(function(){
  $('.pin1').addClass('animated zoomInDown');
  $('.pin2').addClass('animated zoomInDown');
}, 1000);

setTimeout(function(){
   $('#t1').addClass('animated fadeInUp');
}, 700); 
       
        
        }
        
    });
    });    
     






$(document).ready(function () {
    var rmarker = $('#m2');

    $(window).scroll(function () {
        var y = $(this).scrollTop();
        var z = $('#m2').offset().top;

        if (y >= z) {

setTimeout(function(){
   $('.g1').addClass('animated fadeInUp');
}, 300); 
setTimeout(function(){
   $('.g2').addClass('animated fadeInUp');
}, 800);

setTimeout(function(){
   $('.g3').addClass('animated fadeInUp');
}, 500); 
	        
setTimeout(function(){
   $('.g4').addClass('animated fadeInUp');
}, 1200); 

setTimeout(function(){
   $('.g5').addClass('animated fadeInLeft');
}, 1700);

setTimeout(function(){
   $('#t2').addClass('animated fadeInUp');
}, 300); 
       
        
        }
        
    });
    });    
    
    
    
    
    
    
  $(document).ready(function () {
    var rmarker = $('#m3');

    $(window).scroll(function () {
        var y = $(this).scrollTop();
        var z = $('#m3').offset().top;

        if (y >= z) {

setTimeout(function(){
   $('#t3').addClass('animated fadeInUp');
}, 300); 

       
        
        }
        
    });
    });      
     
     
     
     
     
     $(document).ready(function () {
    var rmarker = $('#m4');

    $(window).scroll(function () {
        var y = $(this).scrollTop();
        var z = $('#m4').offset().top;

        if (y >= z) {

setTimeout(function(){
   $('#t5').addClass('animated flipInY');
}, 300); 

setTimeout(function(){
   $('#t6').addClass('animated flipInY');
}, 500);

setTimeout(function(){
   $('#t7').addClass('animated flipInY');
}, 800);

setTimeout(function(){
   $('#t8').addClass('animated flipInY');
}, 1100);

       
        
        }
        
    });
    });      
     
     
     
     
     
      $(document).ready(function () {
    var rmarker = $('#m5');

    $(window).scroll(function () {
        var y = $(this).scrollTop();
        var z = $('#m5').offset().top;

        if (y >= z) {

setTimeout(function(){
   $('#t9').addClass('animated fadeInUp');
}, 300); 

setTimeout(function(){
   $('#t10').addClass('animated fadeInUp');
}, 500);

setTimeout(function(){
   $('#t11').addClass('animated flipInY');
}, 800);

       
        
        }
        
    });
    });      
    
    
      $(document).ready(function () {
    var rmarker = $('#m6');

    $(window).scroll(function () {
        var y = $(this).scrollTop();
        var z = $('#m6').offset().top;

        if (y >= z) {

setTimeout(function(){
   $('#t12').addClass('animated zoomInUp');
}, 300); 

setTimeout(function(){
   $('#t13').addClass('animated zoomInUp');
}, 500);

setTimeout(function(){
   $('#t14').addClass('animated zoomInUp');
}, 800);

       
        
        }
        
    });
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


$("#sch1").click(function() {
	 $('.popup').removeClass('off'); 
	  $('.popup').addClass('animated fadeInDown'); 
	  $('.big_hero-1').removeClass('off');
	  setTimeout(function(){
//$('body').addClass('noflow'); 
}, 800); 
	     
});

$("#sch2").click(function() {
	 $('.popup').removeClass('off'); 
	  $('.popup').addClass('animated fadeInDown'); 
	  $('.big_hero-2').removeClass('off');
	  setTimeout(function(){
//$('body').addClass('noflow'); 
}, 800); 
	     
});


$(".ex_btn").click(function() {
	 $('.popup').removeClass('off');
	 $('.popup').addClass('pop_color');  
	  $('.popup').addClass('animated fadeInDown'); 
	  $('.big_hero-3').removeClass('off');
	  setTimeout(function(){
//$('body').addClass('noflow'); 
}, 800); 
	     
});




$("#close").click(function() {
//$('body').removeClass('noflow');	  
$('.popup').addClass('animated fadeOutUp');
setTimeout(function(){
 $('.popup').removeClass('animated fadeInDown'); 
 $('.popup').removeClass('animated fadeOutUp'); 
 $('.popup').addClass('off'); 
 $('.popup').removeClass('pop_color');
  $('.big_hero-1').addClass('off'); 
  $('.big_hero-2').addClass('off'); 
  $('.big_hero-3').addClass('off');
  $('.big_hero-4').addClass('off');
}, 400); 
});

$("#close_mob").click(function() {
//$('body').removeClass('noflow');	  
$('.popup').addClass('animated fadeOutUp');
setTimeout(function(){
 $('.popup').removeClass('animated fadeInDown'); 
 $('.popup').removeClass('animated fadeOutUp'); 
 $('.popup').addClass('off'); 
 $('.popup').removeClass('pop_color');
  $('.big_hero-1').addClass('off'); 
  $('.big_hero-2').addClass('off'); 
  $('.big_hero-3').addClass('off');
  $('.big_hero-4').addClass('off');
}, 400); 
});






   
     