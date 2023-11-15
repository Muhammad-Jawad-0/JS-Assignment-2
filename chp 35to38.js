// -------------------------------- Chapter 35 to 38 ----------------------------------

// ---------------------FUNCTION

//----------Q1. Write a function that displays current date & time in your browser.

// function displayCurrentDateAndTime() {
//   let dateTime = new Date();
//   let dateTimeString = dateTime.toLocaleString();

//   document.getElementById("date-time").innerHTML =
//     "Current Date And Time :" + dateTimeString;
// }

// displayCurrentDateAndTime();

// setInterval(displayCurrentDateAndTime, 1000);

//------ Q2. Write a function that takes first & last name and then it greets the user using his full name.

// function greetUser() {
//   let firstName = document.getElementById("first-name").value;
//   let lastName = document.getElementById("last-name").value;
//   let fullName = firstName + " " + lastName;
//   let greeting = "Assalam-o-alaikum " + fullName + "!";
//   document.getElementById("greeting").innerHTML = greeting;
// }

// ----- Q3. Write a function that adds two numbers (input by user) and returns the sum of two numbers.

// function addNumbers() {
//   let firstNumber = parseFloat(document.getElementById("first-number").value);
//   let secondNumber = parseFloat(document.getElementById("second-number").value);
//   let result = firstNumber + secondNumber;
//   document.getElementById("result").innerHTML = "The Sum Is :" + result;
// }

// -------Q4. Calculator:
// Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.

// function calculate(num1, num2, operator) {
//   let result;

//   switch (operator) {
//     case "+":
//       result = num1 + num2;
//       break;
//     case "-":
//       result = num1 - num2;
//       break;
//     case "*":
//       result = num1 * num2;
//       break;
//     case "/":
//       if (num2 !== 0) {
//         result = num1 / num2;
//       } else {
//         result = "Division by zero is not allowed";
//       }
//       break;
//     default:
//       result = "Invalid operator";
//   }

//   return result;
// }

// // Example usage:
// const num1 = 5;
// const num2 = 3;
// const operator = '-';
// const result = calculate(num1, num2, operator);

// document.write(`Result: ${result}`);



// ------- Q5. Write a function that squares its argument.

// function square(number) {
//   return number * number;
// }

// let result = square(25);
// console.log(result);

// Q6. Write a function that computes factorial of a number.

// function factorial(n) {
//   if(n === 0 || n === 1){
//     return 1;
//   }else {
//     return n * factorial(n - 1);
//   }
// }

// let result = factorial(3);
// console.log(result)


// Q7. Write a function that take start and end number as inputs
// & display counting in your browser.

// function displayCounting(start, end) {
//   if(start <= end) {
//     for(let i = start; i <= end; i++){
//       window.alert(i)
//     }
//   }else {
//     window.alert("Start number should be less than or equal to the end number.")
//   }
// }

// displayCounting(11 , 10)



// Q8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2

// function | JAVASCRIPT

// Page 2 of 4

// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

// function calculateHypotenuse(base, perpendicular) {
//   function calculateSquare(number) {
//     return number * number
//   }

//   let baseSquare = calculateSquare(base);
//   let perpendicularSquared = calculateSquare(perpendicular);
//   let hypotenuseSqaured = baseSquare + perpendicularSquared;
//   let hypotenuse = Math.sqrt(hypotenuseSqaured);
//   return hypotenuse;
// }

// const base = 3;
// const perpendicular = 4;
// const hypotenuse = calculateHypotenuse(base , perpendicular);
// console.log('hypotenuse :' + hypotenuse ); 


// Q9. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:

// i. Arguments as value
// ii. Arguments as variables

// function calculateRectangle(width , height) {
//   return  width * height;
// }

// const recWidth = 5;
// const recHeight = 8;
// const area = calculateRectangle(recWidth , recHeight);
// console.log(' Rectangle Area 5 width of 8 Height is :' + area);


// Q10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?

// function palindrome(str) {
//   str = str.replace(/\s/g, '').toLowerCase();
//   return str = str.split('').reverse().join('');

// }

// console.log(palindrome('madam'));
// console.log(palindrome('jawad'));
// console.log(palindrome('Lol'));
// console.log(palindrome("racecar"))


// Q11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'


// function capitalizeWords(inputString) {
//   const words = inputString.split(' ');

//   for(let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase()+ words[i].slice(1);
// }

// const resultString = words.join(' ');

// return resultString;
// }

// const inputString = 'my name is jawad';
// const result = capitalizeWords(inputString);
// console.log(result);


// Q12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

// function findLongestWord(inputString) {
//   const words = inputString.split(' ');

//   let longestWord = "";

//   for(let i = 0; i < words.length; i++) {
//     if(words[i].length > longestWord.length) {
//       longestWord = words[i];
//     }
// }

// return longestWord;
// }

// const inputString = 'Web Development course';
// const result = findLongestWord(inputString)
// console.log(result);



// Q13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of

// function | JAVASCRIPT

// Page 3 of 4

// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'

function countLetterOccurrences(inputString , letter) {
  const characters = inputString.split('');

  let count = 0;
  for(let i = 0; i < characters.length; i++) {
    if(characters[i] === letter) {
      count++;
    }
  }
  return count;
}

const inputString = 'JSResourceS.com';
const letterToCount = 'o';
const result = countLetterOccurrences(inputString , letterToCount);
console.log(result);



// Q14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".

// Circumference of circle = 2πr
// Area of circle = πr2

function calcCircumference(radius) {
  const circumference = 2 * Math.PI * radius;
  console.log(`circumference is ${circumference}`);
}

function calcArea(radius) {
  const area = Math.PI * Math.pow(radius , 2);
  console.log(`Area is ${area}`);
}

const radius = 5;
calcCircumference(radius);
calcArea(radius);