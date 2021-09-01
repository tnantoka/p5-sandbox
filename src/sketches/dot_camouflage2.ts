import * as p5 from 'p5';

export default (p: p5): void => {
  let font: p5.Font;

  p.preload = () => {
    font = p.loadFont('vendor/Roboto/Roboto-Thin.ttf');
  };

  p.setup = () => {
    p.createCanvas(1500 / p.pixelDensity(), 500 / p.pixelDensity());
    p.noLoop();
    p.rectMode(p.CENTER);
  };

  p.draw = () => {
    p.background(255);
    p.fill(100);
    p.noStroke();

    const text = 'AAA';

    const size = 10;
    const margin = 2;
    const points = font.textToPoints(
      text,
      p.width * 0.31,
      p.height * 0.78,
      p.width * 0.2
    );
    for (let i = 0; i < p.width; i += size) {
      for (let j = 0; j < p.height; j += size) {
        const x = i + size * 0.5;
        const y = j + size * 0.5;

        const inText = points.find((point) => {
          return (
            point.x < x &&
            point.x + size - margin > x &&
            point.y < y &&
            point.y + size - margin > y
          );
        });
        if (inText) {
          p.ellipse(x, y, size - margin + 1, size - margin + 1);
        } else {
          p.ellipse(x, y, size - margin, size - margin);
        }
      }
    }

    // p.fill(255, 255, 0, 100);
    // p.textSize(p.width * 0.2);
    // p.textAlign(p.CENTER, p.CENTER);
    // p.textFont(font);
    // p.text(text, p.width * 0.5, p.height * 0.51);
  };
};
