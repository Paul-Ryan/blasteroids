// Game will be in charge of holding all of our moving objects. It will also contain the logic for iterating through these objects and calling their corresponding move methods.

import Asteroid from './asteroid.js';
import Ship from './ship.js';

class Game {
  constructor() {
    this.asteroids = [];
    this.ships = [];

    this.addAsteroids();
    this.addShips();
  }

  addAsteroids() {
    while (this.asteroids.length < Game.NUM_ASTEROIDS) {
      let rock = new Asteroid({
        pos: this.randomPos(),
        game: this
      });

      this.asteroids.push(rock);
    }
  }

  addShips() {
    const ship = new Ship({
      pos: [300, 300],
      game: this
    });
    console.log(ship);
    this.ships.push(ship);
  }

  allGameObjects() {
    const objects = [].concat(this.asteroids, this.ships);
    return objects;
  }

  draw(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    const objects = this.allGameObjects();
    objects.forEach(object => object.render(ctx));
  }

  moveObjects(ctx) {
    this.asteroids.forEach(asteroid => asteroid.move(ctx));
  }

  checkCollisions() {
    for (let i = 0; i < this.asteroids.length; i++) {
      for (let j = 0; j < this.asteroids.length; j++) {
        if (i === j) continue;
        if (this.asteroids[i].isCollidedWith(this.asteroids[j])) {
            let asteroid1 = this.asteroids[i];
            let asteroid2 = this.asteroids[j];
            this.remove(asteroid1);
            this.remove(asteroid2);
        }
      }
    }
  }

  randomPos() {
    const x = Math.floor(Math.random() * (Game.DIM_X + 1));
    const y = Math.floor(Math.random() * (Game.DIM_Y + 1));
    return [x, y];
  }

  remove(asteroid) {
    const idx = this.asteroids.indexOf(asteroid);
    if (idx !== -1) this.asteroids.splice(idx, 1);
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
