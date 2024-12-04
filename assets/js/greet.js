document.addEventListener('DOMContentLoaded', () => {
    let dd = document.getElementById('dd');
    let greet = '';
    let time = new Date();
    let hours = time.getHours()

    if (hours <= 6) {
        greet = 'Goodnight';
    } 
    else if (hours <= 12) {
        greet = 'Good morning';
    } 
    else if (hours <= 18) {
        greet = 'Good afternoon';
    }
    else if (hours <= 24) {
        greet = 'Good evening';
    }
    else {
        greet = 'What hour of the day is it really? Well hello anyway';
    }

    dd.innerText = greet;
});