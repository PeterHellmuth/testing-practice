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

function reverseString(str) {
  if (str.length === 1) {
    return str;
  }
  return (
    str.charAt(str.length - 1) + reverseString(str.slice(0, str.length - 1))
  );
}

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

function caesarCipher(str, n) {
  let returnStr = "";
  const lowerZCode = 122;
  const capitalZCode = 90;
  const regex = /^[a-zA-Z]+$/;
  for (let i = 0; i < str.length; i += 1) {
    if (regex.test(str.charAt(i))) {
      if (
        (str.charCodeAt(i) <= lowerZCode &&
          str.charCodeAt(i) + n > lowerZCode) ||
        (str.charCodeAt(i) <= capitalZCode &&
          str.charCodeAt(i) + n > capitalZCode)
      ) {
        returnStr += String.fromCharCode(
          str.charCodeAt(i) + n - 26 - 26 * Math.floor(n / 26), // wrap around but if we're moving more than 25 characters then wrap around again as needed
        );
      } else {
        returnStr += String.fromCharCode(str.charCodeAt(i) + n);
      }
    } else {
      returnStr += str.charAt(i);
    }
  }
  return returnStr;
}

function analyzeArray(arr) {
  return null;
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
