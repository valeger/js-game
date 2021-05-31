import * as img from './js/exportimg';
import shapes from './js/shapes';

class createTask {
  constructor(map = shapes) {
    this.map = map;
    this.random = {};
    this.answer = '';
  }

  setRandom() {
    this.random = this.map[Math.floor(this.map.length * Math.random())];
  }

  setAnswer(answer) {
    this.answer = answer.toLowerCase();
  }

  getTaskName() {
    return '3D Shapes';
  }

  getDescription() {
    return 'Please, type the name of a given 3D shape(on English)';
  }

  getTask() {
    const img = document.createElement('img');
    img.src = this.random.src;
    return img;
  }

  check() {
    return this.random.shape == this.answer;
  }
}

export default new createTask()