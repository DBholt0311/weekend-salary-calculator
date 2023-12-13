
function addEmployee(event) {
    event.preventDefault();
    console.log('submitform');
    let firstNameVal = document.querySelector('#firstNameInput').value;
    let lastNameVal = document.querySelector('#lastNameInput').value;
    let idVal = document.querySelector('#idInput').value;
    let titleVal = document.querySelector('#titleInput').value;
    let annualSalaryVal = document.querySelector('#annualSalaryInput').value;
    let employeeTable = document.querySelector('#employeeData');
    employeeTable.innerHTML += `
        <tr>
            <td>${firstNameVal}</td>
            <td>${lastNameVal}</td>
            <td>#${idVal}</td>
            <td>${titleVal}</td>
            <td>$${annualSalaryVal}</td>
            <td><button id='delete' onclick='handleDeleteClick(event)'>DELETE</button></td>
        </tr>
    `
    let allInputs = document.querySelectorAll('input');
    allInputs.forEach(singleInput => singleInput.value='');
    }

    function handleDeleteClick(event) {
        event.preventDefault();
        console.log('delete');
        
    }