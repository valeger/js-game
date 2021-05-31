import dictionary from './js/dictionary';

class createTask {
  constructor(map = dictionary) {
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
    return 'Translation';
  }

  getDescription() {
    return 'Please, translate a given word from English to Russian(just nominative)';
  }

  getTask() {
    return this.random.word;
  }

  check() {
    return this.random.answer.includes(this.answer);
  }
}

export default new createTask()