import * as p5 from 'p5';

export default (p: p5): void => {
  p.setup = () => {
    p.createCanvas(400, 400);
    p.noLoop();
  };

  p.draw = () => {
    p.background(0);
    p.noFill();
    p.stroke(255, 255, 255, 100);

    const radius = p.width * 0.4;
    const center = {
      x: p.width * 0.5,
      y: p.height * 0.5,
    };

    for (let i = 0; i < 360; i += 10) {
      const x1 = center.x + radius * p.cos(p.radians(i));
      const y1 = center.y + radius * p.sin(p.radians(i));

      [200, 120, 100, -50].forEach((range) => {
        const x2 = center.x + radius * p.cos(p.radians(i + range));
        const y2 = center.y + radius * p.sin(p.radians(i + range));
        p.line(x1, y1, x2, y2);
      });
    }
  };
};
