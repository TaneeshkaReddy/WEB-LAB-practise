const btn=document.getElementById('btn');
const form=document.getElementById('forms');




function validate(){
const uname=document.getElementById('uname').value;
const email=document.getElementById('email').value;
const phone=document.getElementById('phone').value;
const favecolor=document.getElementById('favecolor').value;
const gender=document.getElementById('gender').value;
  if(uname === ""){
    alert("Pls enter name");
    return;
  }
  if(email === "" || !email.includes('.') || !email.includes('@')){
    alert("Pls enter valid email");
    return;
  }

  if(phone === "" || phone.length !==10 || isNaN(phone)){
    alert("Pls enter valid phone");
    return;
  }

  if(gender === ""){
    alert("Pls select gender");
    return;
  }
  if(favecolor === ""){
    alert("Pls enter color");
    return;
  }
  

  document.getElementById('displayhere').innerHTML=
  "Name is: "+uname+"<br>Email is: "+email;

}

btn.addEventListener("click",validate);
form.addEventListener("submit",function(event){
  event.preventDefault();
});
