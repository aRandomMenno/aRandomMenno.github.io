
document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();
  const in1 = document.getElementById('in1').value;
  const in2 = document.getElementById('in2').value;
  const in3 = document.getElementById('in3').value;

  const divData = document.getElementById('result');
  divData.textContent = `${in3} ${in2} ${in1}`;
});

console.log("[INFO] Executed form-submission.js")
