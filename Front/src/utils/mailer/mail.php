<?php

if ($_POST) {
    $fname = "";
    $lname = "";
    $expeditor = "";
    $spam = "";
    $tel = "";
    $subject = "";
    $message = "";
    $visitor_message = "";
    $email_body = "<div>";



    $subject = "Nouvelle demande de la part de $fname $lname";
    $email_body .= "<div>
                       <label><b>Objet du message:</b></label>&nbsp;<span>" . $subject . "</span>
                    </div>";

    if (isset($_POST['firstname'])) {
        $fname = filter_var($_POST['firstname'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);
        $email_body .= "<div>
                           <label><b>Prénom:</b></label>&nbsp;<span>" . $fname . "</span>
                        </div>";
    }

    if (isset($_POST['name'])) {
        $lname = filter_var($_POST['name'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);
        $email_body .= "<div>
                           <label><b>Nom:</b></label>&nbsp;<span>" . $lname . "</span>
                        </div>";
    }

    if (isset($_POST['email'])) {
        $expeditor = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['email']);
        $expeditor = filter_var($expeditor, FILTER_VALIDATE_EMAIL);
        $email_body .= "<div>
                           <label><b>Email de votre Contact:</b></label>&nbsp;<span>" . $expeditor . "</span>
                        </div>";
    }

    if (isset($_POST['phone'])) {
        $tel = filter_var($_POST['phone'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);
        $email_body .= "<div>
                           <label><b>Téléphone:</b></label>&nbsp;<span>" . $tel . "</span>
                        </div>";
    }

    if (isset($_POST['message'])) {
        $message = filter_var($_POST['message'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);
        $email_body .= "<div>
                           <label><b>Message de votre Contact:</b></label>&nbsp;<span>" . $message . "</span>
                        </div><br/><br/>";
    }

    if (isset($_POST['spammer'])) {
        $spam = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['spammer']);
        $spam = filter_var($spam, FILTER_VALIDATE_EMAIL);
        $email_body .= "<div>
	                       <label><b>Si ce champs est rempli; il s'agit de spam :</b></label>&nbsp;<span>" . $spam . "</span>
	                    </div>";
    }

    $recipient = "daemon@iamseb.dev";
    $administrator = "guepes.frelons87@gmail.com";
    $email_body .= "</div>";

    $headers  = 'MIME-Version: 1.0' . "\r\n"
        . 'Content-type: text/html; charset=utf-8' . "\r\n"
        . 'From: ' . $recipient . "\r\n"
        . 'To: ' . $administrator . "\r\n"
        . 'Reply-To: ' . $expeditor . "\r\n";

    if (!empty($spam)) {
        echo "<p>We are sorry but we dont tolerate bots...<br/>$spam</p>";
        header('Refresh:3; url= ../', true, 303);
    } else if (mail($recipient, $subject, $email_body, $headers)) {
        echo "<p>Merci $fname $lname de contacter Guêpes et Frelons 87.<br/>Nous reviendrons vers vous dans les plus brefs délais.</p>";
        header('Refresh:3; url= ../', true, 303);
    } else {
        echo "<p>Nous sommes désolé mais votre message s'est perdu en route.<br/>Merci de recommencer svp..<br/>recipient=> $recipient<br/>subject=> $subject<br/>email_body=> $email_body<br/>header=> $headers</p>";
        header('Refresh:3; url= ../', true, 303);
    }
} else {
    echo '<p>Something went wrong</p>';
    header('Refresh:3; url= ../', true, 303);
}