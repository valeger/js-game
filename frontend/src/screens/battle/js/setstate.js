import { hero }  from './createentities'

let stateOfHero = 'initial';
let frameIndex = 0;
let tickCount = 0;
let ticksPerFrame = 12;
  
const update = (user, { audio, repeat, frames  } = hero[user.state]) => {
  if (user.state != stateOfHero) {
    user.animation = false;
    if (audio) audio.play();
    stateOfHero = user.state;
    frameIndex = 0;
    tickCount = 0;
    ticksPerFrame = 12;
  }

  tickCount += 1;
              
  if (tickCount > ticksPerFrame) {
    tickCount = 0;
    if (frameIndex < frames - 1) {	
      frameIndex += 1;
    } else {
      frameIndex = 0;
      if(!repeat){
        user.state = 'initial';
        if (!user.monsterhp) {
          const score = + localStorage.getItem('score') + 1;
          localStorage.setItem('score', score);
          window.location.reload(false);
        }      
      }
    }
  }
}

const updateHP = (DOMhero, DOMmonster, user) => {
  if (user.state != stateOfHero && user.state != 'initial') {
    const deltahp = 25;
    if (user.win) {

      if (user.state == 'treat' && user.hp < 100) {
        DOMhero.classList.remove(`w-${user.hp}`); 
        user.hp += deltahp;
        DOMhero.textContent = `${user.hp}hp`;
        DOMhero.classList.add(`w-${user.hp}`); 
      }; 

      if (user.monsterhp > 0 && user.state != 'treat') {
        DOMmonster.classList.remove(`w-${user.monsterhp}`);
        user.monsterhp -= deltahp;
        DOMmonster.textContent = `${user.monsterhp}hp`;
        DOMmonster.classList.add(`w-${user.monsterhp}`);
      }; 

    } else if (user.hp > 0) {
      DOMhero.classList.remove(`w-${user.hp}`); 
      user.hp -= deltahp;
      DOMhero.textContent = `${user.hp}hp`;
      DOMhero.classList.add(`w-${user.hp}`); 
    }
  }
}

const render = (user, context, { image, frames } = hero[user.state]) => {
  context.clearRect(0, 0, image.width, image.height);
  
  context.drawImage( image,
    frameIndex * image.width / frames, 0,
    image.width / frames, image.height,
    0, 0,
    image.width / frames, image.height
  );
}

export { render, update, updateHP }