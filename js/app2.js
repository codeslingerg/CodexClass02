"use strict";
let response;
let correctAnswer = 3;
let x;

response = prompt("Can you guess a number for me");
x = parseInt(response);
console.log("You said: " + response);

if (response > correctAnswer) {
  alert("Too High");
} else if (response < correctAnswer) {
  alert("Too Low");
} else if (x === correctAnswer) {
  alert("Awesome, you got it!");
}



while (y < 6) {
    let favMovie = prompt("What is my favorite movie?").toLowerCase();
    if (favMovie === correctAnswer1) {
        console.log("You are correct!");
        break;
    } else {
        console.log("You are incorrect. Try again."); 
      y = y + 1;
    alert(`You guessed ${attempts} times`) 
    
    }
}
