function removeVowels(str) {
  let final = [];
  for (let char of str) {
    if (
      char === 'a' ||
      char === 'e' ||
      char === 'i' ||
      char === 'o' ||
      char === 'u' ||
      char === 'A' ||
      char === 'E' ||
      char === 'I' ||
      char === 'O' ||
      char === 'U'
    ) {
      continue;
    } else {
      final.push(char);
    }
  }
  return final.join('');
}

function removeVowelsBetterSolution(str) {
  // g - global, i - case insensitive
  return str.replace(/[aeiou]/gi, '');
}

console.log(removeVowels('Hello World'));
console.log(removeVowelsBetterSolution('Hello World'));
