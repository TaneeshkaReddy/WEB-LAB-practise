<?php
$inputtext = $_POST['txt'];
// echo "$inputtext<br>";

$filename = "hello.txt";
$file=fopen($filename, "a+");

fwrite($file,$inputtext."\n");
fclose($file);

$file=fopen($filename, "r");

if ($file) {
    while (($content = fgets($file)) !== false) {
        echo nl2br($content); // Convert newlines to <br> tags for proper HTML display
    }

    fclose($file); // Close the file
} else {
    echo "Error opening file!";
}
?>
