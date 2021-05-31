import dragnDrop from './dragndrop';

const randomLetter = (letter) => {
  const item = document.createElement('li');
  item.classList.add('list-group-item', 'list-group-item-primary');
  item.textContent = letter;

  return item;
}

const createList = (str) => {
  const list = document.createElement('ul');
  const items = str
    .split('')
    .sort(() => Math.random() - 0.5)
    .map(letter => randomLetter(letter));

  list.className = 'list-group';
  list.append(...items);
  dragnDrop(list);

  return list;
}

export default createList