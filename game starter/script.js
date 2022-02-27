'use strict';
//DOM Manipulation
// console.log(document.querySelector('.message'));
// document.querySelector('.message').textContent = 'correct answer';
// document.querySelector('.number').textContent = 15;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 20;
//event on page or application
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;
//creating a function to refactor .message class
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);
  //If No input
  if (!guess) {
    //document.querySelector('.message').textContent = '😂NO Number!';
    displayMessage('😂NO Number!');
    //if win OR guess is right
  } else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = 'correct answer';
    displayMessage('correct answer');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } //if guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '🙆🏻‍♀️Too High!' : '📉Too Low!';
      displayMessage(guess > secretNumber ? '🙆🏻‍♀️Too High!' : '📉Too Low!');
      score--;

      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent = '🤦‍♀️you lost the game!';
      displayMessage('🤦‍♀️you lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
  // If guess is high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '🙆🏻‍♀️Too High!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '🤦‍♀️you lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  //   //If guess is low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉Too Low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '🤦‍♀️you lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});
document.querySelector('.again').addEventListener('click', function () {
  //const score = Number(document.querySelector('.score').textContent);
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.message').textContent = 'start guessing....';
});
