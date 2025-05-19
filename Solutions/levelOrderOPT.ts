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

  let auxArr: number[][] = [[root.val]];
  let levelOrder: number = 0;

  function getOrder(root: TreeNode | null, levelOrder: number): void {
    if (!root) return;
    auxArr.push([]);
    levelOrder++;

    if (root.left) {
      auxArr[levelOrder].push(root.left.val);
    }

    if (root.right) {
      auxArr[levelOrder].push(root.right.val);
    }

    getOrder(root.left, levelOrder);
    getOrder(root.right, levelOrder);

    return;
  }

  getOrder(root, levelOrder);

  return auxArr.filter((arr) => arr.length > 0);
}
