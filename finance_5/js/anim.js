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




$(".mobnav").on("tap",function(eventmenu1){
        eventmenu1.stopPropagation();
        $('.nav').toggleClass('slideInDown');
}); 

$('html').on("tap",function(){
        $('.nav').toggleClass('slideInDown');
}); 
      
      
    $('.mobnav').click( function(eventmenu2){
        eventmenu2.stopPropagation();
        $('.nav').toggleClass('show');
        
 setTimeout(function(){
  $('.nav').toggleClass('slideDown2');
}, 1);
        
        
        
        
    });

    $(document).click( function(){
        $('.nav').removeClass('slideDown2');
        $('.nav').removeClass('show');
        
    });  
