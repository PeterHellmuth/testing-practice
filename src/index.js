import "./style.css";

function capitalize(string) {
  if (string.length === 0) {
    return string.toUpperCase();
  }
  if (string.length > 0) {
    return string.charAt(0).toUpperCase() + string.slice(1, string.length);
  }
  return null;
}

function reverseString() {}

const calculator = {
  add(x, y) {
    return x + y;
  },
  subtract(x, y) {
    return x - y;
  },
  divide(x, y) {
    if (y === 0) {
      return null;
    }
    return x / y;
  },
  multiply(x, y) {
    return x * y;
  },
};

function caesarCipher(string) {
  return null;
}

function analyzeArray(arr) {
  return null;
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
