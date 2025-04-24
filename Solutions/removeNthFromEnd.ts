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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head) return null;

  let count = 0;
  let pointer = head;
  let firstNode = head;

  while (pointer) {
    count++;
    pointer = pointer.next;
  }

  const index = count - n;
  if (index === 0) return head.next;

  let previousNode = { val: 0, next: null };
  for (let i = 0; i < count; i++) {
    if (i === index) {
      previousNode.next = head.next;
      return firstNode;
    }
    previousNode = head;
    head = head.next;
  }

  return firstNode;
}
