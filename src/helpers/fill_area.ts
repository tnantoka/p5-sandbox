import * as p5 from 'p5';

export const fillArea = (
  p: p5,
  x: number,
  y: number,
  destColor: string
): void => {
  const pixels = p.get(x, y);
  const srcColor = p.color(pixels[0], pixels[1], pixels[2], pixels[3]);
  p.loadPixels();

  const processed = Array.from({ length: p.width }, () =>
    new Array(p.height).fill(false)
  );
  // fill(x, y);
  runRecursive(fill, x, y);

  p.updatePixels();

  function* fill(x: number, y: number) {
    if (processed[x][y]) {
      return;
    }
    processed[x][y] = true;

    p.set(x, y, p.color(destColor));

    for (const [dx, dy] of [
      [0, -1],
      [1, 0],
      [0, 1],
      [-1, 0],
    ]) {
      const nextX = x + dx;
      const nextY = y + dy;

      if (nextX < 0 || nextX >= p.width || nextY < 0 || nextY >= p.height) {
        continue;
      }

      if (canFill(nextX, nextY)) {
        yield [nextX, nextY];
      }
    }
  }

  function canFill(x: number, y: number) {
    const srcR = p.red(srcColor);
    const srcG = p.green(srcColor);
    const srcB = p.blue(srcColor);
    const srcA = p.alpha(srcColor);

    const [currentR, currentG, currentB, currentA] = p.get(x, y);

    function isSimilar(color1: number, color2: number) {
      const range = 255;
      return Math.abs(color1 - color2) < range;
    }

    return (
      isSimilar(currentR, srcR) &&
      isSimilar(currentG, srcG) &&
      isSimilar(currentB, srcB) &&
      isSimilar(currentA, srcA)
    );
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function runRecursive(func: any, ...args: any) {
  const callStack = [func(...args)];

  while (callStack.length > 0) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const iterator: any = callStack[callStack.length - 1];

    const { value, done } = iterator.next();
    if (done) {
      callStack.pop();
    } else {
      callStack.push(func(...value));
    }
  }
}
