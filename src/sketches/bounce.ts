import * as p5 from 'p5';

import { Ball } from '../models/ball';

export default (p: p5): void => {
  const ball = new Ball(50, 50);
  ball.dx = Math.floor(Math.random() * 5) + 1;
  ball.dy = Math.floor(Math.random() * 5) + 1;

  p.setup = () => {
    p.createCanvas(400, 400);
  };

  p.draw = () => {
    p.background(255);

    ball.update();
    if (ball.x < ball.radius || ball.x > p.width - ball.radius) {
      ball.dx *= -1;
    }
    if (ball.y < ball.radius || ball.y > p.height - ball.radius) {
      ball.dy *= -1;
    }
    ball.draw(p);
  };
};
