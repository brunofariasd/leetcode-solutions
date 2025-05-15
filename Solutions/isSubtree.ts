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

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  function isTheSame(root: TreeNode | null, subRoot: TreeNode | null) {
    if (!root && !subRoot) return true;

    if (root && subRoot && root.val === subRoot.val) {
      return (
        isTheSame(root.left, subRoot.left) &&
        isTheSame(root.right, subRoot.right)
      );
    }

    return false;
  }

  if (!subRoot) return true;

  if (!root) return false;

  if (isTheSame(root, subRoot)) {
    return true;
  }

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}
