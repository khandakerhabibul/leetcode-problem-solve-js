function printPrime(min, max) {
  for (let i = min; i <= max; i++) {
    if (i === 0 || i === 1) {
      continue;
    }
    let flag = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        flag = false;
        break;
      }
    }
    if (flag) {
      console.log(i);
    }
  }
}
printPrime(0, 20);
