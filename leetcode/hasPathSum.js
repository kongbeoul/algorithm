/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var hasPathSum = function(root, targetSum) {
    function add(node, sum, targetSum) {
        if(node.left || node.right) {
            const l = node.left ? add(node.left, sum + node.val, targetSum) : false;
            const r = node.right ? add(node.right, sum + node.val, targetSum) : false;
            return l || r;
        } else {
            return sum + node.val === targetSum;
        } 
    }
    return add(root, 0, targetSum);
};

console.log(hasPathSum(new TreeNode(1, new TreeNode(2)), 3))