
console.error("%cI would appreciate it if you would not send any messages with my webhook, thank you!", "font-size: 48px; font-weight: 600; padding: 16px; color: violet;");

const first = localStorage.getItem('first')
if (first == null) {
  localStorage.setItem('first', "false")
  localStorage.setItem('privacy', 'true')
} else if (first == "false") {
  console.log('Welcome back dear visitor!')
}

const privacy = localStorage.getItem('privacy');
if (privacy == 'true') {
  try {
    const r = document.getElementById('redacted')
    r.remove();
  } catch (error) {}
  try {
    const a = document.getElementById('a');
    a.style.display = 'unset';
    const b = document.getElementById('b');
    b.style.display = 'none';
  } catch (error) {}
} else if (privacy == 'false') {
  try {
    const a = document.getElementById('a');
    a.style.display = 'none';
    const b = document.getElementById('b');
    b.style.display = 'unset';
  } catch (error) {}
}

var visits = localStorage.getItem('visits');
if (visits == null) {
  localStorage.setItem('visits', '1');
  var visits = localStorage.getItem('visits');
} else {
  var visits = Number(localStorage.getItem('visits'));
  var visitsNew = visits + 1;
  localStorage.setItem('visits', visitsNew);
}

var UUID = localStorage.getItem('UUID');
if (UUID == null) {
  var UUID = crypto.randomUUID();
  localStorage.setItem('UUID', UUID);
}

var DNT = navigator.doNotTrack;
if (DNT == 1) {
  localStorage.setItem('DNT', 'true');
  var DNT = localStorage.getItem('DNT');
} else {
  localStorage.setItem('DNT', 'false');
  var DNT = localStorage.getItem('DNT');
}

function accept() {
  localStorage.setItem('privacy', 'true');
  location.reload();
} 
function revoke() {
  localStorage.setItem('privacy', 'false');
  location.reload();
}

console.log('Loaded visitor.js');
