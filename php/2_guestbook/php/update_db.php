<?php
$name = (empty($_POST['name'])) ? 'Анонимно' : $_POST['name'];
$text = $_POST["text"];
$datatime = date('d.m.Y H:i');

$path = $_SERVER['DOCUMENT_ROOT'];
$db = new SQLite3($path . "/db/guestbook.db");

$sql = "INSERT INTO record (name, text, datatime) VALUES (:name, :text, :date)";
$stmt = $db->prepare($sql);

$stmt->bindParam(':name',$name);
$stmt->bindParam(':text',$text);
$stmt->bindParam(':date',$datatime);

$stmt->execute();
header('Location: /');
?>