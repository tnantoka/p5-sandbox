import * as p5 from 'p5';

import { StairsLine } from '../models/stairs_line';
import { GlowLine } from '../models/glow_line';

export default (p: p5): void => {
  p.setup = () => {
    p.createCanvas(400, 400);
    p.noLoop();
  };

  p.draw = () => {
    p.background(0);

    const num = 3;
    const length = p.width / num;
    for (let i = 0; i <= num; i++) {
      for (let j = 0; j <= num; j++) {
        [
          new StairsLine(i * length, j * length, length, 10, 'x'),
          new StairsLine(i * length, j * length, length, 10, 'y'),
        ].forEach((line) => {
          line.drawLine = (
            p: p5,
            x1: number,
            y1: number,
            x2: number,
            y2: number
          ) => {
            new GlowLine(x1, y1, x2, y2, 12).draw(p);
          };

          line.draw(p);
        });
      }
    }
  };
};
