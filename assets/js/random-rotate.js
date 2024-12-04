document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.social-icon svg').forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            const randomDegree = Math.floor(Math.random() * 360);
            icon.style.setProperty('--rotate-deg', `${randomDegree}deg`);
        });
    });
});