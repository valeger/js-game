import animals from './js/library';
import * as imgs from './js/exportimages';

class createTask {
  constructor(map = animals) {
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
    return 'Animals';
  }

  getDescription() {
    return 'Please, type the name of the animal on English';
  }

  getTask() {
    const img = document.createElement('img');
    img.src = this.random.src;
    return img;
  }

  check() {
    return this.random.animal == this.answer;
  }
}

export default new createTask()