<?php
require_once("config.php");

$nid = stripslashes(strip_tags($_POST['nid']));
$text = stripslashes(strip_tags($_POST['text']));



$sql = "SELECT nid FROM flujogramas WHERE nid = $nid";
$resultado = mysql_query($sql);

$datos = array('respuesta'=>false);


$cant = mysql_num_rows($resultado);

if($cant>0){
	$sql = "UPDATE flujogramas SET data = \"$text\" WHERE nid = $nid;";
	$resultado = mysql_query($sql);
	$datos['respuesta']=true;	


	echo "-->$sql";
	
}else{
	$sql = "INSERT INTO flujogramas (nid, data) VALUES($nid, \"$text\");";
	$resultado = mysql_query($sql);
	
	$datos['respuesta']=true;
	//echo "2-->$sql";	
}

echo json_encode($datos);