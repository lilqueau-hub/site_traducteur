<?php

if (!$_POST) exit;

function tommus_email_validate($email) { return filter_var($email, FILTER_VALIDATE_EMAIL) && preg_match('/@.+\./', $email); }

$name = $_POST['prenom'];
$surname = $_POST['nom'];
$mail = $_POST['email'];
$domain = $_POST['domain'];
$source = $_POST['langueSource'];
$cible = $_POST['langueCible'];
$message = $_POST['message'];
$btnform = $_POST['btnForm'];
$website = $_POST['website'];

if(trim($name) == '') {
    exit('<div class="alert danger">Attention! You must enter your name.</div>');
} else if(trim($name) == 'Prénom') {
    exit('<div class="alert danger">Attention! You must enter your name.</div>');
} else if(trim($surname) == 'Nom') {
    exit('<div class="alert danger">Attention! You must enter your surname.</div>');
} else if(trim($mail) == 'E-mail') {
    exit('<div class="alert danger">Attention! Please enter a valid email address.</div>');
} else if(!tommus_email_validate($email)) {
	exit('<div class="alert danger">Attention! You have entered an invalid e-mail address.</div>');
} else if(trim($domain) == 'Domaine') {
    exit('<div class="alert danger">Attention! You must enter the domain.</div>');
} else if(trim($website) == 'Website') {
	exit('<div class="alert danger">Attention! Please enter your website.</div>');
} else if(trim($website) == '') {
	exit('<div class="alert danger">Attention! Please enter your website.</div>');
} else if(trim($source) == 'Langue source') {
    exit('<div class="alert danger"></div>');
} else if(trim($cible) == 'Langue cible') {
    exit('<div class="alert danger"></div>');
} else if(trim($message) == 'Message') {
	exit('<div class="alert danger">Attention! Please enter your message.</div>');
} else if(trim($message) == '') {
	exit('<div class="alert danger">Attention! Please enter your message.</div>');
} else if( strpos($message, 'href') !== false ) {
	exit('<div class="alert danger">Attention! Please leave links as plain text.</div>');
} else if( strpos($message, '[url') !== false ) {
	exit('<div class="alert danger">Attention! Please leave links as plain text.</div>');
} else if(trim($btnform) =='Envoyer') {
    exit('<div class="alert danger"></div>');
} if(get_magic_quotes_gpc()) { $message = stripslashes($message); }


$adress = 'diane22.queau@aol.com';

$e_subject = 'Vous vous êtes fait contacté par ' . $name . '.';
$e_body = "Tu t'es fait contacté par $name venant de $website du formulaire de contact, le message est celui-ci." . "\r\n" . "\r\n";
$e_content = "\"$message\"" . "\r\n" . "\r\n";
$e_reply = "Tu peux contacter $name via par e-mail, $mail";

$msg = wordwrap ( $e_body . $e_content . $e_reply, 70 );

$headers = "From: $adress" . "\r\n";
$headers = "Reply-To: $mail" . "\r\n";
$headers .= "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type: text/plain; charset=utf-8" . "\r\n";
$headers .= "Content-Transfer-Encoding: quoted-printable" . "\r\n";

if(mail($adress, $e_subject, $msg, $headers)) {
   echo "<fieldset><div id='success_page'><h4 class='remove-bottom'>Email Sent Successfully.</h4><p>Thank you <strong>$name</strong>, your message has been submitted to us.</p></div></fieldset>"; 
}



if (!$_POST) exit;

function tommus_numero_validate($numero) {return filter_var($numero, FILTER_VALIDATE_EMAIL) && preg_match('/@.+\./', $numero); }

$numero = $_POST['numTelInput'];
$numBtn = $_POST['numBtn'];

if(trim($numero) == '') {
   
} else if(trim($btnform) =='Envoyer') {
    exit('<div class="alert danger"></div>');
}