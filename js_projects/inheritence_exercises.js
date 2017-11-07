Function.prototype.inherits = function(parent) {
  function Surrogate(){}
  Surrogate.prototype = parent.prototype;
  this.prototype = new Surrogate;
  this.prototype.constructor = this;
};

Function.prototype.inherits = function (parent) {
  this.prototype = Object.create(parent.prototype);
  this.prototype.constructor = this;
};

function MovingObject () {
  MovingObject.prototype.move = function () {
    console.log("moved! you win!");
  };
}

function Ship () {
  Ship.prototype.shipping = function () {
    console.log("shipped! you win!");
  };
}

function Asteroid () {
  Asteroid.prototype.roids = function () {
    console.log("JUICED!");
  };
}


Ship.inherits(MovingObject);
Asteroid.inherits(MovingObject);

const movingObject = new MovingObject();
const ship = new Ship();
const asteroid = new Asteroid();
