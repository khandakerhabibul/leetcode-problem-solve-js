const merge = (str1, str2) => {
  let lastIndex = 0;
  let checkHighestLength =
    str1.length >= str2.length ? str1.length : str2.length;
  let temp = [];

  for (let index = 0; index < checkHighestLength; index++) {
    if (str1[index]) {
      temp.push(str1[index]);
      lastIndex = index;
    } else {
      lastIndex = index;
      break;
    }
    if (str2[index]) {
      temp.push(str2[index]);
      lastIndex = index;
    } else {
      lastIndex = index;
      break;
    }
  }
  if (!str1[lastIndex]) {
    console.log({ chk2: str2.slice(lastIndex + 1, str2.length) });
    let t = str2.split('').slice(lastIndex + 1, str2.length);
    t.forEach((element) => {
      temp.push(element);
    });
  }
  if (!str2[lastIndex]) {
    console.log({ chk1: str1.slice(lastIndex + 1, str1.length) });
    let p = str1.split('').slice(lastIndex + 1, str1.length);
    p.forEach((element) => {
      temp.push(element);
    });
  }
  console.log(temp);
  return temp.join('');
};

// console.log(merge('Hello', 'Bye'));
console.log(merge('abc', 'efg'));
