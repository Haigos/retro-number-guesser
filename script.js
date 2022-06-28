'use strict';

let number = Math.trunc(Math.random() * 20) + 1
let score = 20
let highScore = 0

document.querySelector('.check').addEventListener('click', () => {
  let guess = Number(document.querySelector('.guess').value)
  console.log(guess)

  if (!guess) {
    document.querySelector('.message').textContent = 'Please enter a number!'
  } else if (number === guess) {
    document.querySelector('.number').textContent = number
    document.querySelector('.message').textContent = 'You win!'
    document.querySelector('body').style.backgroundColor = '#60b347'
    document.querySelector('.number').style.width = '30rem'

    if (score > highScore) {
      highScore = score
      document.querySelector('.highscore').textContent = highScore
    }
  } else if (score === 1) {
    document.querySelector('.message').textContent = 'You lost the game!'
    score--
    document.querySelector('.score').textContent = score
  }
  else if (guess > number) {
    document.querySelector('.message').textContent = 'Too high!'
    score--
    document.querySelector('.score').textContent = score
  } else if (guess < number) {
    document.querySelector('.message').textContent = 'Too low!'
    score--
    document.querySelector('.score').textContent = score
  }
})

document.querySelector('.again').addEventListener('click', () => {
  score = 20
  document.querySelector('.score').textContent = score

  document.querySelector('.message').textContent = 'Start guessing...'

  document.querySelector('body').style.backgroundColor = '#222'
  document.querySelector('.number').style.width = '15rem'

  let number = Math.trunc(Math.random() * 20) + 1
  document.querySelector('.number').textContent = '?'

  document.querySelector('.guess').value = Number('')
})