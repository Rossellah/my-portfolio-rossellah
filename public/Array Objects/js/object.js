let employees = [];

function showemployees() {
    let table = document.getElementById("employeeTable").getElementsByTagName("tbody")[0];
    table.innerHTML = "";

    employees.forEach(element => {
        let newRow = table.insertRow(-1); 
        let cell1 = newRow.insertCell(0);
        let cell2 = newRow.insertCell(1);
        let cell3 = newRow.insertCell(2);

        cell1.innerHTML = element.emp_id;
        cell2.innerHTML = element.name;
        cell3.innerHTML = element.position;
    });
}

function add() {
    const id = document.getElementById('ID').value; 
    const name = document.getElementById('Name').value; 
    const position = document.getElementById('Position').value; 

    if (id && name && position) {
        employees.push({ emp_id: id, name: name, position: position });

        let table = document.getElementById("employeeTable").getElementsByTagName("tbody")[0];
        let newRow = table.insertRow(-1); 
        let cell1 = newRow.insertCell(0); 
        let cell2 = newRow.insertCell(1);
        let cell3 = newRow.insertCell(2);

        cell1.innerHTML = id;
        cell2.innerHTML = name;
        cell3.innerHTML = position;

        document.getElementById('ID').value = "";
        document.getElementById('Name').value = "";
        document.getElementById('Position').value = "";
    } else {
        alert("Please fill out all fields!"); 
    }
}
