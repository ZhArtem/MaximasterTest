<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Калькулятор доставки</title>
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
    <main>
        <form action="" class="form" method="">
            <?php
                $filename = "options.txt";
                if (!file_exists($filename)) {
                    include './php/getcities.php';
                } else {
                    $date_file = date("dmY", filemtime($filename));
                    $date_now = date("dmY");
                    if ($date_file !== $date_now) {
                        include './php/getcities.php';
                    }
                }
            ?>
            <select name="city" id="city" class="form__select">
                <?php
                    include './php/setoptions.php';
                ?>
            </select>
            <input class="form__input" type="text" name="weight" id="weight" placeholder="Вес, кг">
            <button type="submit" class="form__button">Рассчитать</button>
            <p class="form__message"></p>
        </form>
    </main>

    <script src="./js/script.js"></script>
</body>
</html>
