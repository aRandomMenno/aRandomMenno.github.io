let userAgent = navigator.userAgent;
let lang = navigator.language;
let OS = 'No OS found in user agent, maybe a niche linux distro or possibly a webcrawler.';

const LINK = 'aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTIxMzk1MTMxODY2MjU4MjI3Mi9PT0NRTWNDRlNveUdMOE9lV0xWdnFnZUI4U20tdndnbUdiOTBwa3Y5WW1ad3l1VUNQd2JyUk1YdkY2ZEZlcXF3bWRhRQ==';

if (/Windows|Win64|Win32/i.test(userAgent)) {
  OS = "Windows";
} else if (/Macintosh|MacIntel|MacPPC|Mac68K/i.test(userAgent)) {
  OS = "Mac OS";
} else if (/Android/i.test(userAgent)) {
  OS = "Android";
} else if (/CrOS/i.test(userAgent)) {
  OS = "Chrome OS";
} else if (/Linux|X11/i.test(userAgent)) {
  OS = "Linux";
} else if (/iPhone/i.test(userAgent)) {
  OS = "iOS";
}

if (/aRandomMenno/i.test(userAgent)) {
  console.log('Welcome, system owner! No embed send.')
} else {
  let data = {
    "embeds": [{
      "title": "A new visitor has Visited my website!",
      "description": `User Agent: ${userAgent}\nLanguage: ${lang}\nOperating System: ${OS}`,
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
}

console.log('[INFO] Executed userAgent.js')
