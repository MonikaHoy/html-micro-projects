const body = document.getElementsByClassName("background")[0];

let winWidth;
let winHeight;

function setWindowDimensions() {
  winWidth = window.outerWidth;
  winHeight = window.outerHeight;
}

setWindowDimensions();

// set backgroundcolor to match mouse position values
function setBackgroundColor(e) {
  const xValue = e.clientX;
  const yValue = e.clientY;
  const yPercentValue = Math.round((yValue / winHeight) * 100) + "%";
  const backgroundColor = `hsl(${xValue}, ${yPercentValue}, 50%)`;
  body.style.backgroundColor = backgroundColor;
}

window.addEventListener("resize", setWindowDimensions);
document.addEventListener("mousemove", setBackgroundColor);
