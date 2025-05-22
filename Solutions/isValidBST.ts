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

function isValidBST(root: TreeNode | null): boolean {
  if (!root) return true;

  function DFS(
    root: TreeNode | null,
    leftValue: number,
    rightValue: number
  ): boolean {
    if (!root) return true;

    if (!(root.val > leftValue && root.val < rightValue)) {
      return false;
    }

    return (
      DFS(root.left, leftValue, root.val) &&
      DFS(root.right, root.val, rightValue)
    );
  }

  return DFS(root, -Infinity, Infinity);
}
