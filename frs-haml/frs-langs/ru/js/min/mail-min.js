$("#send").click(function(){alert()}),jQuery(document).ready(function($){$("#myform").submit(function(){var e=$(this).serialize();return $.ajax({type:"POST",url:"mail/sender.php",data:e,success:function(e){""===e||($("#em").val(""),$("#sb").val(""),$("#feed").val(""),$("#send").prop("disabled",!0),$("#send").addClass("disable"),$(".thk").fadeIn(0),$(".thk").addClass("slideDown2"),setTimeout(function(){$(".thk").fadeOut(800)},2e3),setTimeout(function(){$(".thk").removeClass("slideDown2")},2801))}}),!1})});