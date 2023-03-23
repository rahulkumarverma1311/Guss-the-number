"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;



let score = 20;

document.querySelector(".check-number").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "🔢 Enter A Number";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "👍 Corrcet Number";
    document.querySelector('body').style.backgroundColor= '#60b347';
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector('.number').style.width ='80px';
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent =
        "☝️You Guess to Higher Number";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "🤦‍♂️You Lose the game";
    }
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent =
        "👇 You Guess To Low Number";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "🤦‍♂️You Lose the game";
    }
  }
});

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent="You can start guessing number";
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = '?';
    document.querySelector(".guess").value = ' ';
    document.querySelector('body').style.backgroundColor= '#000000';

})

