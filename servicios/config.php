<?php
date_default_timezone_set("America/Bogota");	
$servidor     = "localhost";
$db_usuario   = "factosa7_ma";
$db_pass      = "I..65-86WTFP";
$db           = "factosa7_ma";

mysql_connect($servidor,$db_usuario,$db_pass);
mysql_select_db($db);
$res = mysql_query("SET NAMES 'utf8'");


?>