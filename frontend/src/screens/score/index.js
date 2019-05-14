import 'bootstrap/dist/css/bootstrap.min.css';
  
const makeTable = data => {
  const usersData = data.reverse()

  usersData.forEach((user, i) => {
    const tr = document.createElement('tr');

    tr.insertAdjacentHTML('afterBegin', `<th scope="row">${i + 1}</th>
                                         <td>${user.username}</td>
                                         <td>${user.score}</td>
                                         <td>${(user.created).slice(0, 10)}</td>`
    );

    document.querySelector('tbody').append(tr); 
  });
}

const getScore = () => {
  fetch("http://localhost:4000/users")
  .then(response => response.json())
  .then(data => makeTable(data));
}


document.addEventListener('DOMContentLoaded', () => getScore());