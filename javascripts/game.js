var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.rect(0,0, 50, 50);
ctx.fillStyle = "#FF0000";
ctx.fill(255,0,0);
ctx.closePath();
