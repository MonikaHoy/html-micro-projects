const button = document.getElementById("button");
const progress = document.getElementById("progress");

function generateNumber() {
  console.log("number generated");

  const number = Math.random();
  console.log(number);
  // Set the value of progress element
  progress.setAttribute("value", number);
}

button.addEventListener("click", generateNumber);
