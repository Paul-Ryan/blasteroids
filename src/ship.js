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

    // this.fireBullet = this.fireBullet.bind(this);
  }

  fireBullet() {
    const direction = Util.norm(this.vel);
    const baseSpeed = Util.scale(direction, Bullet.SPEED);

    const modSpeed = [
      this.vel[0] + baseSpeed[0],
      this.vel[1] + baseSpeed[1]
    ];

    const bullet = new Bullet({
      pos: this.game.center(), //this.pos,
      vel: modSpeed,
      game: this.game
    });

    this.game.add(bullet);
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
