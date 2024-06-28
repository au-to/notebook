class TreeNode {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }

  /*

  深度优先搜索
  
  */
  // 前序遍历
  preorderTraversal (root) {
    if (root === null) return
    console.log(root.value)
    preorderTraversal(root.left)
    preorderTraversal(root.right)
  }
  // 中序遍历
  inOrderTraversal (root) {
    if (root === null) return
    inOrderTraversal(root.left)
    console.log(root.value)
    inOrderTraversal(root.right)
  }
  // 后序遍历
  postOrderTraversal (root) {
    if (root === null) return
    postOrderTraversal(root.left)
    postOrderTraversal(root.right)
    console.log(root.value)
  }

  /*

  广度优先搜索

  */
  breadthFirstSearch (root) {
    if (root === null) return
    let queue = [root]
    while (queue.length > 0) {
      let node = queue.shift()
      console.log(node.value)
      if (node.left !== null) {
        queue.push(node.left)
      }
      if (node.right !== null) {
        queue.push(node.right)
      }
    }
  }
}

/*

示例

*/

// 创建一个示例二叉树
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log("Pre-order Traversal:");
preOrderTraversal(root);

console.log("In-order Traversal:");
inOrderTraversal(root);

console.log("Post-order Traversal:");
postOrderTraversal(root);

console.log("Breadth-first Search:");
breadthFirstSearch(root);
