var canvas = document.getElementbyId('paper')
var context = canvas.getContext('2d')

function defaultCanvas(){
  context.lineWidth = 5
  context.lineCap = 'round'
  context.strokeStyle = '#000000'
}

function onMouseUp(evt){
  mouseup = false
}

function onMouseDown(evt){
  mousedown = true

}

function onMouseMove(evt){
  var x = evt.clientX
  var y = evt.clientY
  if (mousedown){
    draw(x, y)
  }
}

function draw(x, y){

}

canvas.addEventListener('mousedown', onMouseDown, false)
canvas.addEventListener('mouseup', onMouseUp, false)
canvas.addEventListener('mousemove', onMouseMove, false)

defaultCanvas()
