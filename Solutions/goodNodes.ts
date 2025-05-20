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

function goodNodes(root: TreeNode | null): number {
  if (!root) return 0;

  let res: number = 0;
  function DFS(root: TreeNode | null, biggest: number) {
    if (!root) return;

    if (root.val >= biggest) {
      res = res + 1;
      biggest = root.val;
    }

    DFS(root.left, biggest);
    DFS(root.right, biggest);

    return;
  }

  DFS(root, root.val);

  return res;
}
