var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.rect(100,100, 41, 70);
ctx.fillStyle = "#FF0000";
ctx.fill(255,0,0);
ctx.closePath();

var point= getPoint();
var ctx =canvas.getContext("2d");
ctx.beginPath();
ctx.point(110,110);
ctx.fillStyle = "#FF0000";
ctx.fill(255,0,0);
ctx.closePath ();
