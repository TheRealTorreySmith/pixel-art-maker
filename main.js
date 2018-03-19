document.addEventListener("DOMContentLoaded", function() {

//Sets the canvas and adds the individual pixels into the canvas
var canvas = document.getElementsByClassName('canvas')[0];
for (var i = 0; i < 1600; i++) {
  var divPix = document.createElement('div');
  divPix.className = 'pixels';
  canvas.appendChild(divPix);
}

//Defines the 20 colors in the color palette
//Adds the 20 color boxes to the color palette
var colors = ['#FF0000','#FFA500','#FFFF00','#00FF00','#32CD32','#006400','#0000FF','#1E90FF','#40E0D0','#00FFFF',
'#4B0082','#8A2BE2','#FF00FF','#EE82EE','#D2B48C','#8B4513','#FFFFFF','#D3D3D3','#708090','#000000'];
var palette = document.getElementsByClassName('palette')[0];
for (var j = 0; j < 20; j++) {
  var divCol = document.createElement('div');
  divCol.className = 'colors';
  palette.appendChild(divCol);
  divCol.style.backgroundColor = colors[j];
}

//Sets the pen color as a default color of black
//The color black will change when someone clicks on a different color in the color palette
var penColor = 'black';
function setPenColor(event) {
  penColor = event.target.style.backgroundColor;
}

//Sets the drag to false and then changes it to true as the start event is initiated
var drag = false;
function start(event) {
  if (event.target.className == 'pixels') {
  event.target.style.backgroundColor = penColor;
  drag = true;
  }
}

//Continues to apply the color as the mouse drags until the "mouseup" event
function dragging(event) {
  if (drag === true && event.target.className == 'pixels') {
    event.target.style.backgroundColor = penColor;
  }
}

//Initiates the "mouseup" event, thus ending the drag event
//Resets the drag equal to false
function end(event) {
  if (event.target.className == 'pixels') {
  event.target.style.backgroundColor = penColor;
  drag = false;
  }
}

//Event listener for the click on a particular color in the color palette
palette.addEventListener("click", setPenColor);
//Event listener that "starts" the drag event with the "mousedown"
canvas.addEventListener("mousedown", start);
//Event listener that continues to apply color as the mouse drags through the pixels
canvas.addEventListener("mouseover", dragging);
//Event listener that "ends" the dragging event with the "mouseup"
canvas.addEventListener("mouseup", end);
});
