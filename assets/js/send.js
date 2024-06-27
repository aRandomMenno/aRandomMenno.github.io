
const WebhookLink = 'aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTI1NTIzMTM3MDgwOTE4MDI3My9YNFQtV2hKZHVLRTdNUXZHR3Z1NEZoR01QNWZNYmY4UlJLZzh0Zl9fVXdNTGFYUVBtNDhNeVpNTW9RT1A5cVBCMTFvbw==';
console.info("%cI would appreciate it if you would not send any messages with my webhook, thank you! and let me know if there is a better way to hide the webhook link.", "font-size: 24px; font-weight: 600; padding: 16px; color: violet;");

var userAgent = navigator.userAgent;
var lang = navigator.languages;
var OS = 'No OS found in user agent, maybe a niche linux distro or possibly a webcrawler.';

// @ Global Privacy Control is not supported everywhere! (most browsers don't only firefox...)
var GPC = navigator.globalPrivacyControl;
var UUID = localStorage.getItem('UUID');
var visits = localStorage.getItem('visits');
var privacy = localStorage.getItem('privacy')

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

if (privacy == 'true') {
    if (/X22/i.test(userAgent)) {
        console.info('No embed send, welcome it with many names! :)');
    }
    
    else if (GPC == true) {
        var data = {
            'embeds':
                [{
                    'title': 'Someone or something has visited my website!',
                    'description': `User Agent -> ${userAgent} \n\nLanguage(s) -> ${lang} \nOperating System -> ${OS}\nUser has GlobalPrivacyControl turned on.`,
                    'color': 15277667
                }]
        };
    }
    
    else {
        var data = {
            'embeds':
                [{
                    'title': 'Someone or something has visited my website!',
                    'description': `User Agent -> ${userAgent} \n\nLanguage(s) -> ${lang} \nOperating System -> ${OS}\nVisit count -> ${visits} \nUUID -> ${UUID}`,
                    'color': 15277667
                }]
        };
    }
    console.info(data)
    fetch(atob(WebhookLink), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
}
