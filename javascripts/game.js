var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.rect(100,100, 45, 70);
ctx.fillStyle = "#FF0000";
ctx.fill(255,0,0);
ctx.closePath();

function drawBall(){
	ctx.beginPath();
	ctx.arc(x,y,ballRadius,0,2*Math.PI);
	ctx.fillstyle="#0033FF";
	ctx.fillStroke="#0033FF";
	ctx.Stroke="10"
	ctx.fill();
	ctx.closePath();
	}

var meanOrbitalVelocity = Math.sqrt(focusedObject.mass / Math.sqrt(Math.pow(focusedObject.x - x, 2) + Math.pow(focusedObject.y - y, 2)))

		var velX = (function () {
			var velX = focusedObject.velX;

			velX += Math.cos(deg + Math.PI / 2) * meanOrbitalVelocity;

			return velX;
		})();

		var velY = (function () {
			var velY = focusedObject.velY;

			velY += Math.sin(deg + Math.PI / 2) * meanOrbitalVelocity;

			return velY;
		})();
