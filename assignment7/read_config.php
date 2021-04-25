<?php
// This script reads data from file 'config.txt'
$file = fopen('config.txt', 'r');
while(!feof($file)) {
    $line = fgets($file);
    $lineA = explode("=", $line);
    $config[$lineA[0]] = $lineA[1];
}

fclose($file);
?>