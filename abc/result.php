<?php   
	
	$score = $_POST['score'];
	
	
	$robot = rand(1,3);
	
	$player_a = $_POST['player_a'];
	$player_b = $_POST['player_b'];
	
	$res_a = $_POST['player_a_object'];
	//$res_b = $_POST['player_b_object'];
	$res_b = $robot;
	
	if($res_a == '1'){
		$object_a = 'Stone';
	}
	else if($res_a == '2'){
		$object_a = 'Paper';
	}
	else{
		$object_a = 'Scissors';
	}
	
	if($res_b == '1'){
		$object_b = 'Stone';
	}
	else if($res_b == '2'){
		$object_b = 'Paper';
	}
	else{
		$object_b = 'Scissors';
	}
	
	
	//////////// if stone
	if($object_a == 'Stone'){
	
	
	   if($res_a == '1' && $res_b == '1'){
		  echo $player_a .' choose '. $object_a .'<br>';
		  echo $player_b .' choose '. $object_b .'<hr>';
		  echo 'And its tie!';
       }
       else if($res_a == '1' && $res_b == '2'){
		  echo $player_a .' choose '. $object_a .'<br>';
		  echo $player_b .' choose '. $object_b .'<hr>';
		  echo 'And you Lose!';
		  $point = -1;       
		  }
       else{
		  echo $player_a .' choose '. $object_a .'<br>';
		  echo $player_b .' choose '. $object_b .'<hr>';
		  echo 'And you Win!';
		  $point = 1;          
		  }
    
    }
    ///////////////
    
    //////////// if paper
	else if($object_a == 'Paper'){
	
	
	   if($res_a == '2' && $res_b == '1'){
		  echo $player_a .' choose '. $object_a .'<br>';
		  echo $player_b .' choose '. $object_b .'<hr>';
		  echo 'And you win!';
		  $point = 1;       
		  }
       else if($res_a == '2' && $res_b == '2'){
		  echo $player_a .' choose '. $object_a .'<br>';
		  echo $player_b .' choose '. $object_b .'<hr>';
		  echo 'And its tie!';
		  $point = 0;       
		  }
       else{
		  echo $player_a .' choose '. $object_a .'<br>';
		  echo $player_b .' choose '. $object_b .'<hr>';
		  echo 'And you lose!';
		  $point = -1;          
		  }
    
    }
    ///////////////
    
    
    
    //////////// if scissors
	else{
	
	
	   if($res_a == '3' && $res_b == '1'){
		  echo $player_a .' choose '. $object_a .'<br>';
		  echo $player_b .' choose '. $object_b .'<hr>';
		  echo 'And you lose!';
		  $point = -1;       
		  }
       else if($res_a == '3' && $res_b == '2'){
		  echo $player_a .' choose '. $object_a .'<br>';
		  echo $player_b .' choose '. $object_b .'<hr>';
		  echo 'And you win!';
		  $point = 1;      
		  }
       else{
		  echo $player_a .' choose '. $object_a .'<br>';
		  echo $player_b .' choose '. $object_b .'<hr>';
		  echo 'And its tie!';
		  $point = 0;
		  }
    
    }
    ///////////////
    
    
     $total = $score + $point; 
    if($total > 0){
	   
	    echo '<div id="ppp" style="font-size: 40px;">'.$total.'</div>';   
	    }else{$total = 0;
		    echo '<div id="ppp" style="font-size: 40px; display:none;">'.$total.'</div>'; 
		    echo '<div style="font-size: 40px; ">Tie!</div>';
		    	    }
    
    
    
    
    
?>

