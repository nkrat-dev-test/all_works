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





      
      

    
    
    










    
      $(document).ready(function () {
    var rmarker = $('#m6');

    $(window).scroll(function () {
        var y = $(this).scrollTop();
        var z = $('#m6').offset().top;

        if (y >= z) {


       
        
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



$('.prop_sel2').click( function(){
	    $('.prop_sel1').removeClass('pressed');
	    $(this).addClass('pressed');
	    $("#p1").fadeOut(0);
	    $("#p2").fadeIn(0);
	    
});

$('.prop_sel1').click( function(){
	    $('.prop_sel2').removeClass('pressed');
	    $(this).addClass('pressed');
	    $("#p2").fadeOut(0);
	    $("#p1").fadeIn(0);
	    
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
   
     