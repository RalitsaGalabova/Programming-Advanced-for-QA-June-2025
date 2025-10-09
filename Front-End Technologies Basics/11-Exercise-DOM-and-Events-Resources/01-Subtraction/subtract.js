function subtract() {
    const firstNumber = Number(document.getElementById('firstNumber').value);
    const secondNumber = Number(document.getElementById('secondNumber').value);

    const result = firstNumber-secondNumber;

    const resultDiv = document.getElementById('result')

    resultDiv.innerText = result
} 