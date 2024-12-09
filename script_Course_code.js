'use strict';

// Select elements
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  // 1.Generating random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2.DIsplay dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // 3.Check for rolled 1 : if true, switch to next player
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // Switch to next player
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
  }
});
btnHold.addEventListener('click', function () {
  // 1. Add current score to active player's
  document.getElementById(`score--${activePlayer}`).textContent = currentScore;
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  // console.log(scores);
  // 2. if Check if player's score is >= 100
  document.getElementById(`score--${activePlayer}`).textContent >= 100
    ? btnHold.removeEventListener('click')
    : //  btnNew.removeEventListener('click')
      // 3. swirch player
      (activePlayer = activePlayer === 0 ? 1 : 0),
    player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
});
