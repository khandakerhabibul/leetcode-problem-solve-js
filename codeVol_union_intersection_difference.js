const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4];

function union(arr1, arr2) {
  return [...arr1, ...arr2];
}

function intersection(arr1, arr2) {
  return arr1.filter((item) => arr2.includes(item));
}

function difference(arr1, arr2) {
  return arr1.filter((item) => !arr2.includes(item));
}

function symmetricDifference(arr1, arr2) {
  return arr1
    .filter((item) => !arr2.includes(item))
    .concat(arr2.filter((item) => !arr1.includes(item)));
}

console.log(union(arr1, arr2));
console.log(intersection(arr1, arr2));
console.log(difference(arr1, arr2));
console.log(difference(arr2, arr1));
console.log(symmetricDifference(arr1, arr2));
