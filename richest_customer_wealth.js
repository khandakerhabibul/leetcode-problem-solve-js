/**
 * You are given an m x n integer grid accounts where accounts[i][j]
 * is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank.
 * Return the wealth that the richest customer has.
 * A customer's wealth is the amount of money they have in all their bank accounts.
 * The richest customer is the customer that has the maximum wealth.
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const richestWealth = (nums) => {
  let tempWealthSum = [];

  nums.forEach((customer) => {
    tempWealthSum.push(
      customer.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0)
    );
  });
  tempWealthSum.sort((a, b) => b - a);
  console.log({ tempWealthSum });
  return tempWealthSum[0];
};

console.log(
  richestWealth([
    [1, 5],
    [7, 3],
    [3, 5],
  ])
);
