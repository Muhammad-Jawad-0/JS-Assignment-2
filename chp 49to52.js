// -------------------------------- Chapter 49 to 52 ----------------------------------

// ---------------------EVENTS

// Q1. Create a signup form and display form data in your web
// page on submission.

// function displayFormData(event) {
//     event.preventDefault();

//     let name = document.getElementById('name').value;
//     let email = document.getElementById('email').value;
//     let password = document.getElementById('password').value;

//     let displayElement = document.getElementById('formDataDisplay');
//     displayElement.innerHTML = '<h3>Form Data</h3>' + 
//     '<p><strong>Name :</strong> ' + name + '</p>' + 
//     '<p><strong>Email :</strong> ' + email + '</p>' + 
//     '<p><strong>Password :</strong> ' + password + '</p>';
// }

// Q2. Suppose in your webpage there is content area in which
// you have entered your item details, but user can only see
// some details on first look. When user clicks on “Read
// more” button, full detail of that particular item will be
// displayed.

// function toggleDetails() {
//     let extraDetails = document.getElementById('extraDetail');

//     if(extraDetails.style.display === 'none') {
//         extraDetails.style.display = 'block';
//     } else {
//         extraDetails.style.display = 'none';
//     }
// }



// Q3. In previous assignment you have created a tabular data
// using javascript. Let’s modify that. Create a form which
// takes student’s details and show each student detail in
// table. Each row of table must contain a delete button and
// an edit button. On click on delete button entire row should
// be deleted. On click on edit button, a hidden form will
// appear with the values of that row.

function addStudent() {
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let grade = document.getElementById('grade').value;

    if(name && age && grade) {
        let table = document.getElementById('studentTable');
        let newRow = table.insertRow(table.rows.length);

        let cell1 = newRow.insertCell(0);
        let cell2 = newRow.insertCell(1);
        let cell3 = newRow.insertCell(2);
        let cell4 = newRow.insertCell(3);

        cell1.innerHTML = name;
        cell2.innerHTML = age;
        cell3.innerHTML = grade;

        cell4.innerHTML =  '<button onclick="deleteRow(this)">Delete</button>' +
        '<button onclick="editRow(this)">Edit</button>';

        document.getElementById('name').value = '';
        document.getElementById('age').value = '';
        document.getElementById('grade').value = '';
    }
}

function deleteRow(btn) {
    let row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function editRow(btn) {
    let row = btn.parentNode.parentNode;
    let name = row.cells[0].innerHTML;
    let age = row.cells[1].innerHTML;
    let grade = row.cells[2].innerHTML;

    document.getElementById('name').value = name;
    document.getElementById('age').value = age;
    document.getElementById('grade').value = grade;

    deleteRow(btn)
}





