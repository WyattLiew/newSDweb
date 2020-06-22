<?php





$my_email = "";







$continue = "/contacts.html";




$errors = array();



// Remove $_COOKIE elements from $_REQUEST.



if(count($_COOKIE)){foreach(array_keys($_COOKIE) as $value){unset($_REQUEST[$value]);}}



// Validate email field.



if(isset($_REQUEST['email']) && !empty($_REQUEST['email']))

{



$_REQUEST['email'] = trim($_REQUEST['email']);



if(substr_count($_REQUEST['email'],"@") != 1 || stristr($_REQUEST['email']," ")){$errors[] = "Email address is invalid";}else{$exploded_email = explode("@",$_REQUEST['email']);if(empty($exploded_email[0]) || strlen($exploded_email[0]) > 64 || empty($exploded_email[1])){$errors[] = "Email address is invalid";}else{if(substr_count($exploded_email[1],".") == 0){$errors[] = "Email address is invalid";}else{$exploded_domain = explode(".",$exploded_email[1]);if(in_array("",$exploded_domain)){$errors[] = "Email address is invalid";}else{foreach($exploded_domain as $value){if(strlen($value) > 63 || !preg_match('/^[a-z0-9-]+$/i',$value)){$errors[] = "Email address is invalid"; break;}}}}}}



}


$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];

$propertyType = $_POST['propertyType'];
$propertyStatus = $_POST['propertyStatus'];
$idStyle = $_POST['idStyle'];
$budget = $_POST['budget'];
$size = $_POST['size'];
$loanRequired = $_POST['loanRequired'];
$keyCollected = $_POST['keyCollected'];
$keyPeriodMonth = $_POST['keyPeriodMonth'];
$keyPeriodYear = $_POST['keyPeriodYear'];
$phonenumber = $_POST['phonenumber'];


$email_from = 'stepdbsg@gmail.com';
$email_subject = "New Form submission from STEP DEZIGN website";
$email_body = "You have received a new message from the client $name.\n".
                            "\n\n".
                            "Name:     $name\n\n".
                            "Phone:    $phonenumber.\n\n".
                            "Email:    $visitor_email.\n\n".
                            "\n\n".
                            "Budget:   $budget.\n\n".
                            "Size:     $size.\n\n".
                            "Property Type:     $propertyType.\n\n".
                            "Property Status:   $propertyStatus.\n\n".
                            "Property Style:    $idStyle.\n\n".
                            "Loan Required:     $loanRequired.\n\n".
                            "Key Collected:     $keyCollected.\n\n".
                            "KeyPeriodMonth:    $keyPeriodMonth.\n\n".
                            "KeyPeriodYear:     $keyPeriodYear.\n\n".
                            "\n\n".
                            "Remarks: \n".
                            "\n $message \n".
                            "\n\n";
                            

$headers = "From: $email_from \r\n";

// send email
mail($my_email,$email_subject,$email_body,$headers);

?>



<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">



<html>



<head>

<title>Form To Email PHP script from FormToEmail.com</title>

<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

</head>



<body bgcolor="#ffffff" text="#000000">



<div>

<center>

<b>Thank you <?php if(isset($_REQUEST['name'])){print stripslashes($_REQUEST['name']);} ?></b>

<br>Your message has been sent

<p><a href="<?php print $continue; ?>">Click here to continue</a></p>

<!-- <p><b>FormToEmail</b> by <a href="http://FormToEmail.com">FormToEmail.com</a></p> -->

</center>

</div>



</body>

</html>

