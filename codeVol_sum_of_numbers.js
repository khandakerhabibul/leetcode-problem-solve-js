function sum(arr) {
  let sum = 0;
  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);

  for (let index = min; index <= max; index++) {
    sum = sum + index;
  }
  return sum;
}

console.log(sum([1, 4]));
