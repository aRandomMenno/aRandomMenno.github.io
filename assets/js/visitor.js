
var first = localStorage.getItem('first')
if (first == null) {
    localStorage.setItem('first', "false")
    localStorage.setItem('privacy', 'true')
} else if (first == "false") {
    console.info('Welcome back dear visitor!')
}

var privacy = localStorage.getItem('privacy');
if (privacy == 'true') {
    try {
        var a = document.getElementById('a');
        a.style.display = 'unset';
        var b = document.getElementById('b');
        b.style.display = 'none';
    } catch (error) { }
} else if (privacy == 'false') {
    try {
        var a = document.getElementById('a');
        a.style.display = 'none';
        var b = document.getElementById('b');
        b.style.display = 'unset';
    } catch (error) { }
}

var visits = localStorage.getItem('visits');
if (visits == null) {
    localStorage.setItem('visits', '1');
    var visits = localStorage.getItem('visits');
} else {
    var visits = Number(localStorage.getItem('visits'));
    var visitsNew = visits + 1;
    localStorage.setItem('visits', visitsNew);
}

var UUID = localStorage.getItem('UUID');
if (UUID == null) {
    var UUID = crypto.randomUUID();
    localStorage.setItem('UUID', UUID);
}

// @ deprecated apparently...
// var DNT = navigator.doNotTrack;
// if (DNT == 1) {
//     localStorage.setItem('DNT', 'true');
//     var DNT = localStorage.getItem('DNT');
// } else {
//     localStorage.setItem('DNT', 'false');
//     var DNT = localStorage.getItem('DNT');
// }

console.info('Loaded visitor.js');
