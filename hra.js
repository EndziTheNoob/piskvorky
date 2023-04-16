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
  //Turning buttons into symbols array
  const herniPole = document.querySelectorAll('.playBtn');
  const herniPoleArray = Array.from(herniPole);
  const herniSymboly = herniPoleArray.map((symbol) => {
    if (symbol.classList.contains('board__field--cross')) {
      return 'x';
    } else if (symbol.classList.contains('board__field--circle')) {
      return 'o';
    } else {
      return '_';
    }
  });
  //Declaring winner
  const vitez = findWinner(herniSymboly);
  if (vitez === 'o') {
    setTimeout(() => {
      alert('Vyhrálo kolečko!');
      location.reload();
    }, 200);
  } else if (vitez === 'x') {
    setTimeout(() => {
      alert('Vyhrál křížek!');
      location.reload();
    }, 200);
  } else if (vitez === 'tie') {
    setTimeout(() => {
      alert('Je to remíza!');
      location.reload();
    }, 200);
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

//Adding event listener to all buttons
document.querySelectorAll('.playBtn').forEach((button) => {
  button.addEventListener('click', selectButton);
});
