<?php
$city = $_POST['city'];
$weight = $_POST['weight'];
$url = "http://exercise.develop.maximaster.ru/service/delivery/?city={$city}&weight={$weight}";
$ch2 = curl_init();
curl_setopt($ch2, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch2, CURLOPT_URL, $url);
$response = curl_exec($ch2);
curl_close($ch2);
echo $response;
