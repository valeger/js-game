import forEach from 'lodash.forEach'

const dragnDrop = (list) => {
  let draggable;

  forEach(list.children, e => e.draggable = true);
  
  const dragOver = (e) => {

    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
     
    if(e.target && e.target !== draggable && e.target.nodeName === 'LI') {
      list.insertBefore(draggable, e.target.nextSibling || e.target);
    }
  }
  
  const dragEnd = (e) => {

    e.preventDefault();
    list.removeEventListener('dragover', dragOver);
    list.removeEventListener('dragend', dragEnd);

  }
  
  const dragStart = (e) => {
    draggable = e.target;

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('Text', draggable.textContent);

    list.addEventListener('dragover', dragOver);
    list.addEventListener('dragend', dragEnd);
  }

  list.addEventListener('dragstart', dragStart); 
}

export default dragnDrop