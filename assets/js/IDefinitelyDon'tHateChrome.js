document.addEventListener('DOMContentLoaded', function() {
    var userAgent = navigator.userAgent;
    if (userAgent.includes('Chrome')) {
        document.getElementById('chrome-is-stupid').style.marginBottom = '8px';
    }
});
