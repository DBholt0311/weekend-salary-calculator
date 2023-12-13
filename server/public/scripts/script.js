
let totalMonthly = 0;

function addEmployee(event) {
    event.preventDefault();
    console.log('submitform');
    let firstNameVal = document.querySelector('#firstNameInput').value;
    let lastNameVal = document.querySelector('#lastNameInput').value;
    let idVal = document.querySelector('#idInput').value;
    let titleVal = document.querySelector('#titleInput').value;
    let annualSalaryVal = document.querySelector('#annualSalaryInput').value;
    let employeeTable = document.querySelector('#employeeData');
    let MonthlySalary = document.querySelector('#totalMonthly');
    let allInputs =document.querySelectorAll('input');
    totalMonthly += Math.round(annualSalaryVal/12);
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
    allInputs.forEach(singleInput => singleInput.value ='');
    MonthlySalary.innerHTML += `Total Monthly: ${totalMonthly}`;
    if (totalMonthly > 20000) {
        document.getElementById("total");
        total.classList.add('over-budget');
    }

}

    function handleDeleteClick(event) {
        event.preventDefault();
        let td = event.target.parentNode;
        let tr = td.parentNode;
        tr.parentNode.removeChild(tr);
        
        
    }