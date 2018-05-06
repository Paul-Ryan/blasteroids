// Game will be in charge of holding all of our moving objects. It will also contain the logic for iterating through these objects and calling their corresponding move methods.

import Asteroid from './asteroid.js';

// const DEFAULTS = {
//   DIM_X: 1000,
//   DIM_Y: 600,
//   NUM_ASTEROIDS: 8
// };

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
      let rock = new Asteroid({pos});
      this.asteroids.push(rock);
    }
  }

  randomPos() {
    const x = Math.floor(Math.random() * (Game.DIM_X + 1));
    const y = Math.floor(Math.random() * (Game.DIM_Y + 1));
    return [x, y];
  }
}

Game.DIM_X = 1000;
Game.DIM_Y = 600;
Game.NUM_ASTEROIDS = 8;

export default Game;
