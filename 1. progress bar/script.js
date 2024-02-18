const button = document.getElementsByClassName("button")[0];
const progress = document.getElementsByClassName("progress")[0];

function generateNumber() {
  const number = Math.random();
  // Set the value of progress element
  progress.setAttribute("value", number);
}

button.addEventListener("click", generateNumber);
