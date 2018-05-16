// GameView class will be responsible for keeping track of the canvas context, the game, and the ship. GameView will be in charge of setting an interval to animate your game. In addition, it will eventually bind key handlers to the ship so that we can move it around.
import key from '../vendor/keymaster.js';


class GameView {
  constructor(game, ctx) {
    this.game = game;
    this.ctx = ctx;
    this.ship = this.game.addShips();
  }

  bindKeyHandlers() {
    const ship = this.ship;
    Object.keys(GameView.MOVES).forEach((k) => {
      const move = GameView.MOVES[k];
      key(k, () => { ship.power(move); });
    });

    key("space", () => { ship.fireBullet(); });
  }

  start() {
    this.bindKeyHandlers();

    setInterval(() => {
      this.game.step(this.ctx);
      this.game.draw(this.ctx);
    }, 20);
  }

}

GameView.MOVES = {
  'up': [0, -1],
  'down': [0, 1],
  'left': [-1, 0],
  'right': [1, 0]
};

export default GameView;
