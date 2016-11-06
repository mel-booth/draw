var canvas = document.getElementById('paper');
var context = canvas.getContext('2d');

var mouse = {x: 0, y: 0};

canvas.addEventListener('mousemove', function(evt) {
  mouse.x = evt.pageX - this.offsetLeft;
  mouse.y = evt.pageY - this.offsetTop;
}, false);

context.lineWidth = 3;
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
