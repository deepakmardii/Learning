// list prime numbers

function primeList(n) {
  let a = [];
  if (n < 1) {
    console.log("Enter numbers greater than 0");
  } else {
    for (let i = 2; i <= n; i++) {
      let isPrime = true;
      for (let j = 2; j <= i / 2; j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        a.push(i);
      }
    }
  }
  return a;
}

console.log(primeList(10));
