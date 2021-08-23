import * as p5 from 'p5';

export default (p: p5): void => {
  p.setup = () => {
    p.createCanvas(400, 400);
    p.noLoop();
    p.blendMode(p.ADD);
  };

  p.draw = () => {
    p.background(0);

    const weight = 2;
    p.strokeWeight(weight);
    const num = 20;
    for (let i = 0; i < num; i++) {
      p.stroke(200 - 10 * i);
      const y1 = p.height * 0.5 - i * weight;
      const y2 = p.height * 0.5 + i * weight;
      p.line(0, y1, p.width, y1);
      p.line(0, y2, p.width, y2);
    }

    p.filter(p.BLUR, 5);
  };
};
