var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var black = "#000";
var grey = "#C0C0C0";
var lightgrey = "	#778899";
var darkgrey = "#2F4F4F	";
var accent = "#FF6F59";
var colors = [accent, black, grey, darkgrey, lightgrey];

var mouse = {
    x: canvas.width / 2,
    y: canvas.height / 2
}


addEventListener("mousemove", event => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});


var width = $(window).width(),
    height = $(window).height();

addEventListener('resize', () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    if($(window).width() != width && $(window).height() != height){
      init();
    }
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
    this.distanceFromCenter = randomIntFromRange(50, Math.max(canvas.width,canvas.height));
    this.velocity = 1/this.distanceFromCenter;
    this.bool = false;
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

        this.lastMouse.x += (mouse.x - this.lastMouse.x) * .00002;
        this.lastMouse.y += (mouse.y - this.lastMouse.y) * .00002;

        this.x = this.lastMouse.x + Math.sin(this.radians) * this.distanceFromCenter;
        this.y = this.lastMouse.y + Math.cos(this.radians) * this.distanceFromCenter;
        this.radians += this.velocity;
        if (this.bool){
            this.draw();
        }
        else {
            this.bool = true;
        }
    }

    this.draw = () => {
        c.beginPath();
        c.strokeStyle = this.color;
        c.lineWidth = this.radius;
        c.lineCap="round";
        c.moveTo(this.lastPoint.x, this.lastPoint.y);
        c.lineTo(this.x, this.y);
        c.stroke();
        c.closePath();
    }
}

let particles;

function init() {
    particles = [];

    for (let i = 0; i < 300; i++) {
        const radius = (Math.random() * 2) + 6;
        particles.push(new Particle(innerWidth, innerHeight, radius, randomColor(colors)));
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
