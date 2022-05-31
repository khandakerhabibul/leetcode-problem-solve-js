function longestPalindrome(str) {
  const set = new Set();
  let length = 0;
  for (let c of str) {
    if (set.has(c)) {
      set.delete(c);
      length++;
      console.log({ length });
    } else {
      set.add(c);
    }
  }
  // If elements left in the set, use 1 letter in the middle of the palindromic string
  console.log({ set, size: set.size });
  if (set.size) {
    return 2 * length + 1;
  } else {
    return 2 * length;
  }
}

console.log(longestPalindrome('abccccdd'));
// console.log(longestPalindrome('bbbbcd'));
