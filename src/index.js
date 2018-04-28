// Import main SCSS for webpack compilation
import './styles/main.scss';

import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;
// Import all JS lib for webpack compilation
import './scripts/lib';
import particlesjs from 'particlesjs';
// Import your custom function
import {
  type,
  navActivePage,
  movingBackgroundImage,
  jquery,
} from './scripts/main';

// Import all assets for webpack compilation
function importAll(r) {
  return r.keys().map(r);
}

var particles = particlesjs.init({
  selector: '.background',
  connectParticles: true,
  maxParticles: 300,
  sizeVariations: 1,
  color: [
    '#1677BB',
    '#ffffff',
    '#398AC3',
    '#000000',
    '#075D99',
    '#1677BB',
    '#ffffff',
  ],
  minDistance: 150,
  responsive: [
    {
      breakpoint: 1500,
      options: {
        speed: 0.75,
        minDistance: 120,
        maxParticles: 200,
      },
    },
    {
      breakpoint: 1200,
      options: {
        speed: 0.75,
        minDistance: 110,
        maxParticles: 150,
      },
    },
    {
      breakpoint: 900,
      options: {
        speed: 1,
        minDistance: 175,
        maxParticles: 30,
      },
    },
  ],
});

importAll(require.context('./assets', true, /\.(png|jpe?g|svg)$/));

// Declare which function are accessible to the browser
Object.assign(window, {
  type,
  navActivePage,
  movingBackgroundImage,
});
