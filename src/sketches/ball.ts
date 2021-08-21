import * as p5 from 'p5';

import { Ball } from '../models/ball';

export default (p: p5): void => {
  const ball = new Ball(50, 50);

  p.setup = () => {
    p.createCanvas(400, 400);
  };

  p.draw = () => {
    p.background(255);
    ball.update();
    ball.draw(p);
  };
};
