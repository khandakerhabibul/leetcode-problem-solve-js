const removeDuplicates = (nums) => {
  let removedDuplicatesValue = [...new Set(nums)];
  let lengthCheck = [...new Set(nums)].length;
  for (let index = 0; index < nums.length - lengthCheck; index++) {
    removedDuplicatesValue.push('_');
  }
  return removedDuplicatesValue;
};
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

console.log(removeDuplicates([1, 1, 2]));
