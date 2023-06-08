<?php
$file = file('count.txt');
$count = implode('', $file);
$count++;
$my_file = fopen('count.txt', 'w');
fputs($my_file, $count);
fclose($my_file);
date_default_timezone_set('Europe/Moscow');
$time_now = date('H:i');
?>
