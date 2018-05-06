import Game from './game.js';
import GameView from './game_view.js';

document.addEventListener("DOMContentLoaded", () => {
  const gameScreen = document.querySelector('canvas');
  const ctx = gameScreen.getContext("2d");
  gameScreen.width = Game.DIM_X;
  gameScreen.width = Game.DIM_Y;


  const game = new Game();
  const gameView = new GameView(game, ctx);

  gameView.start();
});



  // const obj = new MovingObject(
  //   { pos: [200, 30], vel: [10, 10], radius: 10, color: "#00FF00"}
  // );

  // const asteroid = new Asteroid({ pos: [300, 300] });
  // asteroid.render(ctx);
  // setInterval(() => {
  //   obj.move(ctx);
  //   obj.render(ctx);
  // }, 250);

  // game.draw(ctx);
