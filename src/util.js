const Util = {
  randomVec(length) {
    const deg = 2 * Math.PI * Math.random();
    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
  },
  // Scale the length of a vector by the given amount.
  scale(vec, m) {
    return [vec[0] * m, vec[1] * m];
  },
  // check distance between two objects
  // Dist([x_1, y_1], [x_2, y_2]) = sqrt((x_1 - x_2) ** 2 + (y_1 - y_2) ** 2)
  distance(obj1, obj2) {
    return Math.sqrt(Math.pow((obj1.pos[0] - obj2.pos[0]), 2) + Math.pow((obj1.pos[1] - obj2.pos[1]), 2))
  }
};

export default Util;
