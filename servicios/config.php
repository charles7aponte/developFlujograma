<?php
date_default_timezone_set("America/Bogota");	
$servidor     = "localhost";
$db_usuario   = "root";
$db_pass      = "";
$db           = "flujo";

mysql_connect($servidor,$db_usuario,$db_pass);
mysql_select_db($db);
$res = mysql_query("SET NAMES 'utf8'");


?>