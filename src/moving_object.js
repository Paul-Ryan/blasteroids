
class MovingObject {
  constructor(attributesObj) {
    this.pos = attributesObj.pos;
    this.vel = attributesObj.vel;
    this.radius = attributesObj.radius;
    this.color = attributesObj.color;
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

export default MovingObject;
