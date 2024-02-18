const body = document.getElementsByClassName("background")[0];
const R = document.getElementsByClassName("range")[0];
const G = document.getElementsByClassName("range")[1];
const B = document.getElementsByClassName("range")[2];

setBackgroundColor();

// set background color to match slider values
function setBackgroundColor(e) {
  const rValue = R.value;
  const gValue = G.value;
  const bValue = B.value;
  const backgroundColor = `rgb(${rValue}%, ${gValue}%, ${bValue}%)`;
  body.style.backgroundColor = backgroundColor;
}

document.addEventListener("input", setBackgroundColor);
