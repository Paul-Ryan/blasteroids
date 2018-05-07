// Game will be in charge of holding all of our moving objects. It will also contain the logic for iterating through these objects and calling their corresponding move methods.

import Asteroid from './asteroid.js';

class Game {
  constructor() {
    this.asteroids = [];
    this.addAsteroids();
  }

  draw(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    this.asteroids.forEach(asteroid => asteroid.render(ctx));
  }

  moveObjects(ctx) {
    this.asteroids.forEach(asteroid => asteroid.move(ctx));
  }

  addAsteroids() {
    while (this.asteroids.length < Game.NUM_ASTEROIDS) {
      let pos = this.randomPos();
      let rock = new Asteroid({pos, game: this});
      this.asteroids.push(rock);
    }
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
