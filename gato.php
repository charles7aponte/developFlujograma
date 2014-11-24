<?php
header('Content-Type: text/csv; charset=utf-8');
header('Content-Disposition: attachment; filename=data.csv');
$output = fopen('php://output', 'w');

// output the column headings
fputcsv($output, array(utf8_decode( ('Columññn 1')), 'Column 2', 'Column 3'),";");
fputcsv($output, array('Column 1', 'Column 2', 'Column 3'),";");


?>