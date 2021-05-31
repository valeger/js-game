const audiolibrary = [
  'lion', 'king', 'forest', 'knowledge', 'flowers',
  'beautiful', 'finger', 'eyes', 'library', 'cloud',
  'snow', 'school', 'family', 'pets', 'Christmas',
  'winter', 'spring', 'summer', 'people', 'firework'
];

class createTask {
  constructor(map = audiolibrary) {
    this.map = map;
    this.random = '';
    this.answer = '';
    this.speech = new SpeechSynthesisUtterance();
  }
  
  load() {
    window.speechSynthesis.onvoiceschanged = () => { 
      this.speech.voice = window.speechSynthesis.getVoices()[3];
    }
  }

  speak() {
    window.speechSynthesis.speak(this.speech) 
  }

  setRandom() {
    this.random = this.map[Math.floor(this.map.length * Math.random())];
    this.speech.text =  this.random;
  }

  setAnswer(answer) {
    this.answer = answer.toLowerCase();
  }
  
  getTaskName() {
    return 'Listening';
  }
  
  getDescription() {
    return 'Please, write the word heard';
  }
    
  getTask() {
    return `<button id="audio" class='btn btn-block'>Speak</button>`
  }

  check() {
    return this.map.includes(this.answer);
  }
}

export default new createTask()