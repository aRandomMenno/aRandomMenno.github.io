class Spark {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 3;
        this.vy = Math.random() * 1.35;
        this.gravity = 0.18;
        this.size = Math.random() * 4 + 2;
        this.alpha = 1;
        this.color = '#ff2bbf';
    }

    update() {
        this.x += this.vx;
        this.vy += this.gravity;
        this.y += this.vy;
        this.alpha *= 0.99;
        this.size *= 1.045;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('.logo');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.pointerEvents = 'none';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);

    let sparks = [];

    logo.addEventListener('mouseenter', () => {
        if (sparks.length === 0) {
            createSpark(logo);
        }
        // createSpark(logo)
    });

    function createSpark(logo) {
        const rect = logo.getBoundingClientRect();
        const x = rect.left + Math.random() * rect.width;
        const y = rect.top + Math.random() * rect.height;
        sparks = [new Spark(x, y)];
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        sparks = sparks.filter(spark => spark.alpha > 0.1);
        sparks.forEach(spark => {
            spark.update();
            spark.draw(ctx);
        });

        requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
});