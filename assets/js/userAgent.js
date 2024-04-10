
if (localStorage.getItem('first') === null) {
  localStorage.setItem('privacyAccept', 'true');
  localStorage.setItem('first', 'false');
}

const privacyAccept = localStorage.getItem('privacyAccept');

if (privacyAccept === null) {
  localStorage.setItem('privacyAccept', 'false');
} else if (privacyAccept === 'true') {
  try {
    const redacted = document.getElementById('redacted')
    redacted.remove();
  } catch (error) { console.log(error) }

  try {
    const notAccepted = document.getElementById('notAccepted');
    const Accepted = document.getElementById('accepted');
    notAccepted.style.display = 'none';
    Accepted.style.display = 'unset';
  } catch (error) { console.log(error) }
} else {
  localStorage.setItem('privacyAccept', 'false');
}

function acceptPrivacy() {
  localStorage.setItem('privacyAccept', 'true');
  location.reload();
}

function revoke() {
  localStorage.setItem('privacyAccept', 'false');
  location.reload();
}

let userAgent = navigator.userAgent;
let DNT = localStorage.getItem('DNT');
let lang = navigator.language;
let OS = 'No OS found in user agent, maybe a niche linux distro or possibly a webcrawler.';
let visits = localStorage.getItem('visits');
let UID = localStorage.getItem('UID');

if (privacyAccept == 'true') {
  if (visits === null) {
    localStorage.setItem('visits', 1);
  } else {
    let visits = Number(localStorage.getItem('visits'));
    let visitsNew = visits + 1;
    localStorage.setItem('visits', visitsNew);
  } if (UID === null) {
    let UID = crypto.randomUUID();
    localStorage.setItem('UID', UID);
  } if (DNT == 1) {
    localStorage.setItem('DNT', 'true');
  } else {
    localStorage.setItem('DNT', 'false');
  }
} else {
  console.warn('User has not yet agreed to privacy policy.');
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

const DISCORD_WEBHOOK = 'aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTIyNzY4MjExMjY2MDgzNjQzMy9uaVV2OU8zRmYycmZoMlFMX2ZDZm5NNkZsaEkxdjBzNVdjZjNKb19LRFBpVmxVd2xvSnB4M0JaaTBaUWlCX3NhaVlyQw';

if (/MarshMenno/i.test(userAgent)) {
  console.log('[INFO] No embed send!');
} else {
  let data = {
    'embeds':
      [{
        'title': 'A visitor found my website!',
        'description': `User Agent: ${userAgent} \n\nDo not track: ${DNT} \nLanguage: ${lang} \nOperating System: ${OS}\nVisit count: ${visits} \nUnique UID: ${UID}`,
        'color': 15277667
      }]
  };
  fetch(atob(DISCORD_WEBHOOK), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  .then(response => console.log('Success:', response))
  .catch(error => console.error('Error:', error));
}

console.log('[INFO] Executed userAgent.js');
