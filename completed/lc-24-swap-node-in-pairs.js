
// Definition for singly - linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// for a list 1-> 2 -> 3 -> 4, one should return the head of list as 2 -> 1 -> 4 -> 3


var swapPairs = function (head) {
  if (head === null || head.next === null) return head;

  let temp = head.next;

  head.next = temp.next;
  temp.next = head;

  head.next = swapPairs(head.next);

  return temp;
};

let list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(4);

console.log(swapPairs(list));