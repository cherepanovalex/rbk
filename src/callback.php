<?php


if (file_exists('deploy.php')) {
    require_once('deploy.php');
}
		$to = "contactcentre@bankrbk.kz, alimbayeva_m@bankrbk.kz";
//$to = "maratbazynga@gmail.com";
// $to = 'it@brandstudio.kz';
// $to = 'nurik9293709@gmail.com';
$subject = "заявка на карту" . ' - ' . $_POST["cardType"];


function cleanString($postInput)
{
    $strip_tags_clean_string = strip_tags($postInput);
    $htmlentities_clean_string = htmlentities($strip_tags_clean_string, ENT_QUOTES, "UTF-8");
    $clean_string = htmlspecialchars($htmlentities_clean_string, ENT_QUOTES);
    return $clean_string;
}

$mailContent = '<br> ФИО: ' . cleanString($_POST["name"]) .
    '<br> Телефон: ' . $_POST["phone"] .
    '<br> ИИН: ' . $_POST["iin"] .
    '<br> Город: ' . $_POST["city"] .
    '<br> Вид карты: ' . $_POST["cardType"] .
    '<br> utm_source: ' . $_POST["utm_source"] .
    '<br> utm_medium: ' . $_POST["utm_medium"] .
    '<br> utm_term: ' . $_POST["utm_term"] .
    '<br> utm_content: ' . $_POST["utm_content"] .
    '<br> utm_campaign: ' . $_POST["utm_campaign"];

//var_dump(@$_POST);
//die();

$headers = array("X-Mailer: PHP/" . PHP_VERSION,
    'Content-type: text/html; charset=UTF-8',
    'From: <online@bankrbk.kz>');
$headers = implode("\r\n", $headers);

$log_text = "Время: " . date("Y-m-d H:i:s") . " " . $mailContent . "\n\n";
file_put_contents("email.log.txt", $log_text, FILE_APPEND);

//$link = mysqli_connect("127.0.0.1", "root", "root", 'bank-rbk');


//var_dump($link);
//die();

//if (!$link)
//    die('Not connected : ' . mysqli_error());
//
//$db_selected = mysqli_select_db($mysql_database, $link);
//if (!$db_selected)
//    die ('Can\'t use: ' . mysqli_error());
//
//mysqli_query("SET NAMES utf8");

// $forrun = "INSERT  INTO `cms_request` VALUES (
// 	NULL,
// 	0,
// 	".$_POST['creditType'].",
// 	".time().",
// 	".$_POST['name'].",
// 	' ',
// 	'',
// 	NULL,
// 	'',
// 	NULL,
// 	".$_POST['iin'].",
// 	".$_POST['phone'].",
// 	'',
// 	'',
// 	'',
// 	".$_POST['summary'].",
// 	'',
// 	".$_POST['salary'].",
// 	".$_POST['experience'].",
// 	'',
// 	".$_POST['citiLive'].",
// 	'',
// 	'',
// 	0
// )";
//$checkForUnique = mysql_query('SELECT * from cms_request WHERE rnn="' . $_POST['iin'] . '" AND DATE(FROM_UNIXTIME(date)) = CURDATE()');

//if (mysql_num_rows($checkForUnique) > 1) {
//    die(header("HTTP/1.0 404 Not Found"));
//}

//$forrun = "INSERT  INTO `cms_request` VALUES (
//	NULL,
//	0,
//	" . $_POST['creditType'] . ",
//	" . time() . ",
//	'" . $_POST['name'] . "',
//	' ',
//	'',
//	NULL,
//	'',
//	NULL,
//	" . $_POST['iin'] . ",
//	'" . $_POST['phone'] . "',
//	'" . $_POST['salary'] . "',
//	'" . $_POST['experience'] . "',
//	'',
//	'" . $_POST['summary'] . "',
//	'',
//	'landing',
//	'" . $_POST['citiLive'] . "',
//	'',
//	'',
//	0,
//	'" . $_POST['utm_source'] . "',
//	'" . $_POST['utm_medium'] . "',
//	'" . $_POST['utm_campaign'] . "',
//	'" . $_POST['utm_term'] . "',
//	'" . $_POST['utm_content'] . "'
//)";
//
//// die(var_dump($forrun));
//
//mysql_query($forrun) or die(mysql_error());
//var_dump(123123);
//die();

if (mail($to, $subject, $mailContent, $headers)) {
    http_response_code(200);
    header('Location: https://prisma.bankrbk.kz/');
} else {
    http_response_code(500);
}

