class createTask {
  constructor() {
    this.random = 0;
    this.answer = 0;
  }
  
  setRandom() {
    this.random = Math.round(16 * Math.random());
  }
  
  setAnswer(answer) {
    this.answer = answer;
  }
  
  getTaskName() {
    return 'Binary system';
  }
  
  getDescription() {
    return `Please, convert this number to a binary system`;
  }
  
  getTask() {
    return this.random;
  }
  
  check() {
    return Number(this.random).toString(2) == this.answer;
  }
}

export default new createTask()