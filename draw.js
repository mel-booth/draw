var canvas = document.getElementById('paper')
var context = canvas.getContext('2d')
var mousedown = false
var lastx = null
var lasty = null

function defaultCanvas(){
  context.lineWidth = 5
  context.lineCap = 'round'
  context.strokeStyle = '#000000'
}

function onMouseDown(evt){
  mousedown = true
}

function onMouseUp(evt){
  mousedown = false
}

function onMouseMove(evt){
  var x = evt.clientX
  var y = evt.clientY
  evt.preventDefault()
  if (mousedown){
    draw(x, y)
  }
}

function draw(x, y){
  context.beginPath()
  if (lastx > 0 && lasty >0){
    context.moveTo(lastx, lasty)
  }
  context.lineTo(x, y)
  context.stroke()
  context.closePath()
  lastx = x
  lasty = y
}
canvas.addEventListener('mousedown', onMouseDown, false)
canvas.addEventListener('mouseup', onMouseUp, false)
canvas.addEventListener('mousemove', onMouseMove, false)

defaultCanvas()
