<?php

// Получаем значения переменных из пришедших данных

$name = $_POST['name'];

$tel = $_POST['tel'];

// Формируем сообщение для отправки, в нём мы соберём всё, что ввели в форме 


// Сюда введите Ваш email
$emailTo = 's.skvortsova@list.ru';
$subject = 'Заявка с сайта';
$subject = '=?utf-8?b?'. base64_encode($subject) .'?=';

// тело письма
$body = "Заявка с сайта \n Имя: $name\nТелефон: $tel";
 
$send = mail ($emailTo, $subject, $body, $headers . "Content-type: text/plain; charset=\"utf-8\"\r\n");

 
// Если отправка прошла успешно — так и пишем 

if ($send == 'true')

{echo '<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Юридическая фирма «Ваш юрист»</title>
  <link rel="icon" href="images/favicon.ico" type="image/x-icon">
  <link rel="stylesheet" href="../blocks/thanks/thanks.css">
  <link rel="stylesheet" href="../blocks/footer/footer.css?v=1.2">
  <meta property="og:type" content="website">
  <meta property="og:title" content="Юридическая фирма «Ваш юрист»">
  <meta property="og:description" content="Срочная юридическая помощь в Москве">
  <meta property="og:url" content="https://xn--80ae6fc.xn--p1ai/">
  <meta property="og:locale" content="ru_RU">
  <meta property="og:image" content="https://xn--80ae6fc.xn--p1ai/images/Logo-vash-yurist.png">
  <meta property="og:image:width" content="968">
  <meta property="og:image:height" content="504">
  <meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Юридическая фирма «Ваш юрист»">
<meta name="twitter:description" content="Срочная юридическая помощь в Москве">
<meta name="twitter:image:src" content="https://xn--80ae6fc.xn--p1ai/">
<meta name="twitter:url" content="https://xn--80ae6fc.xn--p1ai/images/Logo-vash-yurist.png">
<meta name="twitter:domain" content="юавю.рф">
</head>
<body>
            <div class="thanks">
                <img class="thanks__img" src="../images/check-mark.png" alt="OK">
                <h2 class="thanks__title"><span class="thanks__span">Спасибо за заявку</span>, мы свяжемся с вами в ближайшее время!</h2>
                <p class="thanks__subtitle">А пока можете подписаться на нас в социальных сетях:</p>
                <div class="footer__contacts">
                    <a href="https://www.youtube.com/channel/UCf5HxTcIx9fMn4u3pDkTglg" class="social-link"><img class="social-img" alt="YouTube" src="../images/youtube.svg"></a>
                    <a href="whatsapp://send?phone=+78002016607" class="social-link margin-right10"><img class="social-img" alt="WhatsApp" src="../images/whatsapp.svg"> </a>
                    <a href="https://vk.com/vashjyrist" class="social-link margin-right10"><img class="social-img social-img__vk" alt="Vkontakte" src="../images/social-normal.svg"></a>
                    <a href="https://www.instagram.com/vash_jyrist" class="social-link"><img class="social-img" alt="instagram" src="../images/instagram.svg"> </a>
                </div>
                <a class="thanks__link" href="https://xn--80ae6fc.xn--p1ai">Вернуться на сайт</a>
            </div>
        </body>';}

// Если письмо не ушло — выводим сообщение об ошибке

else {echo '<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Юридическая фирма «Ваш юрист»</title>
  <link rel="icon" href="images/favicon.ico" type="image/x-icon">
  <link rel="stylesheet" href="../blocks/thanks/thanks.css">
  <link rel="stylesheet" href="../blocks/footer/footer.css?v=1.2">
  <meta property="og:type" content="website">
  <meta property="og:title" content="Юридическая фирма «Ваш юрист»">
  <meta property="og:description" content="Срочная юридическая помощь в Москве">
  <meta property="og:url" content="https://xn--80ae6fc.xn--p1ai/">
  <meta property="og:locale" content="ru_RU">
  <meta property="og:image" content="https://xn--80ae6fc.xn--p1ai/images/Logo-vash-yurist.png">
  <meta property="og:image:width" content="968">
  <meta property="og:image:height" content="504">
  <meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Юридическая фирма «Ваш юрист»">
<meta name="twitter:description" content="Срочная юридическая помощь в Москве">
<meta name="twitter:image:src" content="https://xn--80ae6fc.xn--p1ai/">
<meta name="twitter:url" content="https://xn--80ae6fc.xn--p1ai/images/Logo-vash-yurist.png">
<meta name="twitter:domain" content="юавю.рф">
</head>
<body>
    <p>Ой, что-то пошло не так</p>
        </body>';}

?>