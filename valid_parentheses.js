const isValid = (s) => {
  // open must be closed by same type
  // open must be closed in correct order
  // if closing is paren, open must be paren e.g. last seen
  const stack = [];
  const chars = {
    '}': '{',
    ')': '(',
    ']': '[',
  };

  for (const ch of s) {
    console.log('stack', stack, ch);
    if (ch in chars) {
      console.log('ch', ch);
      if (stack.pop() != chars[ch]) {
        console.log('pop', stack.pop(), chars[ch]);
        return false;
      }
    } else {
      console.log('push ch', ch);
      stack.push(ch);
    }
  }

  // if stack.length == 0, return true, else return false
  return stack.length == 0 ? true : false;
};

// console.log(isValid('()[]{}'));
console.log(isValid('[{(}]'));
// console.log(isValid(''));
