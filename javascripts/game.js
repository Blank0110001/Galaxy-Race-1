var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.rect(100,100, 45, 70);
ctx.fillStyle = "#FF0000";
ctx.fill(255,0,0);
ctx.closePath();
var Mover = function(m, x, y) {
    this.mass = m;
    this.position = new PVector(x, y);
    this.velocity = new PVector(0, 0);
    this.acceleration = new PVector(0, 0);
};
  
Mover.prototype.applyForce = function(force) {
  var f = PVector.div(force, this.mass);
  this.acceleration.add(f);
};
  
Mover.prototype.update = function() {
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.acceleration.mult(0);
};

Mover.prototype.display = function() {
  stroke(0);
  strokeWeight(2);
  fill(255,0, 0, 0);
  ellipse(this.position.x, this.position.y, this.mass*16, this.mass*16);
};

Mover.prototype.checkEdges = function() {
  if (this.position.x > width) {
    this.position.x = width;
    this.velocity.x *= -1;
  } else if (this.position.x < 0) {
    this.velocity.x *= -1;
    this.position.x = 0;
  }
  if (this.position.y > height) {
    this.velocity.y *= -1;
    this.position.y = height;
  }
};

var movers = [];

for (var i = 0; i < 20; i++) {
    movers[i] = new Mover(random(0.1, 5), 0, 0);
}

var draw = function() {
  background(50, 50, 50);
  
  for (var i = 0; i < movers.length; i++) {
    var wind = new PVector(0.01, 0);
    var gravity = new PVector(0, 0.1*movers[i].mass);
    
    var c = 0.01;
    var normal = 1;
    var frictionMag = c * normal;
    var friction = movers[i].velocity.get();
    friction.mult(-1);
    friction.normalize();
    friction.mult(frictionMag);

    movers[i].applyForce(friction);
    movers[i].applyForce(wind);
    movers[i].applyForce(gravity);
    movers[i].update();
    movers[i].display();
    movers[i].checkEdges();
  }
};
