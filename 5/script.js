const hide=document.getElementById('hide');
const btn=document.getElementById('btn');


btn.addEventListener("click", function(){
if(hide.style.display === "none"){
  hide.style.display="block";
}
else{
  hide.style.display="none";

}

})