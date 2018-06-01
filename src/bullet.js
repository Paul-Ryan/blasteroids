import MovingObject from './moving_object.js';
import Asteroid from './asteroid.js';

class Bullet extends MovingObject {
  constructor(options) {
    super(options);
    this.color = Bullet.COLOR;
    this.radius = Bullet.RADIUS;
    this.Wraps = false;
  }

  collideWith(otherObject) {
    if (otherObject instanceof Asteroid) {
      this.game.remove(otherObject);
      this.game.remove(this);
    }
  }
}
Bullet.SPEED = 10;
Bullet.COLOR = "#251351";
Bullet.RADIUS = 40;

export default Bullet;
