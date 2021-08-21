import * as p5 from 'p5';

export class Ball {
  x: number;
  y: number;

  dx: number;
  dy: number;

  radius: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.dx = 0;
    this.dy = 0;
    this.radius = 10;
  }

  update(): void {
    this.x += this.dx;
    this.y += this.dy;
  }

  draw(p: p5): void {
    p.fill(0);
    p.ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
  }
}
