<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Гостевая книга</title>
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
    <main>
        <div class="records">
            <?php
                include 'php/read_db.php'
            ?>
        </div>
        <form action="./php/update_db.php" class="form" method="post">
            <input class="form__name" type="text" placeholder="Имя" name="name">
            <textarea class="form__text" name="text" id="" cols="30" rows="10" placeholder="Ваше сообщение" required></textarea>
            <button class="form__button">Отправить</button>
        </form>
    </main>
</body>
</html>
