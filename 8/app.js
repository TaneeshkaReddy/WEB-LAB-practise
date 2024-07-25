const btn = document.getElementById('btn');
const form = document.getElementById('forms');

function calculate() {
  const a = parseFloat(document.getElementById("mark1").value);
  const b = parseFloat(document.getElementById("mark2").value);
  const c = parseFloat(document.getElementById("mark3").value);
  
  let marks = [a, b, c];
  marks.sort();
  const add = (marks[0] + marks[1]) / 2;
  alert("The average is: " + add);
}

btn.addEventListener("click", calculate);
form.addEventListener("submit", function(event) {
  event.preventDefault();
});
