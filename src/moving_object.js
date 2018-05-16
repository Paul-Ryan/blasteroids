import Util from './util.js';

class MovingObject {
  constructor(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
    this.game = options.game;
  }

  isCollidedWith(otherObject) {
    const size = this.radius + otherObject.radius;
    return Util.objDistance(this, otherObject) < size;
  }

  collideWith(otherObject) {
    // default is to do nothing
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

  move(ctx) {
    this.game.wrapPos(this.pos);
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
  }

}

export default MovingObject;
