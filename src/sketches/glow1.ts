import * as p5 from 'p5';

export default (p: p5): void => {
  p.setup = () => {
    p.createCanvas(400, 400);
    p.noLoop();
    p.blendMode(p.SCREEN);
  };

  p.draw = () => {
    p.background(0);

    const num = 40;
    const y = p.height * 0.5;
    for (let i = 0; i < num; i++) {
      p.strokeWeight(i);
      p.stroke(p.map(i, 1, num, 20, 2));
      p.line(0, y, p.width, y);
    }
  };
};
