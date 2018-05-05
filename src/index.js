console.log('webpack is running');

import MovingObject from './moving_object.js';

  const gameScreen = document.querySelector('canvas');
  const ctx = gameScreen.getContext("2d");

  const obj = new MovingObject(
    { pos: [200, 30], vel: [10, 10], radius: 10, color: "#00FF00"}
  );



  obj.render(ctx);
  // setInterval(() => {
  //   obj.move(ctx);
  //   obj.render(ctx);
  // }, 250);

window.MovingObject = MovingObject;
