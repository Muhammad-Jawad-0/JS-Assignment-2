// -------------------------------- Chapter 17 to 20 ----------------------------------


// ------------------------ Question 1 ----------------------

let emptyMultiArray = [];

// ------------------------ Question 2 ----------------------

let matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];

console.log(matrix)

// // ------------------------ Question 3 ----------------------
  
for (let i = 1; i <= 10; i++) {
    console.log(i)
};
 

// ------------------------ Question 4 ----------------------

let multiplicationNumber = prompt ("Enter a number to show it's multiplication table")
let multiplicationLength = prompt ("Enter length multiplication table")

console.log(`Multiplication table of ${multiplicationNumber} lenght ${multiplicationLength} is:`);

for(let i = 1; i <= multiplicationLength; i++) {
    const result = multiplicationNumber * i;
    console.log(`${multiplicationNumber} x ${i} = ${result}`)
};

// ------------------------ Question 5 ----------------------

let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

console.log('fruits List');

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// ------------------------ Question 6 ----------------------

    // Counting
    let counting = '';
    for (let i = 1; i <= 15; i++) {
      counting += i + ', ';
    }
    document.getElementById('counting').textContent = counting.slice(0, -2); // Remove the trailing comma

    // Reverse counting
    let reverseCounting = '';
    for (let i = 10; i >= 1; i--) {
      reverseCounting += i + ', ';
    }
    document.getElementById('reverseCounting').textContent = reverseCounting.slice(0, -2);

    // Even
    let even = '';
    for (let i = 0; i <= 20; i += 2) {
      even += i + ', ';
    }
    document.getElementById('even').textContent = even.slice(0, -2);

    // Odd
    let odd = '';
    for (let i = 1; i <= 19; i += 2) {
      odd += i + ', ';
    }
    document.getElementById('odd').textContent = odd.slice(0, -2);

    // Series
    let series = '';
    for (let i = 1; i <= 10; i++) {
      series += (2 * i) + 'k, ';
    }
    document.getElementById('series').textContent = series.slice(0, -2);


// ------------------------ Question 7 ----------------------

let foodsItem = [`cake`, `apple pie`, `cookie`, `chips`, `patties`];

let foods = prompt (`Welcome to Jawad.Bakery. what do you want to order sir / man?`)

const searchTerm = foods.toLowerCase();

if(foods === "cake") {

    document.write("cake is available at index 0" )

} else if (foods === "apple pie") {

    document.write("apple pie is available at index 1 " )

}else if (foods === "cookie") {

    document.write("cookie is available at index 2 ")

}else if (foods === "chips") {

    document.write("chips is available at index 3")

}else if (foods === "patties") {

    document.write("patties is available at index 4 ")

}else{
    document.write(" we are sorry "+ foods + "is not available in our bakery ")
}



// -----------------------chat gpt -----------------

// // Define the array of items
// const A = ["cake", "apple pie", "cookie", "chips", "patties"];

// // Prompt the user for input
// const userInput = prompt("Enter an item to search:");

// // Initialize a variable to track whether the item is found
// let isFound = false;

// // Loop through the array to search for the item
// for (let i = 0; i < A.length; i++) {
//   if (userInput === A[i]) {
//     isFound = true;
//     break; // Exit the loop if the item is found
//   }
// }

// // Display the result to the user
// if (isFound) {
//   alert("The item is found in the list.");
// } else {
//   alert("The item is not found in the list.");
// }


// ------------------------ Question 8 ----------------------

const a = [24, 53, 78, 91, 12];
 

let largestNumber = a[0];

for (let i = 1; i < a.length; i++) {
  if (a[i] > largestNumber) {
    largestNumber = a[i];
  }
}

console.log("The largest number in the array is: " + largestNumber);


// ------------------------ Question 9 ----------------------

let b = [24, 53, 78, 91, 12];

let smallestNumber = b[0];

for (let i = 1; i > b.length; i--) {
    if (b[i] < smallestNumber) {
        smallestNumber = b[i];
    }
}

console.log("The Smallest number in the array is: " + smallestNumber);


// ------------------------ Question 10 ----------------------

for (let i = 1; i <= 100; i++) {

    if (i % 5 === 0) {

      console.log(i);

    }
  }
  