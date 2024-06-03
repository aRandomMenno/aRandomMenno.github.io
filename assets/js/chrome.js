
// @ stupid tweaks for chrome since my website is build with firefox in mind ;(

document.addEventListener('DOMContentLoaded', function() {
    let userAgent = navigator.userAgent;
    if (userAgent.includes('Chrome')) {
        document.getElementById('chrome').style.marginBottom = '8px';
    }
});
