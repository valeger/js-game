import $ from 'jquery';
import checkanswer from './js/checkanswer';
import setTask from './js/settask';

export const executeTASK = user => {

  $('#modal-dialog').on('click', setTask(user));
  $('#getAnswer').on('click', checkanswer(user));

  $(window).keypress(e => {
    if (e.key === "Enter") {
      $('#modal-button').click();
    }
  });

  $('#answer').keypress(e => {
    if (e.key === "Enter") {
      event.preventDefault();
    }
  });

  $('#task').keypress(e => {
    if (e.key === "Enter") {
      $('#getAnswer').trigger('click');
      e.stopPropagation();
    }
  });

}
