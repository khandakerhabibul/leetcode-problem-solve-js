function findDuplicate(arr) {
  const set = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) {
      return arr[i];
    } else {
      set.add(arr[i]);
    }
  }
}

const arr = [2, 4, 6, 8, 2];
console.log(findDuplicate(arr));
