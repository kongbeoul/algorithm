/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var sortedArrayToBST = function(nums) {
    function makeTree(nums, start, end) {
        if(start > end) return null;
        const mid = Math.floor((start + end) / 2);
        const root = new TreeNode(nums[mid]);

        root.left = makeTree(nums, start, mid - 1);
        root.right = makeTree(nums, mid + 1, end);
        return root;
    }
    return makeTree(nums, 0, nums.length - 1);
};

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]))