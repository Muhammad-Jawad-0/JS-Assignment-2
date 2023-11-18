// -------------------------------- Chapter 43 to 48 ----------------------------------

// ---------------------EVENTS

// Q1. Show an alert box on click on a link.
// Q2. Display some Mobile images in browser. On click on an
// image Show the message in alert to user.

function showAlert(message) {
    alert(message);
  }

//   Q3. Display 10 student records in table and each row should contain a delete
//   button. If you click on a button to delete a record, entire row should be
//   deleted.

function deleteRow(button) {
    let row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}


// Q4. Display an image in browser. Change the picture on mouseover and set the
// first picture on mouseout.

function changeImage(newSource) {
    document.getElementById('hoverImage').src = newSource;
}


// Q5. Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter
// value in browser.

let counter = 0;

function incrementCounter(){
    counter++;
    updateCounterDisplay();
}

function decrementCounter(){
    counter--;
    updateCounterDisplay();
}

function updateCounterDisplay(){
    document.getElementById('counterDisplay').textContent = counter;
}