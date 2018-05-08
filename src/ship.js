import MovingObject from './moving_object.js';

const DEFAULTS = {
  COLOR: "#251351",
  RADIUS: 10,
  SPEED: 0,
  VELOCITY: [0, 0]
};

class Ship extends MovingObject {
  constructor(options = {}) {
    super(options);
    this.color = DEFAULTS.COLOR;
    this.radius = DEFAULTS.RADIUS;
    this.speed = DEFAULTS.SPEED;
    this.vel = DEFAULTS.VELOCITY;
  }

  respawn() {
    this.pos = this.game.center();
    this.vel = 0;
  }
}

export default Ship;
