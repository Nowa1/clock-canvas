let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

function clock() {
    var date = new Date();
    ctx.save()
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    cirle()

    ctx.beginPath();
    let hours = date.getHours();
    ctx.strokeStyle = "black";
    drawHand(100, hours * 30);

    let minutes = date.getMinutes();
    ctx.strokeStyle = "black";
    drawHand(130, minutes * 6);

    let seconds = date.getSeconds();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;
    drawHandSec(140, seconds * 6);

    ctx.closePath();
    ctx.restore()
}

function cirle() {
    ctx.save();
    ctx.beginPath();
    ctx.arc(257, 241, 185, 0, 2 * Math.PI, false);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
    ctx.restore();
    ctx.beginPath();
    ctx.arc(255, 240, 200, 0, 2 * Math.PI);
    ctx.lineWidth = 51;
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(257, 241, 6, 0, 2 * Math.PI, false);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
    
    numbers();
}

function numbers() {
    ctx.font = "27px serif";
    let i = 12;
    while (i > 0) {
        ctx.save();
        ctx.translate(250, 250);
        let angle = (i * 30) * Math.PI / 180; 
        ctx.rotate(angle);
        ctx.translate(0, (-150));
        ctx.rotate(-angle);
        ctx.fillText(i, 0, 0);
        ctx.restore();
        i--;
    }
}

function drawHand(length, angle) {
    ctx.save();
    ctx.beginPath();
    ctx.translate(257, 241);
    ctx.rotate(-180 * Math.PI / 180); 
    ctx.rotate(angle * Math.PI / 180);
    ctx.moveTo(0, 0);
    ctx.lineTo(7, 15); 
    ctx.lineTo(0, length); 
    ctx.lineTo(-7, 15); 
    ctx.lineTo(0, 0);
    ctx.fill();
    ctx.closePath();
    ctx.restore();
}

function drawHandSec(length, angle) {
    ctx.save();
    ctx.beginPath();
    ctx.translate(257, 241);
    ctx.rotate(-180 * Math.PI / 180); 
    ctx.rotate(angle * Math.PI / 180);
    ctx.moveTo(0, 0);
    ctx.lineTo(0, length);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
}



setInterval(() => clock(), 1000)