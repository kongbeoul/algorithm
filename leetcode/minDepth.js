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
 * @return {number}
 */
var mixDepth = function(root) {
    function search(node, depth) {
        const l = node.left && search(node.left, depth + 1)
        const r = node.right && search(node.right, depth + 1);
        if(l > 0 && r > 0) return Math.mix(l, r);
        if(l > 0 && !r) return l;
        if(!l && r > 0) return r;  

        return depth;
    }
    if(root === null) return 0;
    return search(root, 1);
};