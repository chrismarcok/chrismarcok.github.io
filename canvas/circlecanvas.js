var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var black = "#000";
var grey = "#C0C0C0";
var lightgrey = "	#778899";
var darkgrey = "#2F4F4F	";
var accent = "#FF1CAE";
var colors = [accent, black, grey, darkgrey, lightgrey];

var mouse = {
    x: canvas.width / 2,
    y: canvas.height / 2
}


addEventListener("mousemove", event => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});

addEventListener('resize', () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    init();
});

function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
}

function Particle(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.radians = Math.random() * 100;
    this.velocity = .015;
    this.distanceFromCenter = randomIntFromRange(50, 300);
    this.lastPoint = {
        x: 0,
        y: 0
    };
    this.lastMouse = {
        x: x,
        y: y
    };

    this.update = () => {
        this.lastPoint = {
            x: this.x,
            y: this.y
        };

        this.lastMouse.x += (mouse.x - this.lastMouse.x) * .1;
        this.lastMouse.y += (mouse.y - this.lastMouse.y) * .1;

        if (this.lastMouse.x < 10 || this.lastMouse.x > canvas.width - 10 || this.lastMouse.y < 10 || this.lastMouse.y > canvas.height - 10){
          this.lastMouse.x = canvas.width / 2;
          mouse.x = canvas.width / 2;
          this.lastMouse.y = canvas.height / 2;
          mouse.y = canvas.height / 2;
        }

        this.x = this.lastMouse.x + Math.sin(this.radians) * this.distanceFromCenter;
        this.y = this.lastMouse.y + Math.cos(this.radians) * this.distanceFromCenter;
        this.radians += this.velocity;
        this.draw();
    }

    this.draw = () => {
        c.beginPath();
        c.strokeStyle = this.color;
        c.lineWidth = this.radius;
        c.lineCap="round";
        c.moveTo(this.lastPoint.x, this.lastPoint.y);
        c.lineTo(this.x, this.y);

        c.stroke();

        // c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        // c.fillStyle = this.color;
        // c.fill();
        c.closePath();
    }
}

let particles;

function init() {
    particles = [];

    for (let i = 0; i < 100; i++) {
        const radius = (Math.random() * 2) + 6;
        particles.push(new Particle(canvas.width / 2, canvas.height / 2, radius, randomColor(colors)));
    }
}

function animate() {

    requestAnimationFrame(animate);
    c.fillStyle = 'rgba(255,255,255, .05)';
    c.fillRect(0, 0, innerWidth + 2000, innerHeight + 2000);
    particles.forEach(particle => {
        particle.update();
    });
}

init();
animate();
