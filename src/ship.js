import MovingObject from './moving_object.js';
import Bullet from './bullet.js';
import Util from './util.js';

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

  fireBullet() {
    // console.log(this.vel);
    const direction = Util.normalize(this.vel);

    // console.log('dir: ', direction);
    const bullet = new Bullet({
      vel: this.vel,
      pos: this.pos
    });

  }

  power(impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  }

  respawn() {
    this.pos = this.game.center();
    this.vel = [0, 0];
  }
}

export default Ship;
