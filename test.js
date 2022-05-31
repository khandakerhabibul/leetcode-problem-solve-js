function nonRepeatingWords(str1, str2) {
  const set = new Set();
  let one = str1.split(' ');
  let two = str2.split(' ');
  for (let word of one) {
    if (set.has(word)) {
      set.delete(word);
    } else {
      set.add(word);
    }
  }
  for (let word of two) {
    if (set.has(word)) {
      set.delete(word);
    } else {
      set.add(word);
    }
  }
  // Set() is a type of Object
  return [...set];
}

const str1 = 'Hello world';
const str2 = 'Hello Vishwas';

const str3 = 'Hello Hello';
const str4 = 'Welcome Vishwas';

console.log(nonRepeatingWords(str1, str2));
console.log(nonRepeatingWords(str3, str4));
