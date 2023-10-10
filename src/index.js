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

export { capitalize };
