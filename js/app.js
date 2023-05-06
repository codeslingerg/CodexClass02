"use strict";
let nombre = prompt("Welcome to my game! What is your name?");

let answerOne = prompt("Did I take a web design class?");
let answerTwo = prompt("Can I speak another language?");
let answerThree = prompt("Is my favorite color yellow");
let answerFour = prompt("Have I traveled outside of the US");
let answerFive = prompt("Am I left-handed?");
let total = 0;

if (answerOne === "y" || answerOne === "yes") {
  console.log("¡Así es!");
  alert("¡Así es!");
  total++;
} else {
  console.log("Está mal");
  alert("Está mal");
}

if (answerTwo === "y" || answerTwo === "yes") {
  console.log("¡Así es!");
  total++;
} else {
  console.log("Está mal");
}

if (answerThree === "n" || answerThree === "no") {
  console.log("¡Así es!");
  total++;
} else {
  console.log("Está mal");
}

if (answerFour === "n" || answerFour === "no") {
  console.log("¡Así es!");
  total++;
} else {
  console.log("Está mal");
}

if (answerFive === "y" || answerFive === "yes") {
  console.log("¡Así es!");
  total++;
} else {
  console.log("Está mal");
}

let response;
let correctAnswer = 3;
let x;
let attempts = 4;

while (attempts > 0) {
  response = prompt("Can you guess a number for me");
  console.log("You said: " + x);

  x = parseInt(response);

  if (x > correctAnswer) {
    alert("Too High");
    attempts--;
  } else if (x > correctAnswer) {
    alert("Too Low");
    attempts--;
  } else if (x === correctAnswer) {
    alert("Awesome, you got it!");
    total++;
    break;
  }
  if (attempts === 0) {
    alert("You're out of attempts but the correct answer was " + correctAnswer);
    break;
  }
}
let question = "What is my favorite color?";
let answerArray = ["blue", "red", "purple"];
let attempts2 = 6;
let userIsCorrect = false;
while (attempts2 > 0) {
  let response7 = prompt(question);

  for (let i of answerArray) {
    if (i === response7) {
      alert("You are right.");
      total++;
      userIsCorrect = true;
      break;
    }
  }
  alert("You're wrong, try again.");
  attempts2--;
  if (attempts2 === 0) {
    alert(
      `You are wrong, my favorite colors are ${answerArray[0]}, ${answerArray[1]}, ${answerArray[2]}`
    );
  } else if (userIsCorrect === true) {
    break;
  }
}
alert("You're total score is " + total);
