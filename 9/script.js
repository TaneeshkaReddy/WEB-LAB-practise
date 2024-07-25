const btn=document.getElementById('btn');
const forms=document.getElementById('forms');


function validate(){
const uname=document.getElementById('uname').value;
const email=document.getElementById('email').value;
const userid=document.getElementById('userid').value;
const password=document.getElementById('password').value;

let useridregex=/^[a-zA-Z0-9]{5,12}$/;
let unameregex=/^[a-zA-Z ]{8,}$/;
let passwordregex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*&])[a-zA-Z\d@$!%*&]{8,}$/;

let emailregex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!useridregex.test(userid)){
  alert("User ID must be between 5 to 12 characters and can contain only alphanumeric characters.");
        return;

}
if(!unameregex.test(uname)){
  alert("Name must contain only alphabets and should be at least 15 characters long.");
        return;

}
if(!emailregex.test(email)){
  
  alert("Invalid email address.");
        return;

}
if(!passwordregex.test(password)){
  alert("Password must be eight characters long, containing at least one uppercase letter, one special character, and alphanumeric characters.")
        return;

}

alert("successfully logged in");


}


btn.addEventListener("click",validate);
forms.addEventListener("submit",function(event){
  event.preventDefault();
});