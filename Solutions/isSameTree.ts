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

function isSameTree(
  nodeLeft: TreeNode | null,
  nodeRight: TreeNode | null
): boolean {
  if (!nodeLeft && !nodeRight) {
    return true;
  }

  if (nodeLeft && nodeRight && nodeLeft.val === nodeRight.val) {
    return (
      isSameTree(nodeLeft.left, nodeRight.left) &&
      isSameTree(nodeLeft.right, nodeRight.right)
    );
  } else {
    return false;
  }
}
