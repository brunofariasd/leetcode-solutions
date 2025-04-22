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

function hasCycle(head: ListNode | null): boolean {
  if (!head) return false;

  let slowNode: ListNode = head;
  let fastNode: ListNode = head;

  while (fastNode && fastNode.next !== null) {
    slowNode = slowNode.next;
    fastNode = fastNode.next.next;

    if (slowNode === fastNode) return true;
  }

  return false;
}
