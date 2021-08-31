import * as p5 from 'p5';
import { saveAs } from 'file-saver';

import './style.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const sketches: { [key: string]: any } = {};
[
  'ball',
  'bounce',
  'stairs line',
  'puzzle pattern',
  'glow1',
  'glow2',
  'glow3',
  'glow4',
  'glow line',
  'glow puzzle pattern',
  'hsb',
  'twitter1',
  'boxes',
  'fill_area',
  'piece_of_cake',
  'piece_of_cake_bug',
  'piece_of_cake_pattern',
].forEach((name) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  sketches[name] = require(`./sketches/${name.replace(/\s/g, '_')}`).default;
});

let currentSketchName = location.hash ? decodeURIComponent(location.hash.slice(1)) : Object.keys(sketches)[0];
let p5instance = new p5(sketches[currentSketchName]);

document.addEventListener('DOMContentLoaded', () => {
  const select = document.querySelector('.sketches');
  Object.keys(sketches).forEach((name) => {
    const option = document.createElement('option');
    option.value = name;
    option.label = name;
    option.selected = name == currentSketchName;
    select.appendChild(option);
  })

  select.addEventListener('change', (e) => {
    const value = (e.target as HTMLSelectElement).value;

    location.hash = encodeURIComponent(value);
    currentSketchName = value;
    p5instance.remove();
    p5instance = new p5(sketches[value]);
  });

  const jpgButton = document.querySelector('.jpg');
  jpgButton.addEventListener('click', () => {
    p5instance.save(`${currentSketchName}.jpg`);
  });

  const gifButton = document.querySelector('.gif');
  gifButton.addEventListener('click', async () => {
    const wait: HTMLSpanElement = document.querySelector('.wait');
    wait.style.display = 'inline';

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const gif = new (window as any).GIF({
      // width: p5instance.width * p5instance.pixelDensity(),
      // height: p5instance.height * p5instance.pixelDensity(),
      width: p5instance.width,
      height: p5instance.height,
      workerScript: '/vendor/gif.js/gif.worker.js',
    });

    const seconds = parseInt((document.querySelector('.seconds') as HTMLInputElement).value) || 4;
    const delay = 20;
    const times = seconds * 1000 / delay;
    for (let i = 0; i < times; i++) {
      await new Promise((resolve) => setTimeout(resolve, delay));
      const canvas = document.querySelector('canvas');

      const tempCanvas = document.createElement('canvas');
      tempCanvas.width = p5instance.width;
      tempCanvas.height = p5instance.height;
      tempCanvas.getContext('2d').drawImage(
        canvas,
        0, 0, canvas.width, canvas.height,
        0, 0, tempCanvas.width, tempCanvas.height 
      );

      gif.addFrame(tempCanvas, { delay, copy: true });
    }

    gif.on('finished', (blob: Blob) => {
      saveAs(blob, `${currentSketchName}.gif`);
      wait.style.display = 'none';
    });

    gif.render();
  });

  const reloadButton = document.querySelector('.reload');
  reloadButton.addEventListener('click', () => {
    location.reload();
  });
});