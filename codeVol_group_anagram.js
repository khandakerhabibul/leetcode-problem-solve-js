function groupAnagrams(arr) {
  const map = new Map();

  for (let word of arr) {
    const key = [...word].sort().join('');
    // console.log({ key });
    if (!map.has(key)) {
      map.set(key, [word]);
      // console.log({ mapIf: map });
    } else {
      let curr = map.get(key);
      map.set(key, [...curr, word]);
      // console.log({ mapElse: map });
    }
  }

  return map.values();
}

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
