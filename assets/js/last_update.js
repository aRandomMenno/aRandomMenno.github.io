document.addEventListener('DOMContentLoaded', function () {
    let info = document.getElementById('last_update')
    let lastupdate = document.lastModified
    info.innerHTML = lastupdate
})