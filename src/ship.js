import MovingObject from './moving_object.js';

const DEFAULTS = {
  COLOR: "#251351",
  RADIUS: 10,
  SPEED: 0
};

class Ship extends MovingObject {
  constructor(options = {}) {
    super(options);
    this.color = DEFAULTS.COLOR;
    this.radius = DEFAULTS.RADIUS;
    this.speed = DEFAULTS.SPEED;
  }
}

export default Ship;
