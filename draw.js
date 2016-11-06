var canvas = document.getElementbyId('paper')
var context = canvas.getContext('2d')

function defaultCanvas(){
  context.lineWidth = 5
  context.lineCap = 'round'
  context.strokeStyle = '#000000'
}
