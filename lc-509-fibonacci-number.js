/**
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {
  let memo = {};

  function calcFib(num, memo) {
    console.log(memo);
    if (memo[num]) { return memo[num]; }
    else {
      if (num < 2) { return num; }
      else {
        memo[num] = calcFib(num - 1, memo) + calcFib(num - 2, memo);
        console.log(memo);
        return memo[num];
      }
    }
  }
  return calcFib(N, memo);
};

console.log(fib(3));