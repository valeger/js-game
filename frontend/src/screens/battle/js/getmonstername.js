const monsterName = {
  adjective: ['Horrible', 'Evil', 'Snotty', 'Foul', 'Dreadful'],
  noun: ['goblin', 'orc', 'troll'],
  name: ['Alex', 'Max', 'John', 'Vladimir', 'Henry']
}

export  const getMonsterName = ({ adjective, noun , name } = monsterName) => {
  const randomNoun = Math.round(2*Math.random());
  const randomAdjective = Math.round(4*Math.random());
  const randomName = Math.round(4*Math.random());

  return `${adjective[randomAdjective]} ${noun[randomNoun]} ${name[randomName]}`
}