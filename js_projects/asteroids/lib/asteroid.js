// Spacerock. It inherits from MovingObject.
const Util = require("./utils");
const MovingObject = require("./moving_object");


function Asteroid(pos) {
  const COLOR = '#2d2d30';
  const RADIUS = 20;
  MovingObject.call(this, {pos: pos, vel: randomVec(10), radius: RADIUS, color: COLOR});
}

Util.inherits(Asteroid, MovingObject);


// Return a randomly oriented vector with the given length.
function randomVec (length) {
  const deg = 2 * Math.PI * Math.random();
  return Util.scale([Math.sin(deg), Math.cos(deg)], length);
}

// Scale the length of a vector by the given amount.
function scale (vec, m) {
  return [vec[0] * m, vec[1] * m];
}

module.exports = Asteroid;
