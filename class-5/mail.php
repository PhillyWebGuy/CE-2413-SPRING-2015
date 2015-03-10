<?php


$to = $_POST['to'];
$subject = $_POST['subject'];
$message = $_POST['message'];

if(mail($to , $subject, $message)) {
    echo "success";
} else {
    echo "failure";
}

?>