
if (localStorage.getItem('visits') === null) {
  localStorage.setItem('visits', 1);
} else {
  let Visits = Number(localStorage.getItem('visits'))
  let visitsNew = Visits + 1;
  localStorage.setItem('visits', visitsNew)
}

if (localStorage.getItem('ID') === null) {
  let ID = crypto.randomUUID();
  localStorage.setItem('ID', ID);
}

if (navigator.doNotTrack == 1) {
  localStorage.setItem('DNT', 'true');
} else {
  localStorage.setItem('DNT', 'false');
}

let userAgent = navigator.userAgent;
let DNT = localStorage.getItem('DNT');
let lang = navigator.language;
let OS = 'No OS found in user agent, maybe a niche linux distro or possibly a webcrawler.';
let visits = localStorage.getItem('visits');
let ID = localStorage.getItem('ID');

const LINK = 'aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTIxMzk1MTMxODY2MjU4MjI3Mi9PT0NRTWNDRlNveUdMOE9lV0xWdnFnZUI4U20tdndnbUdiOTBwa3Y5WW1ad3l1VUNQd2JyUk1YdkY2ZEZlcXF3bWRhRQ==';

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

if (/aRandomMenno/i.test(userAgent)) {
  console.log('[INFO] No embed send!');
} else {
  let data = {
    'embeds':
      [{
        'title': 'A new visitor has Visited my website!',
        'description': `User Agent: ${userAgent} \n\nDo not track: ${DNT} \nLanguage: ${lang} \nOperating System: ${OS}\nVisit count: ${visits} \nUnique ID: ${ID}`,
        'color': 9055202
      }]
  };
  fetch(atob(LINK), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  .then(response => console.log('Success:', response))
  .catch(error => console.error('Error:', error));
}

console.log('[INFO] Executed userAgent.js');
