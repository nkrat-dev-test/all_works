
<!DOCTYPE html>
<html>
<head>
<title>New Site</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="description" content=""> 
<meta name="keywords" content=""> 
<meta name="viewport" content="width=device-width"  >
<meta name="viewport" content="initial-scale=1.0, user-scalable=no" />

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
</head>
<body>







		
	


<form method="post" id="game"  action="result.php">
	
	<input type="text" placeholder="player A" name="player_a">
	<input type="text" placeholder="player B" name="player_b" value="Robot" hidden>
	<hr>
	
	<input type="radio" id="ch1" name="player_a_object" value="1"> - stone
	<input type="radio" id="ch2" name="player_a_object" value="2"> - paper
	<input type="radio" id="ch3" name="player_a_object" value="3"> - scissors

    <!--<h3>Player B</h3>
	<input type="radio" name="player_b_object" value="1"> - stone
	<input type="radio" name="player_b_object" value="2"> - paper
	<input type="radio" name="player_b_object" value="3"> - scissors-->

    	
	<!--<button type="submit" id="submit">submit</button>-->
	<input type="text" id="score" name="score" value="0" hidden>
</form>
<div id="result" style="margin-top: 100px;"></div>



<script>
    $("#ch1, #ch2, #ch3").on("change", function() {
    var $form = $("#game");
    $.ajax({
        url: $form.attr("action"),
        data: $form.serialize(),
        type: $form.attr("method"),
        success: function(response) {
            $('#result').html(response);
            $("#ch1, #ch2, #ch3").prop('checked', false); 
            var newval = document.getElementById("ppp").innerHTML; 
            $('#score').val(newval);       
            
            }
    });
});
</script>

	
 </body>
 </html>