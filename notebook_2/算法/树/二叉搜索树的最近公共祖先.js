var lowestCommonAncestor = function (root, p, q) {
    if (!root) {
        return null
    }
    if (p.val === q.val) {
        return q
    }
    while (root) {
        if (root.val < q.val && root.val < p.val) {
            root = root.right
        }
        else if (root.val > q.val && root.val > p.val) {
            root = root.left
        }
        else {
            return root
        }
    }
};