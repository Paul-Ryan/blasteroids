import MovingObject from './moving_object.js';
import Util from './util.js';

const DEFAULTS = {
  COLOR: "#7D2E68",
  RADIUS: 40,
  SPEED: 10
};

class Asteroid extends MovingObject {
  constructor(options = {}) {
    super(options);
    this.color = DEFAULTS.COLOR;
    this.radius = DEFAULTS.RADIUS;
    this.vel = options.vel || Util.randomVec(DEFAULTS.SPEED);
  }
}

export default Asteroid;
