// 给你一个二叉树的根节点 root ， 检查它是否轴对称

var isSymmetric = function(root) {
    //使用递归遍历左右子树 递归三部曲
    // 1. 确定递归的参数 root.left root.right和返回值true false 
    const compareNode=function(left,right){
        //2. 确定终止条件 空的情况
        if(left===null&&right!==null||left!==null&&right===null){
            return false;
        }else if(left===null&&right===null){
            return true;
        }else if(left.val!==right.val){
            return false;
        }
        //3. 确定单层递归逻辑
        let outSide=compareNode(left.left,right.right);
        let inSide=compareNode(left.right,right.left);
        return outSide&&inSide;
    }
    if(root===null){
        return true;
    }
    return compareNode(root.left,root.right);
};