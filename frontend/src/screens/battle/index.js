import loadMedia from './js/loadmedia';

import { start, putData } from './js/startbattle'

import * as img from  './js/images';
import * as audio from './js/audio';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

loadMedia().then(() => window.addEventListener('load', start));

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    putData();

    e.stopPropagation();
  }
})
