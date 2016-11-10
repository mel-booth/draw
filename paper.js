var canvas = document.getElementById('paper1');
var context = canvas.getContext('2d');
var images = []

var mouse = {x: 0, y: 0};
var test = document.createElement('img')
test.src = "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAGQCAYAAABYs5LGAAAcvUlEQ…QIECBQIyDQa9yNSoAAAQIEUgUEeiqnYgQIECBAoEbg/wFWiy6vijmVoAAAAABJRU5ErkJggg==')"
console.log('adding a test image');

// 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAGQCAYAAABYs5LGAAAcvUlEQ…QIECBQIyDQa9yNSoAAAQIEUgUEeiqnYgQIECBAoEbg/wFWiy6vijmVoAAAAABJRU5ErkJggg=='

document.body.appendChild(test)

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

document.getElementById('Save').onclick=function(e){
  e.preventDefault()
  var img = canvas.toDataURL("image/png")
  console.log(img);
  document.write('<img src="'+img+'"/>')
}

//To save images to images array - not working yet.
// document.getElementById('Save').onclick=function(e){
//   e.preventDefault()
//   var img = canvas.toDataURL("image/png")
//   images.push(img)
// }

function convertCanvasToImage(canvas) {
var image = new Image();
image.src = canvas.toDataURL("image/png");
return image;
}
