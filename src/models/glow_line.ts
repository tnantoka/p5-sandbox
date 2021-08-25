import * as p5 from 'p5';

export class GlowLine {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  width: number;
  maxColor: number;
  minColor: number;

  constructor(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    width: number,
    maxColor?: number,
    minColor?: number
  ) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.width = width;
    this.maxColor = maxColor ?? 10;
    this.minColor = minColor ?? 1;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  update(): void {}

  draw(p: p5): void {
    p.push();

    p.blendMode(p.ADD);

    const num = this.width * 10;
    for (let i = 0; i < num; i++) {
      p.strokeWeight(i * 0.1);
      p.stroke(p.map(i, 1, num, this.maxColor, this.minColor));
      p.line(this.x1, this.y1, this.x2, this.y2);
    }

    p.pop();
  }
}
