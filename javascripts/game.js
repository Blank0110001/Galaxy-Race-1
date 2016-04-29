var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.rect(100,100, 45, 70);
ctx.fillStyle = "#FF0000";
ctx.fill(255,0,0);
ctx.closePath();
Mover.prototype.display = function() {
  stroke(0);
  strokeWeight(2);
  fill(255, 0, 0, 0);
  ellipse(this.position.x, this.position.y, this.mass*16, this.mass*16);
};
