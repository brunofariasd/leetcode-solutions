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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  let isEqual = true;

  function compare(nodeLeft: TreeNode | null, nodeRight: TreeNode | null) {
    if (nodeLeft !== null && nodeRight !== null) {
      if (nodeLeft.val !== nodeRight.val) {
        isEqual = false;
        return;
      }

      compare(nodeLeft.left, nodeRight.left);

      if (nodeLeft.val !== nodeRight.val) {
        isEqual = false;
        return;
      }

      compare(nodeLeft.right, nodeRight.right);
    } else if (nodeLeft === null && nodeRight === null) {
      return;
    } else {
      isEqual = false;
      return;
    }
  }

  compare(p, q);

  return isEqual;
}
