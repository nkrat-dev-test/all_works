<?php
$server   = "localhost";
$database = "nkrat_langs";
$username = "root";
$password = "root";
	
	
$mysqlConnection = mysql_connect($server, $username, $password);
mysql_select_db($database, $mysqlConnection);
mysql_query('SET NAMES utf8');
mysql_query("SET character_set_server='utf8'");
mysql_query("SET character_set_system='utf8'");
mysql_query("SET character_set_client='utf8'");
?>