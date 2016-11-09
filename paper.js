var canvas = document.getElementById('paper1');
var context = canvas.getContext('2d');

var mouse = {x: 0, y: 0};

canvas.addEventListener('mousemove', function(evt) {
  mouse.x = evt.pageX - this.offsetLeft;
  mouse.y = evt.pageY - this.offsetTop;
}, false);

context.lineWidth = 2;
context.lineCap = 'round';
context.strokeStyle = '#000000';

canvas.addEventListener('mousedown', function(evt) {
    context.beginPath();
    context.moveTo(mouse.x, mouse.y);

    canvas.addEventListener('mousemove', draw, false);
}, false);

canvas.addEventListener('mouseup', function() {
    canvas.removeEventListener('mousemove', draw, false);
}, false);

var draw = function() {
    context.lineTo(mouse.x, mouse.y);
    context.stroke();
}

// var drawButton = document.getElementById('draw').addEventListener('click', previousImageData){
//   var previousImageData = context.getImageData(left, top, 500px, 10px)
// })

//How to show certain area of canvas...doesn't work. Yet
var drawButton = document.getElementById("draw")
draw.addEventListener("click", previousImageData())

var previousImageData = function(context){
  context.getImageData(0px, 0px, 500px, 20px)
}
