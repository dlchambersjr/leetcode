var isValid = function (s) {
  if (s === '') return true;
  if (s.length % 2 !== 0) return false;

  let stack = [];

  stack.push(s[0]);
  console.log(stack);

  for (let i = 1; i < s.length; i++) {
    if ((stack[stack.length - 1] === '(' && s[i] === ')') ||
      (stack[stack.length - 1] === '{' && s[i] === '}') ||
      (stack[stack.length - 1] === '[' && s[i] === ']')) {
      console.log(stack);
      stack.pop();
      console.log(stack);
    } else { { stack.push(s[i]); } }
    console.log(stack);
  }
  return stack.length === 0 ? true : false;
};
console.log(isValid(`(){}(`));