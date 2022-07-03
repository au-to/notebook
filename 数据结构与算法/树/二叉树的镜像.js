var mirrorTree = function(root) {
    if (root === null) {
        return null;
    }
    const left = mirrorTree(root.left);
    const right = mirrorTree(root.right);
    root.left = right;
    root.right = left;
    return root;
};

// 这是一道很经典的二叉树问题。
// 显然，我们从根节点开始，递归地对树进行遍历，并从叶子节点先开始翻转得到镜像。
// 如果当前遍历到的节点的左右两棵子树都已经翻转得到镜像，
// 那么我们只需要交换两棵子树的位置，即可得到以root 为根节点的整棵子树的镜像。

// 后序遍历
 var mirrorTree = function (root) {
    if (root === null) {
      return null;
    }
    const left = mirrorTree(root.left);
    const right = mirrorTree(root.right);
    root.left = right;
    root.right = left;
    return root;
  };
  
//   前序遍历
var mirrorTree = function (root) {
    if (root === null) {
      return null;
    }
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    mirrorTree(root.left);
    mirrorTree(root.right);
    return root;
  };