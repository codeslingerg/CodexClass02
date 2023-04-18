'use strict'
let nombre = prompt("Welcome to my game! What is your name?");

let answerOne = prompt("Did I take a web design class?");
let answerTwo = prompt("Can I speak another language?");
let answerThree = prompt("Is my favorite color yellow");
let answerFour = prompt("Have I traveled outside of the US");
let answerFive = prompt("Am I left-handed?");


if(answerOne === 'y' || answerOne === 'yes'){
    console.log("¡Así es!");
} else {
    console.log("Está mal");
}

if(answerTwo === 'y' || answerTwo === 'yes'){
    console.log("¡Así es!");
} else {
    
    console.log("Está mal");
}

if(answerThree === 'n' || answerThree === 'no'){
    console.log("¡Así es!");
} else {
    
    console.log("Está mal");
}

if(answerFour === 'n' || answerFour === 'no'){
    console.log("¡Así es!");
} else {
    
    console.log("Está mal");
}

if(answerFive === 'y' || answerFive === 'yes'){
    console.log("¡Así es!");
} else {
    
    console.log("Está mal");
}
