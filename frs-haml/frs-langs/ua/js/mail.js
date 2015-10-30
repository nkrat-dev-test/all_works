$('#send').click(function(){
	alert();
});


jQuery(document).ready(function($) {
$("#myform").submit(function() {
var str = $(this).serialize();
$.ajax({
type: "POST",
url: "mail/sender.php",
data: str,
success: function(msg) {
	if(msg === ''){
	}
	else{
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
	}
}
});
return false;
});
});
