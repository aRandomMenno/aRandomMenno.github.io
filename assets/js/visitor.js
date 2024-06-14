
var first = localStorage.getItem('first')
if (first == null) {
    localStorage.setItem('first', "false")
    localStorage.setItem('privacy', 'true')
} else if (first == "false") {
    console.info('Welcome back dear visitor!')
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

if (UUID == null) {
    var UUID = localStorage.getItem('UUID') || crypto.randomUUID();
    localStorage.setItem('UUID', UUID);
}

console.info('Loaded visitor.js');
