/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (!s || s.length === 0) return 0;
  let letterTracker = []
  let maxStringLength = 0;
  let currentLength = 0;

  for (let i = 0; i < s.length; i++) {
    if (!letterTracker.includes(s[i])) {
      letterTracker.push(s[i]);
      currentLength++;
    } else {
      letterTracker.push(s[i]);
      let letterIdx = letterTracker.indexOf(s[i]);
      if (currentLength > maxStringLength) {
        maxStringLength = currentLength;
        letterTracker.splice(0, letterIdx + 1);
        currentLength = letterTracker.length;
      } else {
        letterTracker.splice(0, letterIdx + 1);
        currentLength = letterTracker.length;
      }
    }
  }
  currentLength > maxStringLength ? maxStringLength = currentLength : null;

  return maxStringLength;
};

let string1 = 'abcabcbb'; //3
let string2 = 'bbbbb'; //1
let string3 = 'pwwkew'; //3
let string4 = 'c'; //1
let string5 = 'au'; //2
let string6 = 'dvdf'; //3
let string7 = 'nfpdmpi'; //5
let string8 = 'jbpnbwwd'; //4
let string9 = 'ycwcdlwcvvxgalcczbkbfzgyaagrowwoauqefnickhjnunptpbuuaaucdbu'; //13

console.log(lengthOfLongestSubstring(string1));
console.log(lengthOfLongestSubstring(string2));
console.log(lengthOfLongestSubstring(string3));
console.log(lengthOfLongestSubstring(string4));
console.log(lengthOfLongestSubstring(string5));
console.log(lengthOfLongestSubstring(string6));
console.log(lengthOfLongestSubstring(string7));
console.log(lengthOfLongestSubstring(string8));
console.log(lengthOfLongestSubstring(string9));
