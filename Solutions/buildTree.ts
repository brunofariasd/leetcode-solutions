/**
 * Definition for a binary tree node.
 *
 * https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/
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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  function DFS(preorder: number[], inorder: number[]): TreeNode | null {
    if (!preorder.length || !inorder.length) return null;

    const root = new TreeNode(preorder[0]);
    const idxRootInorder = inorder.indexOf(root.val);

    root.left = DFS(
      preorder.slice(1, idxRootInorder + 1),
      inorder.slice(0, idxRootInorder)
    );

    root.right = DFS(
      preorder.slice(idxRootInorder + 1),
      inorder.slice(idxRootInorder + 1)
    );

    return root;
  }

  return DFS(preorder, inorder);
}
