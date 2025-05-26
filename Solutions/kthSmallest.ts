/**
 * Definition for a binary tree node.
 *
 */

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function kthSmallest(root: TreeNode | null, k: number): number {
  let arrAux: number[] = [];

  function DFS(root: TreeNode | null, numbers: number[]): void {
    if (!root) return;

    DFS(root.left, numbers);
    numbers.push(root.val);
    DFS(root.right, numbers);
  }

  DFS(root, arrAux);

  return arrAux[k - 1];
}
