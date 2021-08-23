import * as p5 from 'p5';

export default (p: p5): void => {
  p.setup = () => {
    p.createCanvas(400, 400);
    p.noLoop();
  };

  p.draw = () => {
    p.background(0);

    const image = p.createImage(p.width, 50);
    image.loadPixels();

    for (let y = 0; y < image.height; y++) {
      for (let x = 0; x < image.width; x++) {
        const distance = p.sq(image.height * 0.5 - y) / 80;
        const i = (x + y * image.width) * 4;
        image.pixels[i] = 70 / distance;
        image.pixels[i + 1] = 70 / distance;
        image.pixels[i + 2] = 70 / distance;
        image.pixels[i + 3] = 255 / distance;
      }
    }
    image.updatePixels();

    p.image(image, 0, p.height * 0.5 - image.height * 0.5);
  };
};
