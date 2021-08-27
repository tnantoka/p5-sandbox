import * as p5 from 'p5';

export default (p: p5): void => {
  p.setup = () => {
    p.createCanvas(1500 / p.pixelDensity(), 500 / p.pixelDensity());
    p.noLoop();
    p.colorMode(p.HSB, 360, 100, 100);
  };

  p.draw = async () => {
    p.background(255);
    p.noStroke();

    const baseH = 225;
    const range = 50;
    const num = 1000;

    for (let i = 0; i < num; i++) {
      p.fill(p.random(baseH - range, baseH + range), 100, 100);
      if (i === 0) {
        p.rect(0, 0, p.width, p.height);
      } else {
        p.rect(
          p.random(p.width),
          p.random(p.height),
          p.random(10, 100),
          p.random(10, 100)
        );
      }
      await new Promise((resolve) => setTimeout(resolve, 1));
    }
  };
};
