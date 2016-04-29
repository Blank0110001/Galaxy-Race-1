var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.rect(100,100, 45, 70);
ctx.fillStyle = "#FF0000";
ctx.fill(255,0,0);
ctx.closePath();
var ballRadius=20
var ball= draw(){
  ctx.beginPath();
  ctx.ellipse(90,110,46,73)
  ctx.fillStyle = "#FF0000";
ctx.fill(255,0,0);
}
