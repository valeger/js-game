class createTask {
  constructor() {
    this.map = ['+', '-', '*', '/'];
    this.random1 = 0;
    this.random2 = 0;
    this.operation = '';
    this.answer = 0;
    this.result = 0;
  }
  
  setRandom() {
    this.random1 = Math.floor(30 * Math.random() - 20);
    this.random2 = Math.floor(20 * Math.random());
    this.operation = this.map[Math.floor(4 * Math.random())];
  }
  
  setAnswer(answer) {
    this.answer = Math.round(answer);
  }
  
  getTaskName() {
    return 'Arithmetic';
  }
  
  getDescription() {
    return 'Please, calculate a given expression';
  }
  
  getTask() {
    this.result = `${this.random1} ${this.operation} ${this.random2}`;
    return `${this.result} = ?`;
  }
  
  check() {
    return Math.round(eval(this.result)) === this.answer;
  }
}

export default new createTask()