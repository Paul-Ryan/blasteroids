// Game will be in charge of holding all of our moving objects. It will also contain the logic for iterating through these objects and calling their corresponding move methods.

import Asteroid from './asteroid.js';
import Ship from './ship.js';
import Bullet from './bullet.js';

class Game {
  constructor() {
    this.asteroids = [];
    this.bullets = [];
    this.ships = [];

    this.addAsteroids();
  }

  add(obj) {
    if (obj instanceof Ship) {
      this.ships.push(obj);
    } else if (obj instanceof Asteroid) {
      this.asteroids.push(obj);
    } else if (obj instanceof Bullet) {
      this.bullets.push(obj);
    } else {
      throw new Error ("unknown object");
    }
  }

  addAsteroids() {
    while (this.asteroids.length < Game.NUM_ASTEROIDS) {
      let rock = new Asteroid({
        pos: this.randomPos(),
        game: this
      });

      this.add(rock);
    }
  }

  addShips() {
    const ship = new Ship({
      pos: this.center(),
      game: this
    });

    this.add(ship);

    return ship;
  }

  allGameObjects() {
    return [].concat(this.asteroids, this.ships, this.bullets);
  }

  center() {
    return [Game.DIM_X / 2, Game.DIM_Y / 2];
  }

  // investigate fill rect
  draw(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    const objects = this.allGameObjects();
    objects.forEach(object => object.render(ctx));
  }

  moveObjects(ctx) {
    const objects = this.allGameObjects();
    objects.forEach(object => object.move(ctx));
  }

  checkCollisions() {
    const objects = this.allGameObjects();
    for (let i = 0; i < objects.length; i++) {
      for (let j = 0; j < objects.length; j++) {
        if (i === j) continue;

        let object1 = objects[i];
        let object2 = objects[j];

        if (object1.isCollidedWith(object2)) {
          object1.collideWith(object2);
        }
      }
    }
  }

  randomPos() {
    const x = Math.floor(Math.random() * (Game.DIM_X + 1));
    const y = Math.floor(Math.random() * (Game.DIM_Y + 1));
    return [x, y];
  }

  remove(gameObject) {
    if (gameObject instanceof Asteroid) {
      const idx = this.asteroids.indexOf(gameObject);
      if (idx !== -1) this.asteroids.splice(idx, 1);
    } else if (gameObject instanceof Ship) {
      const idx = this.ships.indexOf(gameObject);
      if (idx !== -1) this.ships.splice(idx, 1);
    }
  }

  step(ctx) {
    this.moveObjects(ctx);
    this.checkCollisions();
  }

  wrapPos(pos) {
    if (pos[0] < 0) {
      pos[0] = Game.DIM_X;
    } else if (pos[0] > Game.DIM_X) {
      pos[0] = (pos[0] % Game.DIM_X);
    }

    if (pos[1] < 0) {
      pos[1] = Game.DIM_Y;
    } else if (pos[1] > Game.DIM_Y) {
      pos[1] = (pos[1] % Game.DIM_Y);
    }
  }
}

Game.DIM_X = 1000;
Game.DIM_Y = 600;
Game.NUM_ASTEROIDS = 6;

export default Game;
