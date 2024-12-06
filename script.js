'use strict';
//Selecting elements
let score0EL = document.getElementById('score--0');
let score1EL = document.getElementById('score--1');
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');
const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const btnHold = document.querySelector('.btn--hold');

// Starting Conditions
score0EL.textContent = 0;
score1EL.textContent = 0;
diceEL.classList.add('hidden');

let currentScoreP1 = 0;
let currentScoreP2 = 0;
let totalScorep1 = 0;
let totalScorep2 = 0;
let count = 0;
let dice;

// Rolling
const rolling = function () {
  // 1. Generating Random dice roll
  dice = Math.trunc(Math.random() * 6) + 1;
  // 2. Display dice
  diceEL.classList.remove('hidden');
  diceEL.src = `dice-${dice}.png`;

  // 3. chek for rolled 1: if true, switch to next player
  if (dice !== 1 && count % 2 == 0) {
    // Add dice to current score
    currentScoreP1 += dice;
    current0EL.textContent = currentScoreP1;
  } else if (dice !== 1 && count % 2 !== 0) {
    currentScoreP2 += dice;
    current1EL.textContent = currentScoreP2;
    // else if dice == 1 current score player 1 = 0
  } else if (dice == 1 && count % 2 == 0) {
    count++;
    console.log(count);
    currentScoreP1 = 0;
    current0EL.textContent = 0;
    player0.classList.remove('player--active');
    player1.classList.add('player--active');
    // else if dice == 1 current score player 2 = 0
  } else if (dice == 1 && count % 2 !== 0) {
    count++;
    console.log(count);
    currentScoreP2 = 0;
    current1EL.textContent = 0;
    player1.classList.remove('player--active');
    player0.classList.add('player--active');
  }
};

// if player click on Hold button
const holdScore = function () {
  count++;
  console.log(count);
  // background color and font style switch to the other player
  if (count % 2 !== 0) {
    player0.classList.remove('player--active');
    player1.classList.add('player--active');
    // current score add to total socre and current score will be 0
    totalScorep1 += currentScoreP1;
    score0EL.textContent = totalScorep1;
    currentScoreP1 = 0;
    current0EL.textContent = 0;
  } else if (count % 2 == 0) {
    player1.classList.remove('player--active');
    player0.classList.add('player--active');
    // current score add to total socre and current score will be 0
    totalScorep2 += currentScoreP2;
    score1EL.textContent = totalScorep2;
    currentScoreP2 = 0;
    current1EL.textContent = 0;
  }
};

// New game
const newGame = function () {
  count = 0;
  // add hidden class to dice that dice diplay will be none
  diceEL.classList.add('hidden');
  // remove that class to switch in player 1
  player1.classList.remove('player--active');
  player0.classList.add('player--active');
  // make both total score to 0
  score0EL.textContent = 0;
  score1EL.textContent = 0;
  // make both current score to 0
  currentScoreP1 = 0;
  currentScoreP2 = 0;
  totalScorep1 = 0;
  totalScorep2 = 0;
  current0EL.textContent = 0;
  current1EL.textContent = 0;
};

btnRoll.addEventListener('click', rolling);
btnHold.addEventListener('click', holdScore);
btnNew.addEventListener('click', newGame);
