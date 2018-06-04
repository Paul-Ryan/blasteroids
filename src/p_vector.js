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

// testing

const vec1 = new PVector(1, 1);
const vec2 = new PVector(3, 3);
const vec3 = new PVector(3, 4);

console.log(vec1);
console.log(vec3);

console.log(vec1.magnitude());
console.log(vec3.magnitude());

vec1.normalize();
vec3.normalize();

console.log(vec1);
console.log(vec3);
