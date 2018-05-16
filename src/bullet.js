//
// Write a Bullet subclass of MovingObject. The idea is that when a Bullet.prototype.collideWith an Asteroid, we'll remove the Asteroid from the Game.
//
// The key is Ship.prototype.fireBullet. This should:
//
// Construct a new Bullet instance.
// You will want to use the Ships vel as the direction of travel of the bullet.
// Add the bullet to an array of Game bullets.

import MovingObject from './moving_object.js';

const DEFAULTS = {
  COLOR: "#251351",
  RADIUS: 3,
  SPEED: 10
};

class Bullet extends MovingObject {
  constructor(options) {
    super(options);
    this.color = DEFAULTS.COLOR;
    this.radius = DEFAULTS.RADIUS;
  }
}

export default Bullet;