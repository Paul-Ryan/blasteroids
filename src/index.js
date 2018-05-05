console.log('webpack is running');

import Game from './game.js';
import MovingObject from './moving_object.js';
import Asteroid from './asteroid.js';

  const gameScreen = document.querySelector('canvas');
  const ctx = gameScreen.getContext("2d");

  // const obj = new MovingObject(
  //   { pos: [200, 30], vel: [10, 10], radius: 10, color: "#00FF00"}
  // );

  const asteroid = new Asteroid({ pos: [300, 300] });
  asteroid.render(ctx);
  // setInterval(() => {
  //   obj.move(ctx);
  //   obj.render(ctx);
  // }, 250);

  const game = new Game();
  game.draw(ctx);

window.MovingObject = MovingObject;
