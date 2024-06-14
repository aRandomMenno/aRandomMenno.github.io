
function okidoki() {
    localStorage.setItem('privacy', 'true');
    location.reload();
}
function nope() {
    localStorage.setItem('privacy', 'false');
    location.reload();
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
