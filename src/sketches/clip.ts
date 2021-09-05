import * as p5 from 'p5';

export default (p: p5): void => {
  p.setup = () => {
    p.createCanvas(400, 400);
  };

  p.draw = () => {
    p.background(255);
    p.stroke(255);
    p.noStroke();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (p.drawingContext as any).save();

    p.fill(200);
    p.rect(100, 100, 200, 200);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (p.drawingContext as any).clip();

    p.fill(0);
    p.ellipse(p.mouseX, p.mouseY, 50, 50);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (p.drawingContext as any).restore();
  };
};
