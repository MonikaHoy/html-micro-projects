const input = document.getElementById("input");

// Create an array of star elements
const stars = [];
for (let i = 0; i < 5; i++) {
  const star = document.createElement("img");
  star.src = "star.png";
  stars.push(star);
}

// Append the star elements to the "stars" div
const starsContainer = document.getElementById("stars");
stars.forEach((star) => {
  starsContainer.appendChild(star);
});

// Add event listeners to the star elements
function onHover(event) {
  const hoveredIndex = stars.indexOf(event.target);
  input.setAttribute("value", hoveredIndex + 1);

  stars.forEach((star, index) => {
    if (index <= hoveredIndex) {
      star.style.filter = "brightness(50%)";
    } else {
      star.style.filter = "none";
    }
  });
}

function reset() {
  stars.forEach((star) => {
    star.style.filter = "none";
  });

  input.setAttribute("value", 0);
}

stars.forEach((star) => {
  star.addEventListener("mouseover", onHover);
  star.addEventListener("mouseleave", reset);
});
