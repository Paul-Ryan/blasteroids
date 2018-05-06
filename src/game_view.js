// GameView class will be responsible for keeping track of the canvas context, the game, and the ship. GameView will be in charge of setting an interval to animate your game. In addition, it will eventually bind key handlers to the ship so that we can move it around.

class GameView {
  constructor(game, ctx) {
    this.game = game;
    this.ctx = ctx;
  }

  start() {
    setInterval(() => {
      this.game.moveObjects(this.ctx);
      this.game.draw(this.ctx);
    }, 20);
  }
}

export default GameView;
