import $ from 'jquery';

const checkanswer = (user) => {
  return () => {
    user.task.setAnswer($('#answer').val());
    $('#task-body').empty();    
    $('#answer').val('');

    if (user.task.check()) {
      user.win = true;
      user.state = user.chosenSpell;
    } else {
      user.win = false;
      if (user.hp == 25) user.state = 'dead';
      else user.state = 'hurt';
    }
  }
}

export default checkanswer
