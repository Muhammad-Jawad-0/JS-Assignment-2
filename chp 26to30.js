// -------------------------------- Chapter 26 to 30 ----------------------------------


// ------------------------ Question 1 ----------------------

const userInput = prompt (`Please Enter A Positive integer value`);

const number = parseFloat(userInput);

if (isNaN(number) || number <= 0) {
    document.write(`Invalid input. Please enter a positive integer.`);
}
else {
    const roundedValue = Math.round(number);
    const flooredValue = Math.floor(number);
    const ceiledValue = Math.ceil(number);

    document.write(`Number : ` + number + "</br>");
    document.write(`Round Of Value : ` + roundedValue + "</br>");
    document.write(`Floor Value : ` + flooredValue + "</br>");
    document.write(`Ceil Value : ` + ceiledValue + "</br>");
}

// ------------------------ Question 2 ----------------------

let userInputN = prompt(`Please Enter A negative floating point Value`);

let negativeValue = parseFloat(userInputN);

if (isNaN(negativeValue) || negativeValue >= 0) {
    document.write(`Invalid input. Please enter a negative integers Value.`);
}else {
const negativeRoundValue = Math.round(negativeValue);
const negativeFlooredValue = Math.floor(negativeValue);
const negativeCeiledValue = Math.ceil(negativeValue);

document.write(`Number : ` + negativeValue + "</br>");
document.write(`Round OF Value : ` + negativeRoundValue + "</br>");
document.write(`Floor Value : ` + negativeFlooredValue + "</br>");
document.write(`Ceil Value : ` + negativeCeiledValue + "</br>");
}

// ------------------------ Question 3 ----------------------

const absNumber = parseFloat(prompt(`Enter A Number`));

if (!isNaN(absNumber)) {
    let absoluteNumber = Math.abs(absNumber);
    document.write(`The Absolute Value Of ${absNumber} is ${absoluteNumber}`);
}else {
    document.write(`Please Enter A Valid Number`)
};

// ------------------------ Question 4 ----------------------

let dice = Math.floor(Math.random() * 6) + 1;
let dice1 = Math.floor(Math.random() * 6) + 1;
let dice2 = Math.floor(Math.random() * 6) + 1;

   
document.write(`The dice rolled a ${dice}.` + "</br>");
document.write(`The dice rolled a ${dice1}.`+ "</br>");
document.write(`The dice rolled a ${dice2}.`+ "</br>");

// ------------------------ Question 5 ----------------------

const coin = Math.floor(Math.random() * 2);

let coinResult = coin === 0 ? "Heads" : "Tails" ;

document.write(`The Coins Toss Result Is :${coinResult}` + "</br>");

// ------------------------ Question 6 ----------------------

let randomNum = Math.floor(Math.random() * 100) + 1;

document.write(`The random number between 1 and 100 is: ${randomNum}`);

// ------------------------ Question 7 ----------------------

let weightInput = prompt(`Enter your weight (e.g., 50, 50kgs, 50.2kgs, 50.2kilograms):`)

if((weightInput)) {
    document.write(`Your weight is ${weightInput} kilograms.`)
}else {
    document.write(`Invalid input. Please enter a valid weight.`)
}

// ------------------------ Question 8 ----------------------

let secretNumber = Math.floor(Math.random() * 10) + 1;

let UserGuess = parseFloat(prompt(`Guess The Secret Number(Between 1 to 10:)`));

if(!isNaN(UserGuess) && UserGuess >= 1 && UserGuess <= 10) {
    if(UserGuess === secretNumber){
        alert(`"Congratulations! You Win The Game"`)
    }else {
        alert(`Sorry, the secret number was ${secretNumber}. Try again!`)
    }
}else {
    alert("Invalid input. Please enter a number between 1 and 10.");
}