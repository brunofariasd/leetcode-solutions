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

function diameterOfBinaryTree(root: TreeNode | null): number {
  if (!root) return 0;

  let res = 0;
  function dfs(root: TreeNode | null): number {
    if (!root) {
      return 0;
    }

    let leftDepth = dfs(root?.left);
    let rightDepth = dfs(root?.right);
    res = Math.max(res, leftDepth + rightDepth);
    return 1 + Math.max(leftDepth, rightDepth);
  }

  dfs(root);

  return res;
}
