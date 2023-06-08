<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Счетчик хитов</title>
</head>
<body>
    <main>
        <?php include 'counter.php' ?>
        <h1>Страница была загружена <?= $count ?> раз. Текущее время <?= $time_now ?></h1>
    </main>
</body>
</html>