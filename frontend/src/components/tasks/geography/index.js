const capitals = [
  { country: 'Ireland', capital: 'dublin' },
  { country: 'USA', capital: 'washington' },
  { country: 'Denmark', capital: 'berlin' },
  { country: 'Russia', capital: 'moscow' },
  { country: 'Netherlands', capital: 'amsterdam' },
  { country: 'Canada', capital: 'ottawa' },
  { country: 'France', capital: 'paris' },
  { country: 'Italy', capital: 'rome' },
  { country: 'Japon', capital: 'tokyo' },
  { country: 'China', capital: 'beijing' },
];

class createTask {
  constructor(map = capitals) {
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
    return 'Countries and capitals';
  }

  getDescription() {
    return 'Please, type the correct capital of a given country(on English)';
  }

  getTask() {
    return this.random.country;
  }

  check() {
    return this.random.capital == this.answer;
  }
}

export default new createTask()