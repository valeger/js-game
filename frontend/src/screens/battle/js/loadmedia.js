import { hero, monster } from './createentities'
import map from 'lodash.map'
import filter from 'lodash.filter'

const loadMedia = (monsterData = monster, heroData = hero) => {

  const loadImage = state => {
    return new Promise((resolve, reject) => {
      state.image = new Image();
      state.image.onload = () => resolve(state.image);
      state.image.src = state.pathImage;
    });
  };
  
  const loadAudio = state => {
    if (!state.audio) return;

    return new Promise((resolve, reject) => {
      state.audio = new Audio();
      state.audio.onload = () => resolve(state.audio);
      state.audio.src = state.pathAudio;
    });
  };

  return Promise.all(map(heroData, loadImage).concat(filter(heroData, loadAudio)).concat(map(monsterData, loadImage)));
}

export default loadMedia