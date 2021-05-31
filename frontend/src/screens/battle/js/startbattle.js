import user from '../../../utility/user';
import { putData } from '../js/putdata';
import { getMonsterName } from './getmonstername';
import { bodyGeneration } from './monsterbody';
import { render, update, updateHP  } from './setstate';
import * as dialog from '../../../components/modal-dialog/index';

const start = () => {
  const heroCanvas = document.querySelector('#user').getContext('2d');
  const monsterCanvas = document.querySelector('#monster');
  const heroHP = document.querySelector('.user-hp');
  const monsterHP = document.querySelector('.monster-hp');
  const monstername = document.querySelector('.monstername');
  const modal = document.querySelector('#modal-dialog');
  
  document.querySelector('#container').append(modal);
  document.querySelector('.username').textContent = localStorage.getItem('username');
  monstername.textContent = getMonsterName();
                        
  bodyGeneration(monsterCanvas);
  dialog.executeTASK(user);

  const gameLoop = () => {
    let loop = window.requestAnimationFrame(gameLoop);

    updateHP(heroHP, monsterHP, user);
    update(user);
    render(user, heroCanvas);

    if (!user.hp) {
      window.cancelAnimationFrame(loop);
      putData();
    }
  }
  gameLoop(); 
}

export { start, putData }