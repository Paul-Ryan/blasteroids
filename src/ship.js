import MovingObject from './moving_object.js';

const DEFAULTS = {
  COLOR: "#251351",
  RADIUS: 10,
  VELOCITY: [0, 0]
};

class Ship extends MovingObject {
  constructor(options = {}) {
    super(options);
    this.color = DEFAULTS.COLOR;
    this.radius = DEFAULTS.RADIUS;
    this.vel = DEFAULTS.VELOCITY;
  }

  move(impulse) {
    // console.log(impulse);
  }

  respawn() {
    this.pos = this.game.center();
    this.vel = [0, 0];
  }
}

export default Ship;
