import * as p5 from 'p5';

import { StairsLine } from '../models/stairs_line';

export default (p: p5): void => {
  const objects = [
    new StairsLine(50, 50, 100, 10, 'x'),
    new StairsLine(50, 100, 100, 10, 'y'),
  ];

  p.setup = () => {
    p.createCanvas(400, 400);
    p.noLoop();
  };

  p.draw = () => {
    p.background(255);

    objects.forEach((o) => o.update());
    objects.forEach((o) => o.draw(p));
  };
};
