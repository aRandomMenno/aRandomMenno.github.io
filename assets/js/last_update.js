document.addEventListener('DOMContentLoaded', function () {
    const info = document.getElementById('last_update')
    const lastupdate = document.lastModified
    info.innerHTML = lastupdate
})