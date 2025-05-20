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

function rightSideView(root: TreeNode | null): number[] {
  let res: number[] = [];

  function DFS(root: TreeNode | null, levelOrder: number) {
    if (!root) return;

    if (res.length === levelOrder) {
      res.push(root.val);
    }

    DFS(root.right, levelOrder + 1);
    DFS(root.left, levelOrder + 1);

    return;
  }

  DFS(root, 0);

  return res;
}
