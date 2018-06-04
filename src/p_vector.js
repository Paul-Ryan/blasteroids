class PVector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(vec) {
    this.x += vec.x;
    this.y += vec.y;
  }

  divide(scalar) {
    this.x /= scalar;
    this.y /= scalar;
  }

  limit(maxVal) {
    // console.log(this.magnitude());
    if (this.magnitude() > maxVal) {
      this.normalize();
      this.scale(maxVal);
    }
  }

  magnitude() {
    return Math.sqrt(this.x*this.x + this.y*this.y);
  }

  normalize() {
    var m = this.magnitude();
    if (m > 0) {
      this.divide(m);
    }
  }

  scale(scalar) {
    this.x *= scalar;
    this.y *= scalar;
  }

  subtract(vec) {
    this.x -= vec.x;
    this.y -= vec.y;
  }

}

export default PVector;
