<?php
$today = date('d-m-Y');
$number = $_POST['numbers'];

$flag=0;
for($i=2;$i<sqrt($number);$i++){
  if($number%$i==0){
    $flag=1;
    break;
  }
}

if($flag==0){
  $ans="PRIME NUMBER";
}
else{
  $ans="COMPOSITE";
}


echo $ans;
echo "<br>Entered number: $number";
?>

