import * as p5 from 'p5';

export default (p: p5): void => {
  let h: p5.Element;
  let s: p5.Element;
  let b: p5.Element;

  p.setup = () => {
    p.createCanvas(400, 400);
    p.colorMode(p.HSB, 360, 100, 100);

    h = p.createSlider(0, 360, 0);
    s = p.createSlider(0, 100, 100);
    b = p.createSlider(0, 100, 100);
  };

  p.draw = () => {
    p.background(0, 0, 100);

    const center = {
      x: p.width * 0.5,
      y: p.width * 0.5,
    };
    const radius = p.width * 0.4;

    const getPos = (angle: number) => {
      const x = center.x + radius * p.cos(p.radians(angle - 90));
      const y = center.y + radius * p.sin(p.radians(angle - 90));
      return { x, y };
    };

    const pos = getPos(h.value() as number);
    p.stroke(h.value() as number, s.value() as number, b.value() as number);
    p.strokeWeight(4);
    p.line(center.x, center.y, pos.x, pos.y);

    p.noStroke();
    p.rectMode(p.CENTER);

    for (let i = 0; i < 360; i += 20) {
      const pos = getPos(i);
      p.fill(i, s.value() as number, b.value() as number);

      p.push();
      p.translate(pos.x, pos.y);
      p.rotate(p.radians(i - 90));
      p.rect(0, 0, p.width * 0.12, p.width * 0.12);
      p.pop();
    }

    p.fill(h.value() as number, s.value() as number, b.value() as number);
    p.ellipse(center.x, center.y, p.width * 0.3, p.width * 0.3);

    p.fill(0, 0, 0);
    p.textAlign(p.CENTER, p.CENTER);
    p.text(`H: ${h.value()}`, center.x, p.width * 0.7);
    p.text(`S: ${s.value()}`, center.x, p.width * 0.75);
    p.text(`B: ${b.value()}`, center.x, p.width * 0.8);
  };
};
