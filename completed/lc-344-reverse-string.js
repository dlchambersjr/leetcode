/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {

  function reverse(s, start, end) {
    if (start > end) { return; }

    let tempStart = s[start];
    let tempEnd = s[end];

    s[start] = tempEnd;
    s[end] = tempStart;

    reverse(s, start + 1, end - 1);
  }

  reverse(s, 0, s.length - 1);
};

let string1 = ['h', 'e', 'l', 'l', 'o'];
let string2 = ['H', 'a', 'n', 'n', 'a', 'h'];

reverseString(string1);
console.log(string1);

reverseString(string2);
console.log(string2);