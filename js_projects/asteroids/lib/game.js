// Holds collections of the asteroids, bullets, and your ship.
// Game.prototype.step method calls Game.prototype.move on all the objects, and Game.prototype.checkCollisions checks for colliding objects.
// Game.prototype.draw(ctx) draws the game.
// Keeps track of dimensions of the space; wraps objects around when they drift off the screen.

const Util = require("./utils");
const MovingObject = require("./moving_object");
const Asteroid = require("./asteroid");

function Game() {
  const DIM_X = 500;
  const DIM_Y = 500;
  const NUM_ASTEROIDS = 15;
  const asteroids = this.addAsteroids();
}

Game.prototype.addAsteroids = function () {
  const asteroids = [];
  while (asteroids.length < this.NUM_ASTEROIDS) {
    asteroids.push(Asteroid(this.randomPosition()));
  }
  return asteroids;
};

Game.prototype.randomPosition = function () {
  const randX = this.DIM_X * Math.random();
  const randY = this.DIM_Y * Math.random();
  return [randX, randY];
};

Game.prototype.draw = function(ctx) {
  ctx.clearRect();
  this.asteroids.forEach((el) => {
    el.draw(ctx);
  });

};

Game.prototype.moveObjects = function() {
  this.asteroids.forEach((el) => {
    el.move();
  });
};

module.exports = Game;
