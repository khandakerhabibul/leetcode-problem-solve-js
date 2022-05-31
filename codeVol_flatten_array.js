function flattenArray(arr) {
  return arr.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      acc = acc.concat(flattenArray(curr)); // Recursively flatten
    } else {
      acc = acc.concat(curr);
    }
    return acc;
  }, []);
}

console.log(flattenArray([1, [2], [3, [[4]]]]));
