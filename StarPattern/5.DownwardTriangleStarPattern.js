// 5. Downward Triangle Star Pattern

function downwardTriangle(n) {
  let string = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string);
}

console.log(downwardTriangle(5));

// *****
// ****
// ***
// **
// *
