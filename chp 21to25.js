// -------------------------------- Chapter 21 to 25 ----------------------------------


// ------------------------ Question 1 ----------------------

 let firstName = prompt (`Enter your first name`);

 let lastName = prompt (`Enter your last name`);

 let fullName = firstName + " " + lastName;

 alert ("Hello, " + fullName + "! Welcome.");

// ------------------------ Question 2 ----------------------

let fvrtPhone = prompt (` Enter Your Favourate Mobile Name `);
let fvrtPhoneLength = fvrtPhone.length;

document.write(` Your Favourate Mobile is ` + fvrtPhone + ` lenght of your Mobile Name is ` + fvrtPhoneLength + "." );

// ------------------------ Question 3 ----------------------

let letter = "Pakistani";

let letterndex = letter.indexOf(`n`)

document.write(`Pakistani index of 'n' is :` + letterndex);

// ------------------------ Question 4 ----------------------

let word = "Hello World";

let lastIndexOFL = word.lastIndexOf("l")
document.write(` String: Hello World Last Index OF "l" : ` + lastIndexOFL);


// ------------------------ Question 5 ----------------------

let a = "Pakistani"

let thirdCharacter = a.charAt(3);

document.write(`String: pakistani character at index "3" is:` + thirdCharacter);


// ------------------------ Question 6 repeat Q1 in concat(method)----------------------

let fName = prompt(`Enter your first name`);
let lName = prompt(`Enter your last name`);

let concat = fName.concat( " ", lName);

alert("Hello, " + concat + "! Welcome!");

// ------------------------ Question 7 ----------------------

let originalWord = "Hydrabad";

let replaceWord = originalWord.replace("Hydrabad", "Islamabad");

document.write(`Original place:` + originalWord + "<br>");
document.write(`Replace place:` + replaceWord );

// ------------------------ Question 8 ----------------------

let massage = `“Ali and Sami are best friends. They play cricket and
football together.”;`;

let replaceMassage = massage.replace(/and/g, "&");

document.write("Original Message: " + massage + "<br>");
document.write("Replace Message: " + replaceMassage);

// ------------------------ Question 9 ----------------------

let stringValue = "472";

let stringToNumber = Number(stringValue);

document.write(`Original String :` + stringValue + "<br>");
document.write("Type of Original String: " + typeof stringValue + "<br>");


document.write(`Convert Number :` + stringToNumber + "<br>");
document.write("Type of Converted Number: " + typeof stringToNumber );

// ------------------------ Question 10 ----------------------

let yourInput = prompt(` Enter Your Input `);

let convertUpperCase = yourInput.toUpperCase();

document.write(`User input :` + yourInput + "<br>");
document.write(` Convert Upper Case : ` + convertUpperCase)

// ------------------------ Question 11 ----------------------

      var userInput = prompt("Enter a sentence or phrase:");
        
      var titleCaseInput = userInput.toLowerCase().replace(/(^|\s)\S/g, function(firstLetter) {
          return firstLetter.toUpperCase();
      });
      
      alert("Original Input: " + userInput);
      alert("Title Case Output: " + titleCaseInput);

// ------------------------ Question 12 ----------------------

let num = 35.36;

document.write("Number: " + num + "<br>");  

let numToString = num.toString();

let dotRemove = numToString.replace("." , "");

document.write("Result: " + dotRemove);

// ------------------------ Question 13 ----------------------

let inputUser = prompt("Enter your Name");

if (/[!@.,]/.test(inputUser)) {
    alert(" Please Enter a valid Username ")
}else {
    alert(`Thanks ` + inputUser + ` For Given Your Name`);
}

// ------------------------ Question 14 ----------------------

var A = ["cake", "apple pie", "cookie", "chips", "patties"];

var userInput = prompt("Welcomde To J.Bakery What Do You Want TO Ordered Sir/Mam: ").toLowerCase();

if (A.includes(userInput)) {
    alert("Yes, " + userInput + " Is Avalable In Our Bakery ");
} else {
    alert("No, We Are Sorry Sir " + userInput + " Is Not Available In Our Bakery.");
}

// ------------------------ Question 15 ----------------------

var msg = alert(`password Should must Enter alphabets and numbers`);
var msg = alert(`Password should not start with a number `);
var msg = alert(`password must at least 6 characters long`);

var password = prompt("Enter your Password:");

if (password.length < 6) {
    alert("Password at least 6 characters.");
} else {

    var firstChar = password.charAt(0);

    if (/^[a-zA-Z0-9]+$/.test(password) && isNaN(firstChar)) {
        alert("Correct Password: " + password);
    } else {
        alert("Wronge Password Please Enter a correct Password.");
    }
}

// ------------------------ Question 16 ----------------------

var university = "University of Karachi";

var universityArray = university.split('');

for (var i = 0; i < universityArray.length; i++) {
    document.write(universityArray[i] + "<br>");
}

// ------------------------ Question 17 ----------------------

var enterWord = prompt("Enter Something:");

if (enterWord !== null && enterWord !== "") {

    var lastCharacter = enterWord.charAt(enterWord.length - 1);
    alert( "User Input: " + enterWord)
    alert("Last character: " + lastCharacter);
} else {
    alert("No input provided.");
}


// ------------------------ Question 18 ----------------------

let story = "The quick brown fox jumps over the lazy dog";

let lowercaseString = story.toLowerCase();

let wordToSearch = "the";

var wordCount = 0;

var index = lowercaseString.indexOf(wordToSearch);
while (index !== -1) {
    wordCount++;
    index = lowercaseString.indexOf(wordToSearch, index + 1);
}

alert("Word 'the' " + wordCount + " times in the given string.");