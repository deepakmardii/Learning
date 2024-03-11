// Check Prime Numbers

function checkPrime(n) {
  if (n < 1) {
    return false;
  } else if (n === 1) {
    return true;
  } else {
    for (let i = 2; i <= n; i++) {
      if (n % i === 0) {
        return false;
      } else {
        return true;
      }
    }
  }
}

console.log(checkPrime(-3));
console.log(checkPrime(14));
