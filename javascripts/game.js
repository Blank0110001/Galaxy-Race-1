var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.rect(100,100, 41, 70);
ctx.fillStyle = "#FF0000";
ctx.fill(255,0,0);
ctx.closePath();

var points = [{x:45, y:64}, {x:56, y:98}, {x:23, y:44}];
var len = points.length;
for(var i = 0; i < len; i++) {
    alert(points[i].x + ' ' + points[i].y);               
}
​
// to add more points, push an object to the array:
points.push({x:56, y:87});
