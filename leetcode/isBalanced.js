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
 * @return {boolean}
 */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
const right = new TreeNode(20, new TreeNode(15), new TreeNode(7));
const left = new TreeNode(9)
const root = new TreeNode(3, left, right);

var isBalanced = function(root) {
    function search(node) {
        if(node === null) return 0;
        const l = search(node.left);
        const r = search(node.right);
        if(l === -1 || r === -1 || Math.abs(l - r) > 1) return -1;

        return Math.max(l, r) + 1;
    }
    if(root === null) return true;
    return search(root) !== -1;
};

console.log(isBalanced(root));