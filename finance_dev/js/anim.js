


$('.looper').looper({
    interval: 3500,
    speed:1000
});
	 
	 
	 
	 $(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
       
        
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
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
    $('#nav a').each(function () {
	   
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#nav ul li a').removeClass("active");
            currLink.addClass("active");
            
        }
        else{
            currLink.removeClass("active");
            
        }
    });
}  





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
    var rmarker = $('.m1');

    $(window).scroll(function () {
        var y = $(this).scrollTop();
        var z = $('.m1').offset().top;

        if (y >= z) {
	        
setTimeout(function(){
  $('.p6').addClass('slideDown2');
}, 200);	         



setTimeout(function(){
  $('.p5').addClass('slideUp2');
}, 400);
setTimeout(function(){
  $('.p4').addClass('slideDown2');
}, 400);
setTimeout(function(){
  $('.p3').addClass('slideUp2');
}, 800);
setTimeout(function(){
  $('.p1').addClass('animated zoomInDown');
  $('.p2').addClass('animated zoomInDown');
}, 1000);
 
 $('#t1').addClass('animated fadeInUp');       
        
        }
        
    });
    });



$(document).ready(function () {
    var rmarker = $('.m2');

    $(window).scroll(function () {
        var y = $(this).scrollTop();
        var z = $('.m2').offset().top;

        if (y >= z) {
	        
	    //graphs
setTimeout(function(){
  $('.g2').addClass('slideUp2');
}, 200);

setTimeout(function(){
  $('.g3').addClass('slideUp2');
}, 600);

setTimeout(function(){
  $('.g4').addClass('slideUp2');
}, 400);

setTimeout(function(){
  $('.g5').addClass('slideUp2');
}, 800);

setTimeout(function(){
  $('.g1').addClass('stretchRight');
}, 1300);
     

 
 $('#t2').addClass('animated fadeInUp');       
        
        }
        
    });
    });



$(document).ready(function () {
    var rmarker = $('.m3');

    $(window).scroll(function () {
        var y = $(this).scrollTop();
        var z = $('.m3').offset().top;

        if (y >= z) {

     

 
 $('#t3').addClass('animated fadeInUp');
 setTimeout(function(){
    $('.schemes').addClass('animated fadeInUp'); 
}, 400); 
     
        
        }
        
    });
    });
    

    
    
    
    
    $(document).ready(function () {
    var rmarker = $('.m4');

    $(window).scroll(function () {
        var y = $(this).scrollTop();
        var z = $('.m4').offset().top;

        if (y >= z) {


     
setTimeout(function(){
   $('#t4').addClass('animated zoomIn');
}, 400);

 
  $('#t5').addClass('animated flipInY'); 
   $('#t6').addClass('animated flipInY');  
        
        
        }
        
    });
    });


    $(document).ready(function () {
    var rmarker = $('.m5');

    $(window).scroll(function () {
        var y = $(this).scrollTop();
        var z = $('.m5').offset().top;

        if (y >= z) {

setTimeout(function(){
  $('#t8').addClass('animated fadeInDown'); 
}, 400);
  $('#t7').addClass('animated fadeInDown'); 
  
  setTimeout(function(){
  $('#rb').addClass('animated flipInY'); 
}, 1500);
  
   
     
//city
setTimeout(function(){
  $('.sep').addClass('slideUp2');
}, 700);
$('.summer_sky').addClass('slideUp2');


        
        
        }
        
    });
    });


    $(document).ready(function () {
    var rmarker = $('.m6');

    $(window).scroll(function () {
        var y = $(this).scrollTop();
        var z = $('.m6').offset().top;

        if (y >= z) {

setTimeout(function(){
$('.flag').addClass('animated zoomInDown');

}, 0);


        
        
        }
        
    });
    });
    
    
    
    
$(document).ready(function () {
    var rmarker = $('.m7');

    $(window).scroll(function () {
        var y = $(this).scrollTop();
        var z = $('.m7').offset().top;

        if (y >= z) {

     

 
 $('#t8').addClass('slideUp2');
 $('#t9').addClass('animated fadeInUp');
     
        
        }
        
    });
    });
    
    
    
    
    
    
    
    
        $(document).ready(function () {
    var rmarker = $('.ms');

    $(window).scroll(function () {
        var y = $(this).scrollTop();
        var z = $('.ms').offset().top;

        if (y >= z) {


     
setTimeout(function(){
   $('#i1').addClass('animated flipInY');
}, 1000);
setTimeout(function(){
   $('#i2').addClass('animated flipInY');
}, 1500);
 setTimeout(function(){
   $('#i3').addClass('animated flipInY');
}, 2000);
setTimeout(function(){
   $('#i4').addClass('animated flipInY');
}, 2500);
        
        
        }
        
    });
    });



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


$(".regio_btn").click(function() {
	 $('.popup').removeClass('off');
	 $('.popup').addClass('pop_color');  
	  $('.popup').addClass('animated fadeInDown'); 
	  $('.big_hero-3').removeClass('off');
	  setTimeout(function(){
//$('body').addClass('noflow'); 
}, 800); 
	     
});


$(".imp").click(function() {
	 $('.popup').removeClass('off');
	 //$('.popup').addClass('pop_color');  
	  $('.popup').addClass('animated fadeInDown'); 
	  $('.big_hero-4').removeClass('off');
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






