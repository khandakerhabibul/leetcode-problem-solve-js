/**
 *  " "   -> splits the array at one single space character.
 *  /\s/ ->splits the array at every kind of whitespace character
 *   + -> Matches between one and unlimitted times
 *
 * @param {String} str
 * @returns {String}
 */
function reverseWords(str) {
  return str.trim().split(/\s+/).reverse().join(' ');
}

console.log(reverseWords('Hello World'));
console.log(reverseWords('  This is   a   test string '));
