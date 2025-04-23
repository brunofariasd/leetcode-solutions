/**
 * Definition for singly-linked list.
 *
 * Do not return anything, modify head in-place instead.
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

function reorderList(head: ListNode | null): void {
  if (!head?.next) return;

  let slow: ListNode | null = head;
  let fast: ListNode | null = head.next;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let midNode: ListNode | null = slow.next;
  let reverseNode = (slow.next = null);

  while (midNode) {
    let temp = midNode.next;
    midNode.next = reverseNode;
    reverseNode = midNode;
    midNode = temp;
  }

  let firstNode = head;
  while (reverseNode) {
    let tempFirstNode = firstNode.next;
    let tempLastNode = reverseNode.next;

    firstNode.next = reverseNode;
    reverseNode.next = tempFirstNode;

    firstNode = tempFirstNode;
    reverseNode = tempLastNode;
  }
}
