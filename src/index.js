console.log('webpack is running');

import MovingObject from './moving_object.js';

const mo = new MovingObject(
  { pos: [30, 30], vel: [10, 10], radius: 5, color: "#00FF00"}
);

  const gameScreen = document.querySelector('canvas');
  const ctx = gameScreen.getContext("2d");
  console.log(gameScreen);
  console.log(ctx);
  const obj = new MovingObject(
    { pos: [30, 30], vel: [10, 10], radius: 10, color: "#00FF00"}
  );

  obj.render(ctx);
  window.ctx = ctx;

window.MovingObject = MovingObject;
