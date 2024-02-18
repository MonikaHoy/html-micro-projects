const operandA = document.getElementsByClassName("operand")[0];
const operandB = document.getElementsByClassName("operand")[1];
const operator = document.getElementsByClassName("operator")[0];
const resultBox = document.getElementsByClassName("result")[0];

function calculate(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      return "error";
  }
}

function onShowResults() {
  const valueA = Number(operandA.value);
  const valueB = Number(operandB.value);
  const valueOperator = operator.value;
  if (valueA === "" || valueB === "") {
    return;
  }
  resultBox.value = calculate(valueA, valueB, valueOperator);
}

operandA.addEventListener("input", onShowResults);
operandB.addEventListener("input", onShowResults);
operator.addEventListener("change", onShowResults);
