// 1. Square Star Pattern in Javascript

function star(n) {
  let string = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string);
}

console.log(star(5));

// *****
// *****
// *****
// *****
// *****
