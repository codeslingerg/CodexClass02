"use strict";
let nombre = prompt("Welcome to my game! What is your name?");
console.log("Hello " + nombre + "!");
alert("Hello " + nombre + "!");

let answerOne = prompt("Did I take a web design class?");
if (answerOne === "y" || answerOne === "yes") {
  console.log("¡Así es!");
  alert("¡Así es!");
} else {
  console.log("Está mal");
  alert("Está mal");
}
let answerTwo = prompt("Can I speak another language?");

if (answerTwo === "y" || answerTwo === "yes") {
  console.log("¡Así es!");
  alert("¡Así es!");
} else {
  console.log("Está mal");
  alert("Está mal");
}
let answerThree = prompt("Is my favorite color yellow");
if (answerThree === "n" || answerThree === "no") {
  console.log("¡Así es!");
  alert("¡Así es!");
} else {
  console.log("Está mal");
  alert("Está mal");
}
let answerFour = prompt("Have I traveled outside of the US");
if (answerFour === "n" || answerFour === "no") {
  console.log("¡Así es!");
  alert("¡Así es!");
} else {
  console.log("Está mal");
  alert("Está mal");
}
let answerFive = prompt("Am I left-handed?");
if (answerFive === "y" || answerFive === "yes") {
  console.log("¡Así es!");
  alert("¡Así es!");
} else {
  console.log("Está mal");
  alert("Está mal");
}

let response;
let correctAnswer = 3;
let z;

response = prompt("Can you guess a number for me");
console.log("You said: " + z);

z = parseInt(response);

if (response > correctAnswer) {
  alert("Too High");
} else if (response < correctAnswer) {
  alert("Too Low")
} else if (z === correctAnswer) {
  alert("Awesome, you got it!");
}



