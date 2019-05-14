class createTask {
  constructor() {
    this.random = 0;
    this.fix = 0;
    this.answer = 0;
  }
  
  setRandom() {
    this.random = (1000 * Math.random() - 500).toFixed(5);
    this.fix = 1 + Math.floor(3*Math.random());
  }
  
  setAnswer(answer) {
    this.answer = answer;
  }
  
  getTaskName() {
    return 'Rounding';
  }
  
  getDescription() {
    return `Please, round the number to ${this.fix} digits after the point`;
  }
  
  getTask() {
    return this.random;
  }
  
  check() {
    return (+ this.random).toFixed(this.fix) == this.answer;
  }
}

export default new createTask()