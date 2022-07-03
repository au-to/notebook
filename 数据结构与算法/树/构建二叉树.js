// 创建一个键
class Node {
    constructor(key) {
        this.key = key; //节点值
        this.left = null; //左侧子节点引用
        this.right = null; //右侧子节点引用
    }
}

class BinarySearchTree {
    constructor(compareFn = defaultCompare) {
        this.compareFn = compareFn;
        this.root = null; //node类型的根节点
    }

    // 向二叉搜索树中插入一个键
    insert(key) {
        if (this.root == null) {
            this.root = new Node(key);
        } else {
            this.inserNode(this.root, key)
        }
    }
    // 插入的辅助方法
    inserNode(node, key) {
        if (this.compareFn(key, node.key) == Compare.LESS_THAN) {
            if (node.left == null) {
                node.left = new Node(key);
            } else {
                this.inserNode(node.left, key);
            }
        } else {
            if (node.right == null) {
                node.right = new Node(key);
            } else {
                this.inserNode(node.right, key);
            }
        }
    }


    // 先序遍历
    preorderTraverse(callback) {
        this.preorderTraverseNode(this.root, callback);
    }
    preorderTraverseNode(node, callback) {
        if (node !== null) {
            callback(node.key);
            this.preorderTraverseNode(node.left, callback);
            this.preorderTraverseNode(node.right, callback);
        }
    }

    // 中序遍历
    inorderTraverse(callback) {
        this.inorderTraverseNode(this.root, callback);
    }
    inorderTraverseNode(node, callback) {
        if (node !== null) {
            this.inorderTraverseNode(node.left, callback);
            callback(node.key);
            this.inorderTraverseNode(node.right, callback);
        }
    }

    // 后序遍历
    postOrderTraverse(callback) {
        this.postOrderTraverseNode(this.root, callback);
    }
    postOrderTraverseNode(node, callback) {
        if (node !== null) {
            this.postOrderTraverseNode(node.left, callback);
            this.postOrderTraverseNode(node.right, callback);
            callback(node.key);
        }
    }

    // 搜索树中的值
    // 搜索最小值和最大值
    min() {
        return this.minNode(this.root);
    }
    minNode(node) {
        let current = node();
        while (current !== null && current.left !== null) {
            current = current.left;
        }
        return current;
    }

    max() {
        return this.maxNode(this.root);
    }
    maxNode(node) {
        let current = node;
        while (current !== null && current.right !== null) {
            current = current.right;
        }
        return current;
    }

    // 搜索一个特定的值
    search(key) {
        return this.searchNode(this.root, key);
    }
    searchNode(node, key) {
        if (node == null) {
            return false;
        }
        if (this.compareFn(key, node.key) == Compare.LESS_THAN) {
            return this.searchNode(node.left, key);
        } else if (this.compareFn(key, node.key) == Compare.BIGGER_THAN) {
            return this.searchNode(node.right, key);
        } else {
            return true;
        }
    }

    // 移除一个节点
    remove(key) {
        this.root = this.removeNode(this.root, key);
    }
    removeNode(node, key) {
        if (node == null) {
            return null;
        }
        if (this.compareFn(key, node.key) == Compare.LESS_THAN) {
            node.left = this.removeNode(node.left, key);
            return node;
        }
        else if (this.compareFn(key, node.key) == Compare.BIGGER_THAN) {
            node.right = this.removeNode(node.right, key);
            return node;
        } else {
            if (node.left == null && node.right == null) {
                node == null;
                return node;
            }
            if (node.left == null) {
                node = node.right;
                return node;
            }
            else if (node.right == null) {
                node = node.left;
                return node;
            }
            const aux = this.minNode(node.right);
            node.key = aux.key;
            node.right = this.removeNode(node.right, aux.key);
            return node;
        }
    }
}

// 自平衡树
class AvlTree extends BinarySearchTree {
    constructor(compareFn = defaultCompare) {
        super(compareFn);
        this.compareFn = compareFn;
        this.root = null;
    }
}