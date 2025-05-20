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
  if (!root) return [];

  let res: number[] = [root.val];

  function DFS(root: TreeNode | null, levelOrder: number) {
    if (!root) return;

    if (root.left) {
      res[levelOrder] = root.left.val;
      DFS(root.left, levelOrder + 1);
    }

    if (root.right) {
      res[levelOrder] = root.right.val;
      DFS(root.right, levelOrder + 1);
    }

    return;
  }

  DFS(root, 1);

  return res;
}
