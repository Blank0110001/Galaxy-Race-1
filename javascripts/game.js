var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.rect(100,100, 45, 70);
ctx.fillStyle = "#FF0000";
ctx.fill(255,0,0);
ctx.closePath();

function = drawBall() {
  ctx.beginPath();
  ctx.ellipse(0,0,canvas.width,canvas.height);
  ctx.fillStyle = "#FF0000";
  ctx.fill(255,0,0);
  ctx.closePath (); 
};


