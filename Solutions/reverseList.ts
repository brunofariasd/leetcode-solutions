/**
 *
 * Definition for singly-linked list.
 * Interesting question.
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

function reverseList(head: ListNode | null): ListNode | null {
  if (!head) return null;

  let currentHead: ListNode | null = head;
  let nodeBefore: ListNode | null = null;

  while (currentHead) {
    let nextNode = currentHead.next;
    currentHead.next = nodeBefore;
    nodeBefore = currentHead;
    currentHead = nextNode;
  }

  return nodeBefore;
}
