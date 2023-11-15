// -------------------------------- Chapter 38 to 42 ----------------------------------

// ---------------------FUNCTIONS, SWITCH STATEMENTS, WHILE... DO-WHILE LOOPS


// Q1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b.

// function power(a,b) {
//     return Math.pow(a , b);
// }

// let result = power(2 , 3);
// console.log(result)

// Q2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.

// function isLeapYear(year) {
//     if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
//         return true;
//     }else {
//         return false;
//     }
// }

// let enteredYear = prompt('Enter a year'); 
 
// if(isLeapYear(enteredYear)) {
//     console.log(enteredYear + ' is a leap year');
// }else{
//     console.log(enteredYear + ' is not a leap year');
// }


// Q3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions

// function calculateTriangleArea(a , b ,c) {
//     let s = (a + b + c) / 2;
//     let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

//     return area;
// }

// let sideA = 5;
// let sideB = 7;
// let sideC = 8;

// let triangleArea = calculateTriangleArea(sideA, sideB, sideC);
// console.log("The area of the triangle is: " + triangleArea);


// Q4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.

// function calculateAverage(subject1 , subject2 , subject3) {
//     return (subject1 + subject2 + subject3) / 3;
// }

// function calculatePercentage(tatalMarks , maxMarks) {
//     return (tatalMarks / maxMarks) * 100;
// }

// function mainFunction() {
//     let englishMArks = 75;
//     let mathsMarks = 85;
//     let accountingMarks = 90;

//     let averageMarks = calculateAverage(englishMArks , mathsMarks , accountingMarks)

//     let maxMarksPerSubject = 100;
//     let totalMarks = englishMArks + mathsMarks + accountingMarks;

//     let percentage = calculatePercentage(totalMarks , maxMarksPerSubject * 3)

//     console.log("Average Marks: " + averageMarks);
//     console.log("Percentage Marks: " + percentage + "%");
// }

// mainFunction()

// Q5. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.

// function customIndexOf(string , character) {
//     for(let i = 0; i < string.length; i++) {
//         if(string[i] === character) {
//             return i;
//         }
//     }

//     return -1;
// }

// // console.log(customIndexOf("hello", "e"));
// // console.log(customIndexOf("hello", "o"));
// // console.log(customIndexOf("hello", "a"));
// // console.log(customIndexOf("hello", "l"));

// let myString = "Hello, World!";
// let charToFind = "o";

// let index = customIndexOf(myString, charToFind);
// console.log("Index of '" + charToFind + "': " + index);


// Q6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.

// function removeVowels(sentence) {
//     const vowels = ['a' , 'e' , 'i' , 'o' , 'u' , 'A' , 'E' , 'I' , 'O' , 'U'];

//     let sentenceArray = sentence.split('');

//     let arrayResult = sentenceArray.filter(char => !vowels.includes(char));

//     let result = arrayResult.join('');

//     return result;
// }

// let inputSentence = 'This Is A Simple Paragraph.';
// let result = removeVowels(inputSentence);

// console.log('Orignal Sentence :' + inputSentence);
// console.log('After Removing Vowels Words :' + result);


// Q7. Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence

// “Pleases read this application and give me gratuity”
// Such occurrences are ea, ea, ui.


// function countSuccessiveVowels(text) {
//     let count = 0;
//     text = text.toLowerCase();

//     for (let i = 0; i < text.length - 1; i++) {
//         let currentChar = text[i];
//         let nextChar = text[i + 1];

//         switch(currentChar) {
//             case 'a':
//             case 'e':
//             case 'i':
//             case 'o':
//             case 'u':
//                 switch(nextChar) {
//                     case 'a':
//                     case 'e':
//                     case 'i':
//                     case 'o':
//                     case 'u':
//                         count++;
//                         console.log("Successive vowels found: " + currentChar + nextChar);
//                         break;
//                 }
//                 break;
//         }
//     }
//     return count;
// }

// // let sentence = "Pleases read this application and give me gratuity";
// let sentence = "moon";

// let occurrences = countSuccessiveVowels(sentence);

// console.log("Number of occurrences of any two vowels in succession: " + occurrences);


// Q8. The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.

// function convertToMeters(distanceInKm) {
//     return distanceInKm * 1000;
// }

// function convertToFeet(distanceInKm) {
//     return distanceInKm * 3280.84;
// }

// function convertToInches(distanceInKm) {
//     return distanceInKm * 39370.1;
// }

// function convertToCentimeters(distanceInKm) {
//     return distanceInKm * 100000;
// }

// function printConvertDistance(distanceInKm) {
//     console.log("Distance in Meters: " + convertToMeters(distanceInKm) + " meters");
//     console.log("Distance in Feet: " + convertToFeet(distanceInKm) + " feet");
//     console.log("Distance in Inches: " + convertToInches(distanceInKm) + " inches");
//     console.log("Distance in Centimeters: " + convertToCentimeters(distanceInKm) + " centimeters");
// }

// let distanceBetweenCities = parseFloat(prompt("Enter the distance between two cities in kilometers:"));

// if(!isNaN(distanceBetweenCities)) {
//     printConvertDistance(distanceBetweenCities);
// }else{
//     console.log("Invalid input. Please enter a valid number.")
// }

// Q9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.

// function calculateOverTimePay(hoursWorked) {
//     const regularHours = 40;
//     const hourlyRate = 12.00;

//     if(hoursWorked <= regularHours) {
//         return 0; 
//     } else {
//         const overTimeHours = hoursWorked - regularHours;
//         const overTimePay = overTimeHours * hourlyRate;
//         return overTimePay;
//     }
// }

// let hoursWorked = prompt('Enter Over Time Hours');
// let overTimePay = calculateOverTimePay(hoursWorked);

// console.log(`OverTime Pay: Rs. ${overTimePay.toFixed(2)}`);


// Q10. A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer.

function calculateCurrencyNotes(amountInHundreds) {
  const denomination100 = 100;
  const denomination50 = 50;
  const denomination10 = 10;

  const amountInRupees = amountInHundreds * 100;

  const notes100 = Math.floor(amountInRupees / denomination100);
  const remainder100 = amountInRupees % denomination100;

  const notes50 = Math.floor(remainder100 / denomination50);
  const remainder50 = remainder100 % denomination50;

  const notes10 = Math.floor(remainder50 / denomination10);

  return {
    notes100,
    notes50,
    notes10
  };
}

const amountInHundreds = 3;
const result = calculateCurrencyNotes(amountInHundreds);

console.log(`Number of 100 Rupee notes: ${result.notes100}`);
console.log(`Number of 50 Rupee notes: ${result.notes50}`);
console.log(`Number of 10 Rupee notes: ${result.notes10}`);
