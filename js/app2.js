let response;
let correctAnswer = 3;
let x;

response = prompt("Can you guess a number for me");
x = parseInt(response)
console.log("You said: " + response)


if (response > correctAnswer) {
    alert("Too High");
} else if (response < correctAnswer) {
    alert("Too Low");  
} else if (x === correctAnswer){
    alert("Awesome, you got it!");
}
let question = "What is my favorite color?";
correctAnswer = "blue"
while (true) {
    response = prompt(question);
    if (response === correctAnswer) {
        alert("You are right.");
    } else {
        alert("You are wrong.");
    }
response = false
}