<?php
require_once("config.php");
$datos = array();


if(isset($_POST['nid']) && $_POST['nid']!="")
{
	$nid =stripslashes(strip_tags($_POST['nid']));
	$sql = "SELECT * FROM  flujogramas  WHERE nid = '$nid'";
	$resultado = mysql_query($sql);
	while($fila= mysql_fetch_assoc($resultado))
	{
		$datos=$fila;
		
	}
	
	
}

echo json_encode($datos);


