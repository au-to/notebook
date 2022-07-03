/*
输入一棵二叉树的根节点，判断该树是不是平衡二叉树。
如果某二叉树中任意节点的左右子树的深度相差不超过1，那么它就是一棵平衡二叉树。
*/

var isBalanced = function (root) {
    // 记录二叉树是否平衡
    let flag = true;
    const maxDepth = (root) => {
        if (root == null) return 0;
        let leftMaxDepth = maxDepth(root.left);
        let rightMaxDepth = maxDepth(root.right);
        // 如果左右最大深度大于 1，就不是平衡二叉树
        if (Math.abs(rightMaxDepth - leftMaxDepth) > 1) {
            flag = false;
        }
        return 1 + Math.max(leftMaxDepth, rightMaxDepth);
    }; 
    maxDepth(root);
    return flag;
};
