import * as p5 from 'p5';

import { StairsLine } from '../models/stairs_line';

export default (p: p5): void => {
  p.setup = () => {
    p.createCanvas(400, 400);
    p.noLoop();
  };

  p.draw = () => {
    p.background(255);

    const num = 10;
    const length = p.width / num;
    for (let i = 0; i <= num; i++) {
      for (let j = 0; j <= num; j++) {
        new StairsLine(i * length, j * length, length, 10, 'x').draw(p);
        new StairsLine(i * length, j * length, length, 10, 'y').draw(p);
      }
    }
  };
};
