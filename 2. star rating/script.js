const input = document.getElementsByClassName("input")[0];

// Create an array of star elements
const stars = [];
for (let i = 0; i < 10; i++) {
  const star = document.createElement("span");
  star.classList.add("star");
  stars.push(star);
}

// Append the star elements to the "stars" div
const starsContainer = document.getElementsByClassName("stars")[0];
stars.forEach((star) => {
  starsContainer.appendChild(star);
});

// Add event listeners to the star elements
function onHover(event) {
  const hoveredIndex = stars.indexOf(event.target);
  input.setAttribute("value", hoveredIndex + 1);

  stars.forEach((star, index) => {
    star.classList.toggle("active", index <= hoveredIndex);
  });
}

function reset() {
  stars.forEach((star) => {
    star.classList.remove("active");
  });

  input.setAttribute("value", 0);
}

stars.forEach((star) => {
  star.addEventListener("mouseover", onHover);
  star.addEventListener("mouseleave", reset);
});
