document.addEventListener("DOMContentLoaded", function() {

var canvas = document.getElementsByClassName('canvas')[0];
for (var i = 0; i < 1600; i++) {
  var divPix = document.createElement('div');
  divPix.className = 'pixels';
  canvas.appendChild(divPix);
}


var colors = ['#FF0000','#FFA500','#FFFF00','#00FF00','#32CD32','#006400','#0000FF','#1E90FF','#40E0D0','#00FFFF',
'#4B0082','#8A2BE2','#FF00FF','#EE82EE','#D2B48C','#8B4513','#FFFFFF','#D3D3D3','#708090','#000000'];
var palette = document.getElementsByClassName('palette')[0];
for (var j = 0; j < 20; j++) {
  var divCol = document.createElement('div');
  divCol.className = 'colors';
  palette.appendChild(divCol);
  divCol.style.backgroundColor = colors[j];
}

var penColor = 'black';
function setPenColor(event) {
  penColor = event.target.style.backgroundColor;
  console.log(penColor);
}



function setPixelColor(event) {
var pixelColor = penColor;
  console.log(pixelColor);
  event.target.style.backgroundColor = pixelColor;
}


palette.addEventListener("click", setPenColor);
canvas.addEventListener("click", setPixelColor);


});
