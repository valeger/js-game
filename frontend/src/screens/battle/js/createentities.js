class createHero {
  constructor(pathAudio, audio, repeat, pathImage, image, frames) {
    this.pathAudio = pathAudio,
    this.audio = audio,
    this.repeat = repeat,
    this.pathImage = pathImage,
    this.image = image,
    this.frames = frames
  }
}

class createMonster {
  constructor(x, y, pathImage, image, frames) {
    this.x = x,
    this.y = y,
    this.pathImage = pathImage,
    this.image = image,
    this.frames = frames
  }
}

const hero = {
  initial: new createHero(null, null, true, './images/hero_initial.png', {}, 3),
  wind: new createHero('./audio/wind.mp3', {}, false, './images/hero_wind.png', {}, 5),
  snow: new createHero('./audio/snow.mp3', {}, false, './images/hero_snow.png', {}, 5),
  hurt: new createHero('./audio/hurt.mp3', {}, false, './images/hero_hurt.png', {}, 5),
  dead: new createHero('./audio/dead.mp3', {}, false, './images/hero_dead.png', {}, 4),
  treat: new createHero('./audio/treat.mp3', {}, false, './images/hero_treat.png', {}, 3),
}

const monster = {
  legs: new createMonster(950, 280, './images/monster_legs.png', {}, 3),
  body: new createMonster(700, 60, './images/monster_bodies.png', {}, 3),
  head: new createMonster(900, 30, './images/monster_faces.png', {}, 3),
}

export { hero, monster }