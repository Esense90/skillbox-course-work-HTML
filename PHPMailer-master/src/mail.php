<?
require_once 'PHPMailer/PHPMailerAutoload.php';

$admin_email = array();
foreach ( $_POST['admin_email'] as $key => $value ) {
  array_push($admin_email, $value);
}

$form_subject = trim($_POST["form_subject"]);

$mail = new PHPMailer;
$mail->CharSer = 'UTF-8';
