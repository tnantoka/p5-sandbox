import * as p5 from 'p5';

import './style.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const sketches: { [key: string]: any } = {};
['hello', 'hello2'].forEach((name) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  sketches[name] = require(`./sketches/${name}`).default;
});

let currentSketchName = location.hash ? location.hash.slice(1) : Object.keys(sketches)[0];
let p5instance = new p5(sketches[currentSketchName]);

if (!document.querySelector('.sketches')) {
  const select = document.createElement('select');
  Object.keys(sketches).forEach((name) => {
    const option = document.createElement('option');
    option.value = name;
    option.label = name;
    select.appendChild(option);
  })
  document.body.append(select);

  select.addEventListener('change', (e) => {
    const value = (e.target as HTMLSelectElement).value;

    location.hash = value;
    currentSketchName = value;
    p5instance.remove();
    p5instance = new p5(sketches[value]);
  });
}