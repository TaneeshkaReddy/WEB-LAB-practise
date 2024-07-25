<?php
$uname=$_POST['uname'];
$password=$_POST['password'];

$filename="password.txt";
$file=fopen($filename,"r");

if($file){
  while(($line = fgets($file)) !== false){
    if($line == $uname . ":" . $password){
      echo "<script> alert('access granted');</script>";
    }
    else{
      echo "<script> alert('access denied');</script>";

    }
  }

}
else{
  echo "error opening file";
}


