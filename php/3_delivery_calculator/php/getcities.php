<?php
$url = "http://exercise.develop.maximaster.ru/service/city/";
$ch = curl_init();
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_URL, $url);
$response = curl_exec($ch);
$data = json_decode($response);
curl_close($ch);
$str = implode(',', $data);
$file = 'options.txt';
file_put_contents($file, $str);
