<?php
$file = 'options.txt';
$filestr = file_get_contents($file);
$array = explode(",", $filestr);
foreach ($array as $city){
    if ($city === 'Москва') {
        echo "<option value='$city' selected>$city</option>";
    } else {
        echo "<option value='$city'>$city</option>";
    }
}
?>
