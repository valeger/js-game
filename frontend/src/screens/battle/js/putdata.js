import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap';

export const putData = () => {
  const id = window.localStorage.getItem('id');
  const score = window.localStorage.getItem('score');

  $.ajax({
    url: "http://localhost:4000/users",
    data: `id=${id}&score=${score}`,
    method: "PUT",
    statusCode: {
      200: () => {
        window.localStorage.clear();
        window.location.href = "score.html";
      },
      500: () => {
        $('#ModalCenter').modal()
      }
    }
  }).fail(() => {
    $('#ModalCenter').modal()
  });
}
