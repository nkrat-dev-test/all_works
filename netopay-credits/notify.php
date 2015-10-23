<?php
$e = 'ua@nkrat.net';


$email = htmlspecialchars($_POST['em']);
$subj = htmlspecialchars($_POST['sb']);
$feed = htmlspecialchars($_POST['feed']);



$m = 'From: '.$email.' <br>Subject: '.$subj.' <br><br> Message: '.$feed.' <br><br> FRS Feedback';
$to=$e;
$subject = 'NETOPAY CREDIT FEEDBACK';
$headers = "From: " . $email . "\r\n";
$headers .= "Reply-To: ". $to . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$message = $m;	
//mail($to, $subject, $message, $headers);


 $d = date('d.m.Y / H:i');
 $e = $email;
 $s = $subj;
 $f = $feed;
 
//$ch1 = chmod("/home/frs/frs_html/846238764dgashjdgashgd526542367543543254.txt", 0666); 
$fp = fopen('846238764dgashjdgashgd526542367543543254.txt', 'a'); 


$mytext =    'Date and Time: '.$d.'<br>'."\r\n"  .'E-mail: '.$e.'<br>'."\r\n"  .'Subject: '.$s.'<br>'."\r\n" .'Message: '.$f.'<br>'."\r\n".    '<hr>' ."\r\n"; 


$test = fwrite($fp,  $mytext );
//$ch2 = chmod("/home/frs/frs_html/846238764dgashjdgashgd526542367543543254.txt", 0444);  

fclose($fp);




