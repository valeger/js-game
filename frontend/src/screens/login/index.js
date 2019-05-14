import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';


$(document).ready(() => {
  $('form').submit(function() {
    const form = $(this);
    const username = $('#InputName', form).val();
    const password = $('#InputPassword', form).val();

    $.ajax({
      url: "http://127.0.0.1:4000/users",
      dataType: "json",
      data: { username: username, password: password },
      method: "POST",
      success: (id) => { 
        window.localStorage.clear();
        localStorage.setItem('username', username);
        localStorage.setItem('id', id);
        localStorage.setItem('score', '0');
      },
      statusCode: {
        200: () => {
          window.location.href = "battle.html";
        }
      },
        401: () => {
          $('#InputPassword').addClass('is-invalid')
        },
        500: () => {
          $('#ModalCenter').modal()
        }
    }).fail(() => {
      $('#ModalCenter').modal()
    });

    return false;

  });
})
