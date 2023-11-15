// -------------------------------- Chapter 31 to 34 ----------------------------------

// ---------------------DATE METHODS



//---------- Q1. Write a program that displays current date and time in
// your browser.--------------

/*let date = new Date();

let print = document.write(date);*/


//--------- Q2. Write a program that alerts the current month in words.
// For example December.-----------

/*let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let currentDate = new Date();
let currentMonth = currentDate.getMonth();

const currentMonthName = months[currentMonth];

alert('Current Month is :' + currentMonthName); */


// ------------------Q3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.----------------

// let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// let currentDate = new Date();
// let currentDay = currentDate.getDay();

// const currentDayName = days[currentDay];
// alert('Today is : '+ currentDayName);


// ----------Q4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.


// const today = new Date();

// const dayOfWeek = today.getDay();

// if(dayOfWeek === 0 || dayOfWeek === 6){
//     alert(`It’s Fun day`)
// }else {
//     alert('It’s not Fun day')
// }


// -------Q5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

// const today = new Date();

// const dayOfMonth = today.getDate();

// if(dayOfMonth < 16){
//     alert(`First fifteen days of the month”`)
// }else {
//     alert(`Last fifteen days of the month`)
// }


// Q6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

// const minutesSinceEpoch = Math.floor((Date.now() - new Date("1970-01-01T00:00:00Z")) / 60000);

// alert(minutesSinceEpoch);


// Q7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

// let currentTime = new Date().getHours();

// if(currentTime < 12) {
//     alert("It's AM")
// }else{
//     alert("It's PM")
// }

// Q8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

// const latterDate = new Date('2020-12-31');
// alert(latterDate)

// Q9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

// const ramdanStartDate = new Date('2015-06-18');
// const currentDate = new Date();
// const timeDiff = currentDate - ramdanStartDate;
// const daysPassed = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
// alert("Number of days passed since 1st Ramadan: " + daysPassed);

// Q10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

// const referenceDate = new Date('2023-01-01');
// const beginningOf2015 = new Date('2015-01-01');
// const timeDiff = referenceDate - beginningOf2015;
// const secondsElapsed = Math.floor(timeDiff / 1000);
// document.write("Seconds elapsed between the reference date and the beginning of 2015: " + secondsElapsed);

// Q11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.

// let currentDate = new Date();
// let currentHours = currentDate.getHours();
// currentDate.setHours(currentHours + 1);
// document.write("Current Date and Time: " + currentDate);


// Q12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

// let currentDate = new Date();
// document.write('Current Date: '+ currentDate.toDateString() + '</br>')
// currentDate.setFullYear(currentDate.getFullYear() - 100);
// document.write("Date 100 years ago: " + currentDate.toDateString());

// Q13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

// let age = prompt('Please Enter your age');
// let currentYear = new Date().getFullYear();
// let birth = currentYear - age;
// alert("Your birth year is: " + birth)




// Q14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month

// DATE METHODS | JAVASCRIPT

// Page 5 of 5

// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,

// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

// let customerName = prompt('Enter your Name');
// let currentMonth = prompt('Enter The Current Month');
// let numberOfUnits = parseFloat(prompt('Enter The Number of Units'));
// let chargesPerUnit = parseFloat(prompt('Enter The Charges Per Unit'));
// let dueDate = prompt('Enter the due date (YYYY-MM-DD):');
// let latePaymentSurchargeRate = 0.1

// // Calculate net amount payable
// let netAmountPayable = (numberOfUnits * chargesPerUnit).toFixed(2);


// // Calculate late payment surcharge
// let currentDate = new Date();
// let isLate = currentDate > new Date(dueDate);
// let latePaymentSurcharge = isLate ? (netAmountPayable * latePaymentSurchargeRate).toFixed(2):"0.00"

// // Calculate gross amount payable
// const grossAmountPayable = (parseFloat(netAmountPayable) + parseFloat(latePaymentSurcharge)).toFixed(2);

// // Display the K-Electric bill in the browser
// document.write("<h2>K-Electric Bill</h2>");
// document.write("<p><strong>Customer Name:</strong> "+ customerName + "</p>");
// document.write("<p><strong>Month</strong> "+ currentMonth + "</p>");
// document.write("<p><strong>Number Of Units</strong> "+ numberOfUnits.toFixed(2) + "</p>");
// document.write("<p><strong>Charges Per Unit</strong> "+ chargesPerUnit.toFixed(2) + "</p>");
// document.write("<p><strong>Net Amount Payable (within Due Date):</strong> $" + netAmountPayable + "</p>");
// document.write("<p><strong>Late Payment Surcharge:</strong> $" + latePaymentSurcharge + "</p>");
// document.write("<p><strong>Gross Amount Payable (after Due Date):</strong> $" + grossAmountPayable + "</p>");
