
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
} else if (window.location.href.toLowerCase() == 'https://arandommenno.github.io/') {
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

if (/Windows|Win64|Win32/i.test(userAgent)) {
  OS = 'Windows';
} else if (/Macintosh|MacIntel|MacPPC|Mac68K/i.test(userAgent)) {
  OS = 'Mac OS';
} else if (/Android/i.test(userAgent)) {
  OS = 'Android';
} else if (/CrOS/i.test(userAgent)) {
  OS = 'Chrome OS';
} else if (/Linux|X11/i.test(userAgent)) {
  OS = 'Linux';
} else if (/iPhone/i.test(userAgent)) {
  OS = 'iOS';
} else if (/iPad/i.test(userAgent)) {
  OS = 'iPadOS';
}

var userAgent = navigator.userAgent;
var lang = navigator.language;
var OS = 'No OS found in user agent, maybe a niche linux distro or possibly a webcrawler.';

if (window.location.href.toLowerCase() == 'https://arandommenno.github.io' && privacy == 'true') {
  const WebhookLink = 'aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTIyNzY4MjExMjY2MDgzNjQzMy9uaVV2OU8zRmYycmZoMlFMX2ZDZm5NNkZsaEkxdjBzNVdjZjNKb19LRFBpVmxVd2xvSnB4M0JaaTBaUWlCX3NhaVlyQw';
  if (/MarshMenno/i.test(userAgent)) {
    console.log('No embed send, welcome it with many names! :)');
  } else {
    var data = {
      'embeds':
        [{
          'title': 'A visitor found my website!',
          'description': `User Agent: ${userAgent} \n\nDo not track: ${DNT} \nLanguage: ${lang} \nOperating System: ${OS}\nVisit count: ${visits} \nUUID: ${UUID}`,
          'color': 15277667
        }]
    };
    console.log(data)
    fetch(atob(WebhookLink), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    .then(response => console.log('Success:', response))
    .catch(error => console.error('Error:', error));
  }
} else {
 console.log('No embed send!')
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
