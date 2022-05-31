function nonRepeatingWords(str1, str2) {
  const map = new Map();
  const res = [];
  // Concatenate the strings
  const str = str1 + ' ' + str2;
  // Count the occurrence of each word
  str.split(' ').forEach((word) => {
    map.has(word) ? map.set(word, map.get(word) + 1) : map.set(word, 1);
  });
  // Select words which occur only once
  for (let [key, val] of map) {
    if (val === 1) {
      res.push(key);
    }
  }
  return res;
}

const str1 = 'Hello world';
const str2 = 'Hello Vishwas';
const str3 = 'Hello Hello';
const str4 = 'Welcome Vishwas';
console.log(nonRepeatingWords(str1, str2));
console.log(nonRepeatingWords(str3, str4));
