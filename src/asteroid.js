import MovingObject from './moving_object.js';
import Util from './util.js';

const DEFAULTS = {
  COLOR: "#e0e0e0",
  RADIUS: 10,
  SPEED: 10
};

class Asteroid extends MovingObject {
  constructor(options = {}) {
    this.color = DEFAULTS.COLOR;
    this.radius = DEFAULTS.RADIUS;
    this.vel = options.vel || Util.randomVec(DEFAULTS.SPEED);
    super(options);
  }
}
