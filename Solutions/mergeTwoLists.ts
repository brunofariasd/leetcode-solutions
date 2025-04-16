/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (!list1) return list2;
  if (!list2) return list1;

  const node: ListNode = {
    next: null,
    val: 0,
  };

  let previousNode = node;

  while (list1 || list2) {
    if (list1.val <= list2.val) {
      previousNode.next = list1;
      list1 = list1.next;
    } else {
      previousNode.next = list2;
      list2 = list2.next;
    }

    previousNode = previousNode.next;

    if (!list1) {
      previousNode.next = list2;
      return node.next;
    }
    if (!list2) {
      previousNode.next = list1;
      return node.next;
    }
  }

  return node.next;
}
