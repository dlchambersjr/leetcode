var asteroidCollision = function (asteroids) {

  console.log(asteroids);

  let output = asteroids.reduce((acc, curr, idx, arr) => {
    console.log(acc, curr);
    let pos = idx;
    console.log(pos);

    if (pos === 0) {
      console.log(curr);
      acc.push(curr);
      return acc;
    }

    console.log(curr);

    if (curr < 0) {
      for (let i = acc.length - 1; i >= 0; i--) {

        console.log(acc);
        console.log(acc[i], curr);

        if (Math.abs(acc[i]) < Math.abs(curr)) {
          acc.pop();
          acc.push(curr);
          console.log(acc);
        }

        // if (Math.abs(acc[i]) === Math.abs(curr)) {
        //   acc.pop();
        // }

        // if (Math.abs(acc[i]) > Math.abs(curr)) {
        //   return acc;
        // }

      }
    }
    console.log(acc);

    return acc;

  }, []);

  return output;


};

let arr1 = [5, 10, -5];
let arr2 = [8, -8];
let arr3 = [10, 2, -5];
let arr4 = [-2, -1, 1, 2];

// console.log(asteroidCollision(arr1));
// console.log(asteroidCollision(arr2));
console.log(asteroidCollision(arr3));
// console.log(asteroidCollision(arr4));





