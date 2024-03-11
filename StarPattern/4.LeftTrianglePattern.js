// 4. Left Triangle Pattern in Javascript

function leftTriangle(n) {
  let string = "";
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string);
}

console.log(leftTriangle(5));

// *
// **
// ***
// ****
// *****
