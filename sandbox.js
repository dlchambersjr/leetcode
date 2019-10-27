'use strict';

function BinaryTree() {
  this.root = null;
}

var last_logged;

function isBST(root) {
  console.log(root);

  if (root === null) { return true; }// base case

  // Verify and recurse left
  if (!isBST(root.left)) { return false; }

  // Verify the current node
  console.log(root.data, last_logged);
  if (last_logged !== null && root.data <= last_logged) {
    return false;
  }

  // Log the current data for debugging and update the last_logged
  console.log('Current Node : ', root.data);
  last_logged = root.data;

  // Verify and recurse right
  if (!isBST(root.right)) { return false; }

  return true;
}

// Create a Binary Tree as a sample input
var root = { data: 4, left: null, right: null };
var n1 = { data: 1, left: null, right: null };
var n3 = { data: 3, left: null, right: null };
var n2 = { data: 2, left: n1, right: n3 };
var n6 = { data: 6, left: null, right: null };
var n8 = { data: 8, left: null, right: null };
var n7 = { data: 7, left: n6, right: n8 };


var BT = new BinaryTree();
BT.root = root;
console.log(BT)

// Create a Binary Search Tree (BST) and Verify  
BT.root.left = n2;
BT.root.right = n7;
console.log(isBST(BT.root)); // true

// Create a non-BST and Verify 
BT.root.left = n7;
console.log(isBST(BT.root)); // false