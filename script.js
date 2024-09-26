'use strict';
//NOTE QUERY SELECTOR I TEXTCONTENT
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = '13';
// document.querySelector('.score').textContent = '20';

//NOTE VALUE DO INPUTA
// document.querySelector('.guess').value;
// document.querySelector('.');

//NOTE Add event listener słucha kilków/poruszania/itd...
// NOTE TRUNC USUWA MIEJSCA PO PRZECINKU
let secretNumber = Math.trunc(Math.random('1') * 20) + 1;
let maxScore = 20;
let highScore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  if (!guess) {
    displayMessage('No number!');
  } else if (guess === secretNumber) {
    displayMessage('You guessed the number 🎉');
    document.querySelector('body').style = 'background-color:#60b347';
    document.querySelector('.number').style = 'width:30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (maxScore > highScore) {
      document.querySelector('.highscore').textContent = `${maxScore}`;
      highScore = maxScore;
    }
  } else if (guess !== secretNumber) {
    if (maxScore > 1) {
      displayMessage(guess > secretNumber ? 'Too high' : 'Too low');
      maxScore--;
      document.querySelector('.score').textContent = maxScore;
    } else {
      displayMessage('💥 You lost the game');
      document.querySelector('body').style = 'background-color:#FF0000';
      document.querySelector('.score').textContent = '0';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style = 'background-color:#222';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = '20';
  maxScore = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style = 'width:15rem';
  secretNumber = Math.trunc(Math.random('1') * 20) + 1;
});
