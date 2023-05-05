import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

//Turning buttons into symbols array
const herniPole = document.querySelectorAll('.playBtn');
const herniPoleArray = () => {
  return Array.from(herniPole).map((symbol) => {
    if (symbol.classList.contains('board__field--cross')) {
      return 'x';
    } else if (symbol.classList.contains('board__field--circle')) {
      return 'o';
    } else {
      return '_';
    }
  });
};

//Declaring winner - function in function, so I can use it below in selectButton()
const vitezFunc = () => {
  const vitez = findWinner(herniPoleArray());
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

//Function for playing with PC - defining const buttons, fetch data and returning function as part of selectButton() below
const buttons = document.querySelectorAll('.playBtn');

const pocitacHraje = () => {
  currentPlayer = 'cross';
  buttons.forEach((button) => {
    button.disabled = true;
  });
  fetch('https://piskvorky.czechitas-podklady.cz/api/suggest-next-move', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      board: herniPoleArray(),
      player: 'x',
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      const { x, y } = data.position;
      const index = x + y * 10;
      buttons.forEach((button) => {
        if (
          button.classList.contains('board__field--cross') ||
          button.classList.contains('board__field--circle')
        ) {
          button.disabled = true;
        } else {
          button.disabled = false;
        }
      });
      buttons[index].click();
    });
};

let currentPlayer = 'circle';

const selectButton = (event) => {
  if (currentPlayer === 'circle') {
    currentPlayer = 'cross';
    event.target.classList.add('board__field--circle');
    event.target.disabled = true;
    document.getElementById('player').classList.remove('circle');
    document.getElementById('player').classList.add('cross');
    vitezFunc();
    return pocitacHraje();
  } else if (currentPlayer === 'cross') {
    event.target.classList.add('board__field--cross');
    document.getElementById('player').classList.remove('cross');
    document.getElementById('player').classList.add('circle');
    event.target.disabled = true;
    vitezFunc();
    return (currentPlayer = 'circle');
  }
};

//Window refresh
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
