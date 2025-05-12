/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
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

function isBalanced(root: TreeNode | null): boolean {
  let isBalanced = true;

  if (!root) {
    return isBalanced;
  }

  function DFS(root: TreeNode | null) {
    if (!root) {
      return 0;
    } else {
      const left = 1 + DFS(root.left);
      const right = 1 + DFS(root.right);

      if (isBalanced && Math.abs(left - right) > 2) isBalanced = false;

      return 1 + Math.max(left, right);
    }
  }

  const left = DFS(root.left);
  const right = DFS(root.right);

  if (isBalanced && Math.abs(left - right) > 2) isBalanced = false;

  return isBalanced;
}
