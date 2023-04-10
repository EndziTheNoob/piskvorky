let currentPlayer = 'circle';

const selectButton = (event) => {
  if (currentPlayer === 'circle') {
    currentPlayer = 'cross';
    event.target.classList.add('board__field--circle');
    event.target.disabled = true;
    document.getElementById('player').classList.remove('circle');
    document.getElementById('player').classList.add('cross');
  } else if (currentPlayer === 'cross') {
    currentPlayer = 'circle';
    event.target.classList.add('board__field--cross');
    document.getElementById('player').classList.remove('cross');
    document.getElementById('player').classList.add('circle');
    event.target.disabled = true;
  }
};

const restart = (event) => {
  if (window.confirm('Opravdu chceš začít znovu?')) {
    location.reload();
  } else {
    event.preventDefault();
  }
};
document.querySelector('.restart-btn').addEventListener('click', restart);

document
  .querySelector('button:nth-child(1)')
  .addEventListener('click', selectButton);
document
  .querySelector('button:nth-child(2)')
  .addEventListener('click', selectButton);
document
  .querySelector('button:nth-child(3)')
  .addEventListener('click', selectButton);
document
  .querySelector('button:nth-child(4)')
  .addEventListener('click', selectButton);
document
  .querySelector('button:nth-child(5)')
  .addEventListener('click', selectButton);
document
  .querySelector('button:nth-child(6)')
  .addEventListener('click', selectButton);
document
  .querySelector('button:nth-child(7)')
  .addEventListener('click', selectButton);
document
  .querySelector('button:nth-child(8)')
  .addEventListener('click', selectButton);
document
  .querySelector('button:nth-child(9)')
  .addEventListener('click', selectButton);
document
  .querySelector('button:nth-child(10)')
  .addEventListener('click', selectButton);
