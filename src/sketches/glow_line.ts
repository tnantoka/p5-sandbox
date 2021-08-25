import * as p5 from 'p5';

import { GlowLine } from '../models/glow_line';

export default (p: p5): void => {
  const objects = [
    new GlowLine(50, 50, 200, 50, 8),
    new GlowLine(50, 100, 50, 250, 12),
  ];

  p.setup = () => {
    p.createCanvas(400, 400);
    p.noLoop();
  };

  p.draw = () => {
    p.background(0);
    p.stroke(255);

    objects.forEach((o) => o.update());
    objects.forEach((o) => o.draw(p));
  };
};
