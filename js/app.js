'use strict'
//TODO: ask the user's name.
let nombre = prompt("Welcome to my game! What is your name?");

//TODO: Ask 5 y/n questions
let answerOne = prompt("Did I take a web design class?");
let answerTwo = prompt("Can I speak another language?");
let answerThree = prompt("Is my favorite color yellow");
let answerFour = prompt("Have I traveled outside of the US");
let answerFive = prompt("Am I left-handed?");

//use if / else
//if 'y' then you are correct

if(answerOne === 'y' || answerOne === 'yes'){
    console.log("(¡Así es!)That's right!");
} else {
    // if 'n' then you are incorrect
    console.log("(Está mal) That's wrong.");
}

if(answerTwo === 'y' || answerTwo === 'yes'){
    console.log("(¡Así es!)That's right!");
} else {
    // if 'n' then you are incorrect
    console.log("(Está mal) That's wrong.");
}

if(answerThree === 'n' || answerThree === 'no'){
    console.log("(¡Así es!)That's right!");
} else {
    // if 'y' then you are incorrect
    console.log("(Está mal) That's wrong.");
}

if(answerFour === 'n' || answerFour === 'no'){
    console.log("(¡Así es!)That's right!");
} else {
    // if 'n' then you are incorrect
    console.log("(Está mal) That's wrong.");
}

if(answerFive === 'y' || answerFive === 'yes'){
    console.log("(¡Así es!)That's right!");
} else {
    // if 'n' then you are incorrect
    console.log("(Está mal) That's wrong.");
}

//TODO: Give a response with an alert. 

// Notify user if they are correct. 
