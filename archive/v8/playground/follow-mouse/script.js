const coords = { x: 0, y: 0 };
const circles = [];

for (let i = 0; i < 10; i++) {
    let circle = document.createElement('div');
    circle.classList.add('circle');
    circle.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    circle.x = 0;
    circle.y = 0;
    circle.style.position = 'absolute';
    circle.style.zIndex = 10 - i; // Set z-index
    if (i % 2 == 0 && i) {
        circle.style.zIndex = 10 + i;
    } const coords = { x: 0, y: 0 };
    const circles = [];

    for (let i = 0; i < 10; i++) {
        let circle = document.createElement('div');
        circle.classList.add('circle');
        circle.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
        circle.x = 0;
        circle.y = 0;
        circle.style.position = 'absolute';
        circle.style.zIndex = 10 - i; // Set z-index
        document.body.appendChild(circle);
        circles.push(circle);
    }

    window.addEventListener("mousemove", function (e) {
        coords.x = e.clientX;
        coords.y = e.clientY;
    });
    let y = coords.y;
    circles.forEach(function (circle, index) {
        circle.style.left = x + "px";
        circle.style.top = y + "px";
        const scale = (circles.length - index) / circles.length;
        circle.style.width = `${24 * scale}px`;
        circle.style.height = `${24 * scale}px`;
        circle.x = x;
    });

    function animateCircles() {
        let x = coords.x;
        let y = coords.y;
        circles.forEach(function (circle, index) {
            circle.style.left = x + "px";
            circle.style.top = y + "px";
            const scale = (circles.length - index) / circles.length;
            circle.style.width = `${24 * scale}px`;
            circle.style.height = `${24 * scale}px`;
            circle.x = x;
            circle.y = y;

            const nextCircle = circles[index + 1] || circles[0];
            x += (nextCircle.x - x) * 0.3;
            y += (nextCircle.y - y) * 0.3;
        });
        requestAnimationFrame(animateCircles);
    }

    animateCircles();

    document.body.appendChild(circle);
    circles.push(circle);
}

window.addEventListener("mousemove", function (e) {
    coords.x = e.clientX;
    coords.y = e.clientY;
});

function animateCircles() {
    let x = coords.x;
    let y = coords.y;
    circles.forEach(function (circle, index) {
        circle.style.left = x + "px";
        circle.style.top = y + "px";
        const scale = (circles.length - index) / circles.length;
        circle.style.width = `${24 * scale}px`;
        circle.style.height = `${24 * scale}px`;
        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
    });
    requestAnimationFrame(animateCircles);
}

animateCircles();
