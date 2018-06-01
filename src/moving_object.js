import Util from './util.js';

class MovingObject {
  constructor(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
    this.game = options.game;
    this.Wraps = true;
  }

  collideWith(otherObject) {
    // default is to do nothing
  }

  isCollidedWith(otherObject) {
    const size = this.radius + otherObject.radius;
    return Util.objDistance(this, otherObject) < size;
  }

  move(ctx) {
    this.game.wrapPos(this.pos);
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
  }


  move(timeDelta) {
    // timeDelta is number of milliseconds since last move
    // if the computer is busy the time delta will be larger
    // in this case the MovingObject should move farther in this frame
    // velocity of object is how far it should move in 1/60th of a second
    const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,
        offsetX = this.vel[0] * velocityScale,
        offsetY = this.vel[1] * velocityScale;

    this.game.wrapPos(this.pos);
    this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];
  }

  render(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
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
