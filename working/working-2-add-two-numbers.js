
// Definition for singly - linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

let l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

let l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

let l3 = new ListNode(1);
l3.next = new ListNode(8);

let l4 = new ListNode(0);


/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
  let newList = new ListNode();
  let curr1 = l1;
  let curr2 = l2;
  let sum = newList;
  sum.val = 0;

  while ((curr1 || curr2) && sum) {
    let value = 0;
    curr1 ? value += curr1.val : value += 0;
    curr2 ? value += curr2.val : value += 0;

    console.log(value);

    if (value < 10) {
      sum.val += value;
      console.log(sum.val);
    }
    if (value >= 10) {
      console.log(sum.val, value - 10);
      sum.val += (value - 10);
      console.log(sum.val);
      sum.next = new ListNode(1);
    }

    console.log(sum);

    // console.log((curr1.next || curr2.next) && !sum.next);
    (curr1.next || curr2.next) && !sum.next ? sum.next = new ListNode(0) : null;

    console.log(sum.next);
    sum = sum.next;
    curr1 ? curr1 = curr1.next : null;
    curr2 ? curr2 = curr2.next : null;
  }

  return newList;
};

console.log(addTwoNumbers(l3, l4));

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.