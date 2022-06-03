function multiply(a, b, c) {
  return a * b * c;
}

function curriedMultiply(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}

// console.log(multiply(5, 6, 7));

console.log(curriedMultiply(5)(6)(7));
