/**
 * Definition for a binary tree node.\
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

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];

  let auxArr: number[][] = [];

  function getOrder(root: TreeNode | null, levelOrder: number): void {
    if (!root) return;

    if (auxArr.length === levelOrder) {
      auxArr.push([]);
    }

    auxArr[levelOrder].push(root.val);
    getOrder(root.left, levelOrder + 1);
    getOrder(root.right, levelOrder + 1);

    return;
  }

  getOrder(root, 0);

  return auxArr;
}
