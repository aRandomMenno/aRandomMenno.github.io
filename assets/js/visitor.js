let first = localStorage.getItem('first')
if (first == null) {
    localStorage.setItem('first', "false")
    localStorage.setItem('privacy', 'true')
} else if (first == "false") {
    console.info('Welcome back dear visitor!')
}

let privacy = localStorage.getItem('privacy');
if (privacy == 'true') {
    try {
        let a = document.getElementById('a');
        a.style.display = 'unset';
        let b = document.getElementById('b');
        b.style.display = 'none';
    } catch (error) { }
} else if (privacy == 'false') {
    try {
        let a = document.getElementById('a');
        a.style.display = 'none';
        let b = document.getElementById('b');
        b.style.display = 'unset';
    } catch (error) { }
}

let visits = localStorage.getItem('visits');
if (visits == null) {
    localStorage.setItem('visits', '1');
    let visits = localStorage.getItem('visits');
} else {
    let visits = Number(localStorage.getItem('visits'));
    let visitsNew = visits + 1;
    localStorage.setItem('visits', visitsNew);
}

let UUID = localStorage.getItem('UUID');
if (UUID == null) {
    let UUID = crypto.randomUUID();
    localStorage.setItem('UUID', UUID);
}

let DNT = navigator.doNotTrack;
if (DNT == 1) {
    localStorage.setItem('DNT', 'true');
    let DNT = localStorage.getItem('DNT');
} else {
    localStorage.setItem('DNT', 'false');
    let DNT = localStorage.getItem('DNT');
}

function okidoki() {
    localStorage.setItem('privacy', 'true');
    location.reload();
}
function nope() {
    localStorage.setItem('privacy', 'false');
    location.reload();
}

console.info('Loaded visitor.js');
