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
 * @return {number[]}
 */
// var inorderTraversal = function(root) {
//     function tree(node, temp) {
//         if(node === null) return temp;

//         if(node.left !== null) {
//             tree(node.left, temp);
//         }

//         temp.push(node.val);

//         if(node.right !== null) {
//             tree(node.right, temp);
//         }

//         return temp;
//     }

//     return tree(root, []);
// };

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
const left = new TreeNode(3)
const right = new TreeNode(2, left);
const root = new TreeNode(1, null, right);

// ROOT LEFT RIGHT
var preorderTraversal = function(root) {
    if(root === null) return [];

    const answer = [];
    const stack = [];
    stack.push(root);

    while(stack.length) {
        const q = stack.pop();
        answer.push(q.val);

        if(q.right) {
            stack.push(q.right)
        }
        
        if(q.left) {
            stack.push(q.left);
        }
    }

    return answer;
};

console.log(preorderTraversal(root));