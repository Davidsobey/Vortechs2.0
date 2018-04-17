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
  speed: 0.3,
  maxParticles: 200,
  color: ['#0e70b7', '#404B69', '#0e70b7', '#404B69'],
  minDistance: 150,
  responsive: [
    {
      breakpoint: 1080,
      options: {
        maxParticles: 48,
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
