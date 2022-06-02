const longestCommonPrefix = (arr) => {
  let common = arr[0];
  let test = common.split('');
  for (let i = 1; i < arr.length; i++) {
    // common.split('').forEach((char) => {
    //   if (!arr[i].includes(char)) {
    //     common = common.replace(char, '');
    //   }else{}
    // });

    for (let j = 0; j < test.length; j++) {
      if (!arr[i].includes(test[j])) {
        common = common.replace(test[j], '');
      } else {
      }
    }
  }
  return common;
};

const strs1 = ['dog', 'racecar', 'car'];
const strs2 = ['flower', 'flow', 'flight'];
const strs3 = ['cir', 'car'];

console.log(longestCommonPrefix(strs1));
console.log(longestCommonPrefix(strs2));
console.log(longestCommonPrefix(strs3));
