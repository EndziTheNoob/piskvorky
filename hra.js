import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

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

const playButtons = document.querySelectorAll('.playBtn').forEach((button) => {
  button.addEventListener('click', selectButton);
});
