// 6. Hollow Triangle Star Pattern

function hollowTriangle(n) {
  let string = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      if (i === n) {
        //only last row
        string += "*";
      } else {
        if (j == 0 || j == i - 1) {
          string += "*";
        } else {
          string += " ";
        }
      }
    }
    string += "\n";
  }
  console.log(string);
}

console.log(hollowTriangle(5));

// *
// **
// * *
// *  *
// *****
