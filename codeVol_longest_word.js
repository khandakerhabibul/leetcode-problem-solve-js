function longestWord(str) {
  // let long = [];
  // let temp = str.split(' ');
  // temp.forEach((word, idx) => {
  //   let val = temp.forEach((item) => {
  //     if (item.length >= word.length) {
  //       long.pop();
  //       long.push(word);
  //     }
  //   });
  // });
  // return long;

  let p = str.split(' ');
  let val = p.reduce(
    (prevValue, currValue) =>
      currValue.length >= prevValue.length ? currValue : prevValue,
    ''
  );
  return val;
}

console.log(longestWord('My name is Vishwas'));
console.log(longestWord('Hello world'));
