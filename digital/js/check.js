$(document).ready(function() { 
            $('#cform').ajaxForm(function() { 
	            //alert();
	            $("#em").val('');
	            $("#sb").val('');
	            $("#feed").val('');
	             $("#send").prop('disabled', true);
                 $("#send").addClass('disable');
	            $('.thk').fadeIn(0); 
                $('.thk').addClass('slideDown2');

setTimeout(function(){
$('.thk').fadeOut(800);
}, 2000); 
setTimeout(function(){
$('.thk').removeClass('slideDown2');
}, 2801); 
            }); 
        }); 