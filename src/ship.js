import MovingObject from './moving_object.js';
import Bullet from './bullet.js';
import Util from './util.js';
import OtherUtil from './other_util.js';

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
    const direction = Util.norm(this.vel);
    const baseSpeed = Util.scale(direction, Bullet.SPEED);

    const modSpeed = [
      this.vel[0] + baseSpeed[0],
      this.vel[1] + baseSpeed[1]
    ];

    const bullet = new Bullet({
      vel: modSpeed,
      pos: this.pos,
      game: this.game
    });

    console.log(bullet);

    this.game.add(bullet);
    console.log('addded');
  }


  // fireBullet() {
  //   const norm = OtherUtil.norm(this.vel);
  //
  //   if (norm === 0) {
  //     // Can't fire unless moving.
  //     return;
  //   }
  //
  //   const relVel = OtherUtil.scale(
  //     OtherUtil.dir(this.vel),
  //     Bullet.SPEED
  //   );
  //
  //   const bulletVel = [
  //     relVel[0] + this.vel[0], relVel[1] + this.vel[1]
  //   ];
  //
  //   const bullet = new Bullet({
  //     pos: this.pos,
  //     vel: bulletVel,
  //     color: this.color,
  //     game: this.game
  //   });
  //
  //   this.game.add(bullet);
  // }

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
