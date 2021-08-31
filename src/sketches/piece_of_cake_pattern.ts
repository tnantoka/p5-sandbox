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

    const center = {
      x: p.width * 0.5,
      y: p.height * 0.5,
    };

    const num = 12;
    for (let i = 0; i < num; i++) {
      p.push();
      p.translate(center.x, center.y);
      p.rotate(p.radians((i * 360) / num));

      drawPiece(360 / num);

      p.pop();
    }

    function drawPiece(angle: number) {
      const radius = p.width * 0.3;

      const margin = 0.0;
      const x0 = radius * margin * p.cos(p.radians(-90 + angle * 0.5));
      const y0 = radius * margin * p.sin(p.radians(-90 + angle * 0.5));

      const center = {
        x: x0,
        y: y0,
      };

      {
        p.strokeWeight(1);
        p.stroke(255, 255, 255, 100);

        const arcMargin =
          {
            '0.1': 2,
            '0.2': 3,
            '0.3': 3.5,
            '0.4': 4.2,
          }[margin.toString()] || 0;
        p.arc(
          0,
          0,
          radius * (1 + margin) * 2,
          radius * (1 + margin) * 2,
          p.radians(-90 + arcMargin),
          p.radians(-90 + angle - arcMargin)
        );
      }

      {
        p.strokeWeight(1);
        p.stroke(255, 255, 255, 50);

        const x1 = center.x + radius * p.cos(p.radians(-90));
        const y1 = center.y + radius * p.sin(p.radians(-90));

        const x2 = center.x + radius * p.cos(p.radians(-90 + angle));
        const y2 = center.y + radius * p.sin(p.radians(-90 + angle));

        p.line(center.x, center.y, x1, y1);
        p.line(center.x, center.y, x2, y2);
      }

      p.stroke(255);

      {
        p.strokeWeight(2);

        const x1 = center.x + radius * 0.4 * p.cos(p.radians(-90));
        const y1 = center.y + radius * 0.4 * p.sin(p.radians(-90));

        const x2 = center.x + radius * 0.7 * p.cos(p.radians(-90));
        const y2 = center.y + radius * 0.7 * p.sin(p.radians(-90));

        p.line(x1, y1, x2, y2);
      }

      {
        p.strokeWeight(2);

        const x1 = center.x + radius * 0.4 * p.cos(p.radians(-90 + angle));
        const y1 = center.y + radius * 0.4 * p.sin(p.radians(-90 + angle));

        const x2 = center.x + radius * 0.7 * p.cos(p.radians(-90 + angle));
        const y2 = center.y + radius * 0.7 * p.sin(p.radians(-90 + angle));

        p.line(x1, y1, x2, y2);
      }

      {
        p.strokeWeight(2);

        const x1 = center.x + radius * 0.4 * p.cos(p.radians(-90));
        const y1 = center.y + radius * 0.4 * p.sin(p.radians(-90));

        const x2 = center.x + radius * 0.4 * p.cos(p.radians(-90 + angle));
        const y2 = center.y + radius * 0.4 * p.sin(p.radians(-90 + angle));

        p.line(x1, y1, x2, y2);
      }

      {
        p.strokeWeight(2);

        const x1 = center.x + radius * 0.7 * p.cos(p.radians(-90));
        const y1 = center.y + radius * 0.7 * p.sin(p.radians(-90));

        const x1_5 =
          center.x + radius * 0.9 * p.cos(p.radians(-90 + angle * 0.5));
        const y1_5 =
          center.y + radius * 0.9 * p.sin(p.radians(-90 + angle * 0.5));

        const x2 = center.x + radius * 0.7 * p.cos(p.radians(-90 + angle));
        const y2 = center.y + radius * 0.7 * p.sin(p.radians(-90 + angle));

        p.line(x1, y1, x1_5, y1_5);
        p.line(x1_5, y1_5, x2, y2);
      }
    }
  };

  p.mouseClicked = () => {
    fillArea(p, p.mouseX, p.mouseY, 'white');
  };
};
