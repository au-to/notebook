/*
输入某二叉树的前序遍历和中序遍历的结果，请构建该二叉树并返回其根节点。

假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
*/

 var buildTree = function(preorder, inorder) {
  if (!preorder.length || !inorder.length) {
      return null;
  }

  const rootVal = preorder[0];
  const node = new TreeNode(rootVal);

  let i = 0; // i有两个含义，一个是根节点在中序遍历结果中的下标，另一个是当前左子树的节点个数
  for (; i < inorder.length; ++i) {
      if (inorder[i] === rootVal) {
          break;
      }
  }

  node.left = buildTree(preorder.slice(1, i + 1), inorder.slice(0, i));
  node.right = buildTree(preorder.slice(i + 1), inorder.slice(i + 1));
  return node;
};