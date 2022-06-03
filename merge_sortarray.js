const mergeTwoLists = (list1, list2) => {
  console.log({ a: [...list1, ...list2].sort() });
};

// console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
console.log(mergeTwoLists([], []));
