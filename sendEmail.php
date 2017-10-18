<?php

if(isset($_POST['name'])){
    $name = $_POST['name'];
}
if(isset($_POST['email'])){
    $from = $_POST['email'];
}
if(isset($_POST['companyName'])){
    $companyName = $_POST['companyName'];
}
if(isset($_POST['workPhone'])){
    $workPhone = $_POST['workPhone'];
}
if(isset($_POST['formMessage'])){
    $formMessage = $_POST['formMessage'];
}

$subject = 'Digisquire form';

$headers = "From: " . $_POST['email'] . "\r\n";
$headers .= "Reply-To: ". $_POST['email'] . "\r\n";
$headers .= "CC: himanshusaraswat@outlook.com\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

$message = '<html><body style="margin:0;padding:0;font-family:"helvetica";">';
$message .= '<h1 style="color:#555;margin-left:31%;"><img src="http://www.digisquire.co/images/favicon/logo.png" alt="digisquire logo"></h1>';
$message .= '<h2>Enquiry form</h2>';
$message .= '<table rules="all" style="border-color: #666;" cellpadding="10">';
$message .= "<tr style='background: #eee;'><td><strong>Name:</strong> </td><td>" . $_POST['name'] . "</td></tr>";
$message .= "<tr><td><strong>Email:</strong> </td><td>" . $_POST['email']. "</td></tr>";
$message .= "<tr><td><strong>Company Name:</strong> </td><td>" . $_POST['companyName'] . "</td></tr>";
$message .= "<tr><td><strong>Work Phone:</strong> </td><td>" . $_POST['workPhone'] . "</td></tr>";
$message .= "<tr><td><strong>Message:</strong> </td><td>" . $_POST['formMessage'] . "</td></tr>";
$message .= "</table>";
$message .= "</body></html>";

$to  = 'contact@digisquire.co';//replace with your email

$success = "
<div class=\"row-fluid\">
    <div class=\"span12\">
        <h3>Submission successful</h3>
        <p>Thank you for taking the time to contact DigiSquire Ltd.If you need immediate assistance or would like to speak to someone now, please feel free to contact us directly at <strong>09822976448</strong>.</p>
		<p> $from </p>
    </div>
</div>
";
if (mail($to, $subject,$message,$headers)) {
    echo "$success"; // success
} else {
    echo 'Form submission failed. Please try again...'; // failure
}
// Success Message

//header("Location: http://digisquire.co");
/* echo "Message sent";
echo $name;
echo $from ;
echo $subject;
echo $message;
echo $to; */
die;
