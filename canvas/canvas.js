var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// c.fillStyle = 'rgba(255,0,0,0.5)'
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = 'rgba(0,0,255,0.5)'
// c.fillRect(300, 300, 100, 100);
//
// console.log(canvas)
//
// //line
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400,300);
// c.strokeStyle = '#fa34a3';
// c.stroke();
//
//
// //circle
// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle = 'blue'
// c.stroke();
//
//
// for (var i = 0; i < 1000; i++){
//   var x = Math.random() * window.innerWidth;
//   var y = Math.random() * window.innerHeight;
//   c.beginPath();
//   c.arc(x, y, 30, 0, Math.PI * 2, false);
//   var col = "rgba(" + Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() + ")"
//   c.strokeStyle = col
//   c.stroke();
// }
var x = Math.random() * canvas.width;
var dx = (Math.random() - 0.5) * 10;
var y = Math.random() * canvas.height;
var dy = (Math.random() - 0.5) * 10;
var radius = 30;
var leftBorder = 300;
var numCircles = 30;

var green = "#73C557";
var purple = "#C3648E";
var blue = "#5380BE";
var red = "#DB373E";
var yellow = "#F9E298";
var colors = [green, purple, blue, red, yellow];

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    // this.color = "rgba(" + Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() + ")"
    this.color = colors[Math.ceil(Math.random() * 5 - 1)]

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = this.color
        c.fillStyle = this.color
        c.stroke();
        c.fill();
    }

    this.update = function() {
        if (this.x + this.radius > innerWidth || this.x - this.radius < leftBorder) {
            this.dx *= -1;
        }
        // if (this.y + this.radius > innerHeight || this.y - this.radius < 0){
        //   this.dy *= -1;
        // }

        this.x += this.dx;
        this.y += this.dy;

        if (this.y > canvas.height + this.radius + 10) {
            this.y -= (canvas.height + this.radius * 2 + 100);
        }

        this.draw();
    }
}
addEventListener('resize', () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    init();
});

var circleArray;

function init() {
    circleArray = [];
    for (var i = 0; i < numCircles; i++) {
        var radius = 30 * (Math.random() * 2) + 30;
        var x = Math.max(Math.random() * ((canvas.width - radius * 2) - leftBorder) + (radius + leftBorder), 0);
        var dx = (Math.random() - .5) * .5;
        var y = Math.random() * (canvas.height - radius * 2) + radius - canvas.height;
        var dy = Math.random() + .5;

        circleArray.push(new Circle(x, y, dx, dy, radius));
    }
}

function animate() {

    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth + 2000, innerHeight + 2000);

    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }

}
init();
animate();
