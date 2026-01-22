<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the posted form data
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['intro']));

    // Set the recipient email
    $to = "support@ecompusell.com";  // Replace with your Hostinger email

    // Subject of the email
    $subject = "New Contact Form Submission";

    // Email body content
    $body = "Name: $name\nEmail: $email\nMessage:\n$message";

    // Headers
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Message delivery failed.";
    }
} else {
    echo "Invalid request method.";
}
?>
