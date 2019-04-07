// f(5, 3) = f(4, 2) + f(4, 3)f(5,3)=f(4,2)+f(4,3)

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows === 0 || !numRows) { return []; }
  if (numRows === 1) { return [[1]]; }
  if (numRows === 2) { return [[1], [1, 1]]; }

  let triangle = [[1], [1, 1]];

  function findValue(triangle, previous, row) {
    if (row > numRows) { return; }
    let newLevel = [1];

    for (let i = 1; i < row - 1; i++) {
      newLevel.push((previous[i - 1] + previous[i]));
    }

    newLevel.push(1);
    triangle.push(newLevel);

    findValue(triangle, newLevel, row + 1);
  }

  findValue(triangle, [1, 1], 3);
  return triangle;
};

console.log(generate(5));