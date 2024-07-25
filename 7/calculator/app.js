const addbutton=document.getElementById('add');
const subbutton=document.getElementById('sub');
const mulbutton=document.getElementById('mul');
const divbutton=document.getElementById('div');
const clearbutton=document.getElementById('clear');

const form=document.getElementById('calcform');

function addition(){
  const a=parseFloat(document.getElementById('one').value);
  const b=parseFloat(document.getElementById('two').value);
  const c=a+b;
  document.getElementById('ans').innerHTML="Result="+c;
}
function subtraction(){
  const a=parseFloat(document.getElementById('one').value);
  const b=parseFloat(document.getElementById('two').value);
  const c=a-b;
  document.getElementById('ans').innerHTML="Result="+c;
}
function multiplication(){
  const a=parseFloat(document.getElementById('one').value);
  const b=parseFloat(document.getElementById('two').value);
  const c=a*b;
  document.getElementById('ans').innerHTML="Result="+c;
}
function division(){
  const a=parseFloat(document.getElementById('one').value);
  const b=parseFloat(document.getElementById('two').value);
  const c=a/b;
  document.getElementById('ans').innerHTML="Result="+c;
}
function clearall(){
  document.getElementById('one').value="";
  document.getElementById('two').value="";
  document.getElementById('ans').innerHTML="";
}

addbutton.addEventListener("click",addition);
subbutton.addEventListener("click",subtraction);
mulbutton.addEventListener("click",multiplication);
divbutton.addEventListener("click",division);
clearbutton.addEventListener("click",clearall);

form.addEventListener("submit",function(event){
  event.preventDefault();
});