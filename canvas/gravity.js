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

addEventListener("click", () => {
  init();
});

function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
}

function Ball(x, y, velocity, dx, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.acceleration = 1;
    this.velocity = velocity;
    this.dx = dx;
    this.lastPoint = {x: x, y: y};

    this.update = () => {
        if (this.y + this.radius + this.velocity >= innerHeight){
          this.velocity *= -1;
          this.velocity *= 0.95; //friction

        } else {
          this.velocity += this.acceleration;
        }

        if ((this.x - this.radius < 0 || this.x + this.radius > canvas.width)) {
            this.dx *= -1;
        }

        if (this.velocity <= 0.00001 && this.velocity > -0.5){
          this.radius -= 1;
        }
        if (this.radius <= 0){
          this.radius = 0;
        }

        this.lastPoint.x = this.x;
        this.lastPoint.y = this.y;

        this.x += this.dx;
        this.y += this.velocity;
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
        // c.beginPath();
        // c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        // c.fillStyle = this.color;
        // c.fill();
        c.closePath();
    }
}

let particles;

function init() {
    particles = [];

    for (let i = 0; i < 500; i++) {
        particles.push(new Ball((Math.random() * (canvas.width - 200)) + 100, Math.random() * (canvas.height - 100) + 30, 2, (Math.random() -0.5) * 24 , Math.random() * 30 + 10, randomColor(colors)));
    }
}

function animate() {

    requestAnimationFrame(animate);
    c.fillStyle = 'rgba(255,255,255, .5)';
    c.fillRect(0, 0, innerWidth + 2000, innerHeight + 2000);
    // c.clearRect(0, 0, innerWidth + 2000, innerHeight + 2000);
    particles.forEach(particle => {
        particle.update();
    });
}

init();
animate();
