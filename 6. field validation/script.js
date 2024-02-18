const field = document.getElementsByClassName("field")[0];
const validMarker = document.getElementsByClassName("valid-marker")[0];
const invalidMarker = document.getElementsByClassName("invalid-marker")[0];
const row = document.getElementsByClassName("row")[0];

showValidationElement();

function splitWords(value) {
  return value.trim().split(" "); // trim() removes whitespace from both ends of a string
}

function validateFieldValue(value) {
  const words = splitWords(value); // split() splits a string object into an array of strings by separating the string into substrings

  return words.length === 2 && words.every((word) => word.length >= 3);
}

function showValidationElement() {
  const fieldValue = field.value;
  const isValid = validateFieldValue(fieldValue);
  row.classList.toggle("validated", isValid); // toggle() adds a class to an element if it’s not there or removes it if it’s there
}

field.addEventListener("input", showValidationElement);
