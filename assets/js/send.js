
console.info("%cI would appreciate it if you would not send any messages with my webhook, thank you!", "font-size: 48px; font-weight: 600; padding: 16px; color: violet;");

var userAgent = navigator.userAgent;
var lang = navigator.language;
var OS = 'No OS found in user agent, maybe a niche linux distro or possibly a webcrawler.';

var DNT = localStorage.getItem('DNT');
var UUID = localStorage.getItem('UUID');
var visits = localStorage.getItem('visits');

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

const data = {
    'embeds':
        [{
            'title': 'A visitor found my website!',
            'description': `User Agent: ${userAgent} \n\nDo not track: ${DNT} \nLanguage: ${lang} \nOperating System: ${OS}\nVisit count: ${visits} \nUUID: ${UUID}`,
            'color': 15277667
        }]
};

const WebhookLink = 'aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTIyNzY4MjExMjY2MDgzNjQzMy9uaVV2OU8zRmYycmZoMlFMX2ZDZm5NNkZsaEkxdjBzNVdjZjNKb19LRFBpVmxVd2xvSnB4M0JaaTBaUWlCX3NhaVlyQw';
if (/MarshMenno/i.test(userAgent)) {
    console.info('No embed send, welcome it with many names! :)');
    console.log(data)
} else {
    console.info(data)
    fetch(atob(WebhookLink), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
        .then(response => console.info('Success:', response))
        .catch(error => console.error('Error:', error));
}

