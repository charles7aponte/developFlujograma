<?php 

$date1 = DateTime::createFromFormat("d-m-Y", "10-10-2014");

$date2 = DateTime::createFromFormat("d-m-Y", "10-11-2014");

$interval = $date1->diff($date2);
$dias = $interval->format('%R%a');

echo $dias/7;




?>