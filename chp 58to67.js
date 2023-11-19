// -------------------------------- Chapter 58 to 67 ----------------------------------

// ---------------------DOM

// Q1. Consider you have following code snippet:

// (Copy it in your HTML file)

// <div>
// <h1> DOM </h1>
// <div id=”form-content” class=”content”>
// <label for=”first-name”>First Name</label>
// <input type=”text” id=”first-name” />
// <label for=”last-name”>Last Name</label>
// <input type=”text” id=”last-name” />
// <label for=”email”>Email</label>
// <input type=”text” id=”email” />
// </div>
// <div id=”main-content” class=”content”>
// <p class=”render”> First Name : Alex</p>
// <p class=”render” id=”lastName”>Last Name: Bank</p>
// <p class=”render”> Email : alexbank@example.com</p>
// <p class=”render”> Country : Pakistan </p>
// <p class=”render”> contact : +92 300 1234567</p>
// </div>
// </div>
// i. Get element of id “main-content” and assign them in a variable.
// ii. Display all child elements of “main-content” element.
// iii. Get all elements of class “render” and show their innerHTML
// in browser.
// iv. Fill input value whose element id first-name using javascript.
// v. Repeat part iv for id ”last-name” and “email”.

// let mainContent = document.getElementById('main-content');

// console.log('Child Element Of Main Contant :' , mainContent.children);

// let renderElements = document.getElementsByClassName('render');
// for(let i = 0; i < renderElements.length; i++) {
//     console.log('innerHTML Of Rander Element :' , renderElements[i].innerHTML);
// }

// document.getElementById('first-name').value = "YourFirstName";

// document.getElementById('last-name').value = "YourLastName";
// document.getElementById('email').value = "you@example.com";


// Q2. use HTML code of question 1 and show the result on browser.
// i. What is node type of element having id “form-content”.
// ii. Show node type of element having id “lastName” and its child node.
// iii. Update child node of element having id “lastName”.
// iv. Get First and last child of id “main-content”.
// v. Get next and previous siblings of id “lastName”.
// vi. Get parent node and node type of element having id “email”

//>>>>>>> (i)
let formContentNode = document.getElementById('form-content');
console.log('i. Node Type Of "form-content" :' , formContentNode.nodeType);

//>>>>>>> (ii)
let lastNameNode = document.getElementById("lastName");
console.log("ii. Node Type Of Last Name : " , lastNameNode.nodeType);
console.log("   Child nodes of 'lastName':", lastNameNode.nodeType.childNodes);

//>>>>>>> (iii)
lastNameNode.textContent = 'Last Name: Updated'

//>>>>>>> (iv)

let mainContent = document.getElementById('main-content');
console.log("First Child Of 'main-content'" , mainContent.firstElementChild);
console.log("Last Child Of 'main-content'" , mainContent.lastElementChild);

//>>>>>>> (v)

let lastNameNextSibling = lastNameNode.nextElementSibling;
let lastNamePreviousSibling = lastNameNode.previousElementSibling;
console.log('Next Element Siblings Of "lastName": ' , lastNameNextSibling);
console.log('Previous Element Siblings Of "lastName": ' , lastNamePreviousSibling);


//>>>>>>> (vi)

let emailNode = document.getElementById('email');
let emailParentNode = emailNode.parentNode;

console.log('Parent Node Of Email :' , emailParentNode);
console.log('Node Type Of Email :' , emailNode.nodeType) 
























