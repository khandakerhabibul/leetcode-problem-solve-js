function printFibonacci(n) {
  let result = [];

  for (let index = 0; index < n; index++) {
    if (index === 0 || index === 1) {
      result.push(index);
    } else {
      result.push(result[index - 1] + result[index - 2]);
    }
  }
  return result;
}

console.log(printFibonacci(8));

// // Recursive solution
// function fibonacci (n) {
//   if (n < 2) {
//     return n
//   }
//   return fibonacci(n - 1) + fibonacci(n - 2)
// }

// function printFibonacci (n) {
//   // Print the fibonacci number from from 0 to n
//   for (let i = 0; i < n; i++) {
//     console.log(fibonacci(i))
//   }
// }

// printFibonacci(7)
