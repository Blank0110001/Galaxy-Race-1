var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.rect(100,100, 41, 70);
ctx.fillStyle = "#FF0000";
ctx.fill(255,0,0);
ctx.closePath();

var points = [{x:110, y:110}, {x:115, y:98}, {x:120, y:94}];
var len = points.length;

