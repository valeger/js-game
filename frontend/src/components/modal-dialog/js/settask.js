import chosetask from './chosetask';
import $ from 'jquery';

const setTask = (user) => {
  return e => {
    if (e.target.hasAttribute('data-name')) {
      let taskname = e.target.getAttribute('data-name');
      user.chosenSpell = e.target.getAttribute('data-spell');

      $('#task').on('shown.bs.modal', () => $('#answer').focus());

      user.task = chosetask(taskname);

      if (user.task) {
    
        user.task.setRandom();

        $('#task-body').html(user.task.getTask());
        $('#task-name').html(user.task.getTaskName());
        $('#task-description').html(user.task.getDescription());

        if (taskname === 'listening') {
          user.task.load();
          $('#audio').on('click', () => user.task.speak());
          $(document).keydown(e => {
            if (e.key === "F7") {
              e.preventDefault();
              $('#audio').trigger('click');
            }
          });
        }
      }
    }
  }
}

export default setTask