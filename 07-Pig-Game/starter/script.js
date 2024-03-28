'use strict';
// Selecting Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
// Starting Condictions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let finalScores, currentScore, activePlayer, isPlaying;

const init = function () {
  currentScore = 0;
  activePlayer = 0;
  isPlaying = true;
  finalScores = [0, 0];

  for (let i = 0; i < finalScores.length; i++) {
    // Reset final score display
    document.getElementById(`score--${i}`).textContent = finalScores[i];
    // Reset current score display
    document.getElementById(`current--${i}`).textContent = currentScore;
    // Reset winner display
    document.querySelector(`.player--${i}`).classList.remove('player--winner');
  }
  // Reset first player highlight to player1 display
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling dice funtionality
btnRoll.addEventListener('click', function () {
  if (isPlaying) {
    // 1. Generate random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    // 3. Check for rolled 1: if true, swith player
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (isPlaying) {
    // 1.Add current score to actice player's score
    finalScores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      finalScores[activePlayer];
    // 2.Check player's score >= 100
    if (finalScores[activePlayer] >= 100) {
      // true, finish game
      isPlaying = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // false, switch player
      switchPlayer();
    }
  }
});

// Coding Challenge
btnNew.addEventListener('click', init);
