<?php
$name = $_POST['sb'];	
$email = $_POST['em'];
$feed = $_POST['feed'];
require_once "mailer.php"; 
$mailSMTP = new sendMail(''.$account.'', ''.$pass.'', 'ssl://smtp.yandex.ru', 'TEST MAILER', 465);
$headers= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";
$headers .= "From: $project <'$account'>\r\n";
$result =  $mailSMTP->send(''.$account.'', ''.$project.'', ''.$name.'<br>'.$email.'<br>'.$feed.'', $headers); 
if($result === true){
   echo "OK";
}else{
    echo "error: " . $result;
}
?>


