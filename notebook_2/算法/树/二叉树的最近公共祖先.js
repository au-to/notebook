// 递归
var lowestCommonAncestor = function (root, p, q) {
    if (!root || root === p || root === q) return root;
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
    if (!left) return right; // 左子树找不到，返回右子树
    if (!right) return left; // 右子树找不到，返回左子树
    return root;
};



var lowestCommonAncestor = function (root, p, q) {
    // 遇到null，返回null 没有LCA
    if (root == null) return null;

    // 遇到p或q，直接返回当前节点
    if (root == q || root == p) return root;

    // 非null 非q 非p，则递归左右子树
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
    // 根据递归的结果，决定谁是LCA
    if (left && right) return root;
    if (left == null && right == null) return null;
    return left == null ? right : left;
};
