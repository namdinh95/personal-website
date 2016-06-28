<?php
// Validate input to prevent exploit
function testInput($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = testInput($_POST["name"]);
  $content = testInput($_POST["content"]);
  $message = "From: " . $name . "\n"
    . $content;
  $subject = "Email from personal website";
  $to = "nam.dinhviet@gmail.com";

  mail($to, $subject, $message);
  echo "Thank you. Your email has been sent.";
}
else
  echo "An error has occured. Sorry";
?>
