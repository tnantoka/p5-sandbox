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
    p.strokeWeight(4);
    p.noFill();

    const center = {
      x: p.width * 0.5,
      y: p.height * 0.5,
    };

    for (let i = 0; i < 12; i++) {
      p.push();
      p.translate(center.x, center.y);
      p.rotate(p.radians(i * 30));

      drawPiece();

      p.pop();
    }

    function drawPiece() {
      const angle = 30;
      const radius = p.width * 0.3;

      p.arc(
        0,
        0,
        radius * 2,
        radius * 2,
        p.radians(-90),
        p.radians(-90 + angle)
      );

      const x1 = radius * p.cos(p.radians(-90));
      const y1 = radius * p.sin(p.radians(-90));

      const x2 = radius * p.cos(p.radians(-90 + angle));
      const y2 = radius * p.sin(p.radians(-90 + angle));

      p.line(center.x, center.y, x1, y1);
      p.line(center.x, center.y, x2, y2);
    }
  };

  p.mouseClicked = () => {
    fillArea(p, p.mouseX, p.mouseY, 'white');
  };
};
