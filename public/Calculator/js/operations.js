function plus() {
    const display1 = document.getElementById('display1').value;
    const display2 = document.getElementById('display2').value;
    const operator = document.getElementById('operator').value;

    if (display2 === "") { 
        document.getElementById('display2').value = display1;
    } else if (operator !== "") {
        document.getElementById('display2').value = calculate(Number(display2), Number(display1), operator);
    }

    document.getElementById('display1').value = "0";
    document.getElementById('operator').value = "+";
}

function minus() {
    const display1 = document.getElementById('display1').value;
    const display2 = document.getElementById('display2').value;
    const operator = document.getElementById('operator').value;

    if (display2 === "") {
        document.getElementById('display2').value = display1;
    } else if (operator !== "") {
        document.getElementById('display2').value = calculate(Number(display2), Number(display1), operator);
    }

    document.getElementById('display1').value = "0";
    document.getElementById('operator').value = "-";
}

function times() {
    const display1 = document.getElementById('display1').value;
    const display2 = document.getElementById('display2').value;
    const operator = document.getElementById('operator').value;

    if (display2 === "") {
        document.getElementById('display2').value = display1;
    } else if (operator !== "") {
        document.getElementById('display2').value = calculate(Number(display2), Number(display1), operator);
    }

    document.getElementById('display1').value = "0";
    document.getElementById('operator').value = "*";
}

function div() {
    const display1 = document.getElementById('display1').value;
    const display2 = document.getElementById('display2').value;
    const operator = document.getElementById('operator').value;

    if (display2 === "") {
        document.getElementById('display2').value = display1;
    } else if (operator !== "") {
        if (Number(display1) === 0) {
            document.getElementById('display2').value = "Error";
        } else {
            document.getElementById('display2').value = calculate(Number(display2), Number(display1), operator);
        }
    }

    document.getElementById('display1').value = "0";
    document.getElementById('operator').value = "/";
}

function dot() {
    const display1 = document.getElementById('display1').value;
    if (!display1.includes(".")) {
        document.getElementById('display1').value = display1 + ".";
    }
}

function equals() {
    const display1 = document.getElementById('display1');
    const display2 = document.getElementById('display2');
    const operator = document.getElementById('operator').value;
    let answer;

    if (operator === "+") {
        answer = Number(display2.value) + Number(display1.value);
    } else if (operator === "-") {
        answer = Number(display2.value) - Number(display1.value);
    } else if (operator === "*") {
        answer = Number(display2.value) * Number(display1.value);
    } else if (operator === "/") {
        if (Number(display1.value) === 0) {
            answer = "Error"; 
        } else {
            answer = Number(display2.value) / Number(display1.value);
        }
    } else {
        answer = Number(display1.value); 
    }

    display1.value = answer; 
    display2.value = ""; 
    document.getElementById('operator').value = ""; 
}
