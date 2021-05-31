import words from './js/words';
import createList from './js/createlist';
import reduce from 'lodash.reduce';

class createTask {
  constructor(map = words) {
    this.map = map;
    this.random = 0;
    this.answer = '';
  }

  setRandom() {
    this.random = this.map[Math.floor(this.map.length * Math.random())];
    console.log(this.random);
  }

  setAnswer(answer) {
    if (answer) this.answer = answer;
    else {
      const list = document.querySelector('ul');
      console.log(list.children);
      this.answer = reduce(list.children, (acc, e) => acc + e.textContent, '');
    }
  }

  getTaskName() {
    return 'Ordering';
  }

  getDescription() {
    return 'Please, order given chunks into a word (in the key case, just type the correct sequence in the input field)';
  }

  getTask() {
    console.log(createList(this.random));
    return createList(this.random);
  }

  check() {
    return this.random == this.answer ;
  }
}

export default new createTask()