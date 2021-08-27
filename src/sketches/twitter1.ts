import * as p5 from 'p5';

export default (p: p5): void => {
  p.setup = () => {
    p.createCanvas(1500 / p.pixelDensity(), 500 / p.pixelDensity());
    p.noLoop();
  };

  p.draw = () => {
    p.background(255);
    p.stroke(0);

    for (let i = 0; i < p.width; i += 10) {
      p.line(i, 0, p.width - i, p.height);
    }
    for (let i = 0; i < p.height; i += 10) {
      p.line(p.width, i, 0, p.height - i);
    }
  };
};
