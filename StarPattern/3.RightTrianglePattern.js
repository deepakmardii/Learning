// 3. Right Triangle Pattern in Javascript

function rightTriangle(n) {
  string = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < n - i; j++) {
      string += " ";
    }
    for (let k = 0; k < i; k++) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string);
}

console.log(rightTriangle(5));
