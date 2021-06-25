/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

 function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var isSameTree = function(p, q) {
    
    function tree(p, q) {
        if(p === null && q === null) return true;
        if(p === null || q === null) return false;
        if(p.val !== q.val) return false;
        
        if(p.val === q.val) {
            return tree(p.left, q.left) && tree(p.right, q.right);
        } 
    }

    return tree(p, q);
};

const p = new TreeNode(1, new TreeNode(2), new TreeNode(3))
const q = new TreeNode(1, new TreeNode(2), new TreeNode(3))

console.log(isSameTree(p, q))