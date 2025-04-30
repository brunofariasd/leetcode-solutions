/**
 * Definition for singly-linked list.
 *
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let accumulator = 0;
  let head = new ListNode();
  let currentNode = head;

  let sum = 0;
  while (l1 || l2 || accumulator) {
    sum = (l1?.val || 0) + (l2?.val || 0) + accumulator;
    if (sum > 9) {
      sum = sum % 10;
      accumulator = 1;
    } else {
      accumulator = 0;
    }

    currentNode.next = new ListNode(sum, null);
    currentNode = currentNode.next;
    l1 = l1?.next;
    l2 = l2?.next;
  }

  return head.next;
}
