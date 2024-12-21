function updateButtonText() {
    const operator = document.getElementById('operator').value;
    const calculateButton = document.getElementById('calculateButton');
    switch (operator) {
        case '+':
            calculateButton.innerText = 'Add';
            break;
        case '-':
            calculateButton.innerText = 'Subtract';
            break;
        case '*':
            calculateButton.innerText = 'Multiply';
            break;
        case '/':
            calculateButton.innerText = 'Divide';
            break;
        default:
            calculateButton.innerText = 'Calculate';
    }
}

function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;
    let result = 0;
    if (isNaN(num1) || isNaN(num2)) {
        alert('Please enter valid numbers.');
        return;
    }

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 == 0) {
                alert('Bruh, Division by zero is not allowed.');
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert('Invalid operator.');
            return;
    }

    document.getElementById('result').innerText = 'Result = ' + result.toFixed(2);
}

document.addEventListener('DOMContentLoaded', updateButtonText);
