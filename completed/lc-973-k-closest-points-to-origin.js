/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function (points, K) {

  points.sort((a, b) => {
    let first = (a[0] * a[0]) + (a[1] * a[1]);
    let second = (b[0] * b[0]) + (b[1] * b[1]);

    return first - second;

  });

  let closest = [];
  for (let i = 0; i < K; i++) {
    closest.push(points[i]);
  }

  return closest;
};

// [[1, 3], [-2, 2]], K = 1

console.log(kClosest([[1, 3], [-2, 2]], 1));
console.log(kClosest([[3, 3], [5, -1], [-2, 4]], 2));
