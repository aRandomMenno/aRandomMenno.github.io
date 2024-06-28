function checkScreenWidth() {
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (screenWidth < 630) {
        document.getElementById('messageBox').classList.remove('hidden');
    } else {
        document.getElementById('messageBox').classList.add('hidden');
    }
}

checkScreenWidth();

window.addEventListener('resize', checkScreenWidth);
