const xInput = document.getElementsByClassName("x")[0];
const yInput = document.getElementsByClassName("y")[0];
const xInputPercent = document.getElementsByClassName("percentX")[0];
const yInputPercent = document.getElementsByClassName("percentY")[0];

let winWidth;
let winHeight;

function setWindowDimensions() {
  winWidth = window.outerWidth;
  winHeight = window.outerHeight;
}

setWindowDimensions();

function setMousePositionValues(e) {
  const xValue = e.clientX;
  const yValue = e.clientY;
  xInput.value = xValue;
  yInput.value = yValue;
  xInputPercent.value = Math.round((xValue / winWidth) * 100) + "%";
  yInputPercent.value = Math.round((yValue / winHeight) * 100) + "%";
}

window.addEventListener("resize", setWindowDimensions);
document.addEventListener("mousemove", setMousePositionValues);
