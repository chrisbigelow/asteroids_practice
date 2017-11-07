// Base class for anything that moves.
// Most important methods are MovingObject.prototype.move, MovingObject.prototype.draw(ctx), MovingObject.prototype.isCollidedWith(otherMovingObject).


function MovingObject(options) {
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
}


MovingObject.prototype.draw = function (ctx) {

  ctx.beginPath();
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI, true);
  ctx.strokeStyle = "green";
  ctx.stroke();
  ctx.fillStyle = "blue";
  ctx.fill();
};

MovingObject.prototype.move = function () {
  this.pos[1] += this.vel[1];
  this.pos[0] += this.vel[0];
};


module.exports = MovingObject;
