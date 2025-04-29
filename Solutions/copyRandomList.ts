/**
 * Definition for _Node.
 *
 *
 * OBS.: Simple but not to much optimized for memory.
 */

class _Node {
  val: number;
  next: _Node | null;
  random: _Node | null;

  constructor(val?: number, next?: _Node, random?: _Node) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.random = random === undefined ? null : random;
  }
}

function copyRandomList(head: _Node | null): _Node | null {
  if (!head) return null;

  let currentNode = head;
  const hashMap = new Map();
  hashMap.set(null, null);

  while (currentNode) {
    hashMap.set(currentNode, new _Node(currentNode.val));
    currentNode = currentNode.next;
  }

  currentNode = head;
  while (currentNode) {
    const copyNode = hashMap.get(currentNode);
    copyNode.next = hashMap.get(currentNode.next);
    copyNode.random = hashMap.get(currentNode.random);

    currentNode = currentNode.next;
  }

  return hashMap.get(head);
}
