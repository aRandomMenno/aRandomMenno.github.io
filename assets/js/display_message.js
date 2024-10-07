
function displayMessage() {
    const params = new URLSearchParams(window.location.search);

    if (params.has('message')) {
        let message = params.get('message');
        message = message.replace(/\+/g, ' ');

        const place = document.getElementById('message');
        if (place) {
            place.textContent = message;
            place.hidden = false;
        } else {
            console.warn('No element found with ID "message"');
        }
    }
}

window.onload = displayMessage();