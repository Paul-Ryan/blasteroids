import Util from './util.js';
import PVector from './p_vector.js';

class MovingObject {
  constructor(options) {
    this.pos = options.pos;
    this.vel = options.vel || new PVector(0, 0);
    this.acc = options.acc || new PVector(...Util.randomAcc());

    this.radius = options.radius;
    this.color = options.color;
    this.game = options.game;
    this.wraps = true;
    this.maxSpeed = 10;
  }

  collideWith(otherObject) {
    // default is to do nothing
  }

  isCollidedWith(otherObject) {
    const size = this.radius + otherObject.radius;
    return Util.objDistance(this, otherObject) < size;
  }

  move(timeDelta) {
    const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA;

      if (this.game.isOutOfBounds(this.pos)) {
        if (this.wraps) {
          this.game.wrapPos(this.pos);
        } else {
          this.game.remove(this);
        }
      }
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    // add velScale later
    this.pos.add(this.vel);
  }


  // move(timeDelta) {
  //   // timeDelta is number of milliseconds since last move
  //   // if the computer is busy the time delta will be larger
  //   // in this case the MovingObject should move farther in this frame
  //   // velocity of object is how far it should move in 1/60th of a second
  //   const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,
  //     offsetX = this.vel[0] * velocityScale,
  //     offsetY = this.vel[1] * velocityScale;
  //
  //     if (this.game.isOutOfBounds(this.pos)) {
  //       if (this.wraps) {
  //         this.game.wrapPos(this.pos);
  //       } else {
  //         this.game.remove(this);
  //       }
  //     }
  //
  //     this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];
  // }

  render(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos.y,
      this.pos.y,
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
  }

}

const NORMAL_FRAME_TIME_DELTA = 1000 / 60;

export default MovingObject;
