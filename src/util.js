const Util = {

  // check distance between two objects
  distance(obj1, obj2) {
    const scaleX = Math.pow(obj1.pos[0] - obj2.pos[0], 2);
    const scaleY = Math.pow(obj1.pos[1] - obj2.pos[1], 2);
    return Math.sqrt(scaleX + scaleY);
  },

  normalize(vec) {
    console.log(this.distance(vec));
    const length = this.distance(vec);
    if (length <= 0) return [0, 0];
    const norm = [vec[0] / length, vec[1] / length];
    return norm;
  },

  length(vec) {
    return Math.sqrt((vec[0] * vec[0]) + (vec[1] + vec[1]));
  },

  randomVec(length) {
    const deg = 2 * Math.PI * Math.random();
    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
  },

  // Scale the length of a vector by the given amount.
  scale(vec, m) {
    return [vec[0] * m, vec[1] * m];
  }
};

export default Util;
