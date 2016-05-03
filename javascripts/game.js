var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.rect(20, 40, 400, 400);
ctx.fillStyle = "#FF0000";
ctx.fill(0,0,0);
ctx.closePath();
var Attractor = function(){
this.position = new PVector(width/2,height/2);
this.mass=20;
this.G=7.5;
this.dragOffset=new PVector(0,0);
this.dragging=false;
this.rollover=false;
};
//This is the attractor module,which allows the computer to calculate gravity.//
Attractor.prototype.calculateAttraction=function(mover) {
var force= PVector.sub(this.position,mover.position);
var distance=force.mag();
distance = constrain(distance,50,100);
if(this.position < 100) {
var strength=-(this.G*this.mass*mover.mass)/(distance*distance); 
}
force.normalize();
var strength=(this.G*this.mass*mover.mass)/(distance*distance);
force.mult(strength);
return force;
};
Attractor.prototype.display=function(){
ellipseMode(CENTER);
strokeWeight(1);
stroke(255,0,0);
if(this.dragging) {
    fill(2, 193, 201);
    }else if(this.rollover) {
fill(1, 0, 23);
} else{fill(255, 0, 0);
}
ellipse(this.position.x,this.position.y,this.mass*3,this.mass*3);
};

var Mover = function(mass, x, y) {
    this.position = new PVector(x, y);
    this.velocity = new PVector(1, 0);
    this.acceleration = new PVector(0, 0);
    this.mass = mass;
    this.angle = 50;
    this.aVelocity = 20;
    this.aAcceleration = 0.51;
};
  
Mover.prototype.applyForce = function(force) {
    var f = PVector.div(force,this.mass);
    this.acceleration.add(f);
};
  // This will update the attraction module//
 
Mover.prototype.update = function() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.aVelocity += this.aAcceleration;
    this.angle += this.aVelocity;
    this.acceleration.mult(0.65);
};

Mover.prototype.display = function() {
    stroke(0);
    strokeWeight(2);
    fill(255, 0, 255, 127);
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
        this.velocity.y *=-2;
        this.position.y = height;
    }
      
};

var movers = [];
var attractor = new Attractor();

for (var i = 0; i < 90 ; i++) {
    movers[i] = new Mover(random(0.08, 2), random(width), random(height));
    
}

var draw = function() {
    background(50, 50, 50);

    attractor.display();
    for (var i = 0; i < movers.length; i++) {
        var force = attractor.calculateAttraction(movers[i]);
        
        movers[i].applyForce(force);

        movers[i].update();
        movers[i].display();
    }
};

 setInterval(draw,10);
