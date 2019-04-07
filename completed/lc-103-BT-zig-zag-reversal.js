
// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;

}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

var zigzagLevelOrder = function (root) {

  if (!root) { return []; }

  const output = [];
  let currQueue = [root];
  let leftToRight = true;

  while (currQueue.length) {
    let nextQueue = [];
    let level = []

    while (currQueue.length) {
      let currNode = currQueue.shift();

      if (currNode.left) { nextQueue.push(currNode.left); }
      if (currNode.right) { nextQueue.push(currNode.right); }

      level.push(currNode.val);
    }

    leftToRight ? output.push(level) : output.push(level.reverse());
    leftToRight = !leftToRight;
    currQueue = nextQueue;

  }

  return output;

};


let r = new TreeNode(3);
r.left = new TreeNode(9);
r.right = new TreeNode(20);
r.right.left = new TreeNode(15);
r.right.right = new TreeNode(7);
console.log(r);

console.log(zigzagLevelOrder(r));
