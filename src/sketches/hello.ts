import * as p5 from 'p5';

export default (p: p5): void => {
  p.setup = () => {
    p.createCanvas(400, 400);
  };

  p.draw = () => {
    p.background(220);
    p.ellipse(50, 50, 80, 80);
  };
};
