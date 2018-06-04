class PVector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(vec) {
    this.x += vec.x;
    this.y += vec.y;
  }

}

// testing

const vec1 = new PVector(1, 1);
const vec2 = new PVector(3, 3);

console.log(vec1);
vec1.add(vec2);
console.log(vec1);
