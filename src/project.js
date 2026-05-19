function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

export { capitalize, reverseString };
