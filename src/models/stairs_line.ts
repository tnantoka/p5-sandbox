import * as p5 from 'p5';

export class StairsLine {
  x: number;
  y: number;
  length: number;
  steps: number;
  direction: 'x' | 'y';
  noise: number;

  radius: number;

  constructor(
    x: number,
    y: number,
    length: number,
    steps: number,
    direction: 'x' | 'y'
  ) {
    this.x = x;
    this.y = y;
    this.length = length;
    this.steps = steps;
    this.direction = direction;
    this.noise = 2;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  update(): void {}

  draw(p: p5): void {
    p.push();

    p.stroke(0);

    p.translate(this.x, this.y);
    if (this.direction === 'y') {
      p.rotate(p.radians(90));
    }

    const length = this.length / this.steps;

    let prevX = 0;
    let prevY = 0;

    for (let i = 0; i <= this.steps; i++) {
      const x = length * i;

      if (i < 2) {
        const y = 0;
        p.line(prevX, prevY, x, y);
        prevX = x;
        prevY = y;
        continue;
      }

      const y =
        i > this.steps - 2
          ? 0
          : (Math.floor(Math.random() * this.noise * 2) - this.noise) * length;
      p.line(prevX, prevY, prevX, y);
      p.line(prevX, y, x, y);
      prevX = x;
      prevY = y;
    }

    p.pop();
  }
}
