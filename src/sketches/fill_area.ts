import * as p5 from 'p5';

import { fillArea } from '../helpers';

export default (p: p5): void => {
  p.setup = () => {
    p.createCanvas(400, 400);
    p.noLoop();
  };

  p.draw = () => {
    p.background(0);
    p.stroke(255);
    p.strokeWeight(2);
    p.noFill();

    p.line(p.width * 0.5, 0, p.width * 0.5, p.height);
    p.line(0, p.height * 0.5, p.width, p.height * 0.5);

    p.ellipse(p.width * 0.5, p.height * 0.5, p.width * 0.4, p.width * 0.4);
  };

  p.mouseClicked = () => {
    fillArea(p, p.mouseX, p.mouseY, 'white');
  };
};
