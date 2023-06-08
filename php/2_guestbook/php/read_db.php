<?php
$path = $_SERVER['DOCUMENT_ROOT'];
$db = new SQLite3($path . "/db/guestbook.db");
$results = $db->query('SELECT name, text, datatime FROM record');
while ($row = $results->fetchArray(SQLITE3_ASSOC)) {
    echo "<div class='record'>
                <div class='record__title'>
                    <div class='record__datatime'>{$row['datatime']}</div>
                    <div class='record__author'>{$row['name']}</div>
                </div>
                <div class='record__text'>{$row['text']}</div>
            </div>";
}
$db->close();
?>



