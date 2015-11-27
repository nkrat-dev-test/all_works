<?php
include('conn.php'); 

$limit = 70;

$langs = mysql_query("SELECT * FROM all_langs");
 while($row_id = mysql_fetch_array($langs)){
 $idsarray[] = $row_id["id"];
 $ids = $idsarray;
}

$start_ua='Lang.prototype.pack.ua = {"token": {';
$start_ru='Lang.prototype.pack.ru = {"token": {';
$start_de='Lang.prototype.pack.de = {"token": {';		
$end= '},"regex": [[/Budget/, ""],[/^Something at start of text/, ""],
       [/This will be case insensitive/i, ""]]};';

//========================================

foreach($ids as $id){
	$source = mysql_query("SELECT * FROM all_langs WHERE id='$id'");
    while($row = mysql_fetch_array($source)){
    $en = $row["en"];$ru = $row["ru"];$de = $row["de"];$ua = $row["ua"];
    }
      if($id < $limit){
	     $content_ua.= '"'.$en.'":"'.$ua.'",';
	  }
 unset($id);	
}
$result_ua = $start_ua.$content_ua.$end;


foreach($ids as $id){
	$source = mysql_query("SELECT * FROM all_langs WHERE id='$id'");
    while($row = mysql_fetch_array($source)){
    $en = $row["en"];$ru = $row["ru"];$de = $row["de"];$ua = $row["ua"];
    }
      if($id < $limit){
	     $content_ru.= '"'.$en.'":"'.$ru.'",';
	  }
 unset($id);	
}
$result_ru = $start_ru.$content_ru.$end;

foreach($ids as $id){
	$source = mysql_query("SELECT * FROM all_langs WHERE id='$id'");
    while($row = mysql_fetch_array($source)){
    $en = $row["en"];$ru = $row["ru"];$de = $row["de"];$ua = $row["ua"];
    }
      if($id < $limit){
	     $content_de.= '"'.$en.'":"'.$de.'",';
	  }
 unset($id);	
}
$result_de = $start_de.$content_de.$end;

$all = $result_ua.$result_ru.$result_de;

$fp = fopen("js/langpack-gen.js", "w");
$data = $all;
$record = fwrite($fp, $data); 
if ($record) echo 'Langs Pack generated!';
else echo 'Error!';
fclose($fp);


?>
