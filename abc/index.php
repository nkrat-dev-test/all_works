
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







		
	

<h1><time>00:00:00</time></h1>
<form method="post" id="game"  action="result.php">
	
	<input type="text" id="player" placeholder="enter name and choose" name="player_a">
	<input type="text" placeholder="player B" name="player_b" value="Robot" hidden>
	<hr>
	
	<div id="ctrl" style="display: none;">
	<input type="radio" id="ch1" name="player_a_object" value="1"> - stone
	<input type="radio" id="ch2" name="player_a_object" value="2"> - paper
	<input type="radio" id="ch3" name="player_a_object" value="3"> - scissors
	</div>

    <!--<h3>Player B</h3>
	<input type="radio" name="player_b_object" value="1"> - stone
	<input type="radio" name="player_b_object" value="2"> - paper
	<input type="radio" name="player_b_object" value="3"> - scissors-->

    	
	<!--<button type="submit" id="submit">submit</button>-->
	<input type="text" id="score" name="score" value="0" hidden>
</form>
<div id="result" style="margin-top: 100px;"></div>



<button id="start" style="font-size: 40px; display:none;">start</button>
<button id="stop" style="font-size: 40px; display:none;">stop</button>
<button id="clear" style="font-size: 40px; display:none;">clear</button>


<script>
   



var h1 = document.getElementsByTagName('h1')[0],
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    clear = document.getElementById('clear'),
    seconds = 0, minutes = 0, hours = 0,
    t;

function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    
h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}
//timer();


/* Start button */
start.onclick = timer;

/* Stop button */
stop.onclick = function() {
    clearTimeout(t);
}

/* Clear button */
clear.onclick = function() {
    h1.textContent = "00:00:00";
    seconds = 0; minutes = 0; hours = 0;
}


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
            if(newval >= 10){
	         clearTimeout(t); 
	           var el = document.getElementById('ctrl');
  el.style.display = "none";            
  } 
            //
                
            
            }
    });
});


 $("#player").on("change", function() {
  var el = document.getElementById('ctrl');
  el.style.display = "block";
  timer();  
});

</script>

	
 </body>
 </html>