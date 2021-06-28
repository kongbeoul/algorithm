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

// LEFT RIGHT ROOT
var postorderTraversal = function(root) {
    if(root === null) return [];

    const answer = [];
    const stack = [];
    const visited = [];

    stack.push(root);

    while(stack.length) {
        const p = stack.pop();
        if(p.right && p.left && !visited.includes(p.right) && !visited.includes(p.left)) {
            stack.push(p);
            stack.push(p.right);
            stack.push(p.left);
        } else if(p.right && !p.left && !visited.includes(p.right)) {
            stack.push(p);
            stack.push(p.right);
        } else if(!p.right && p.left && !visited.includes(p.left)) {
            stack.push(p);
            stack.push(p.left);
        } else {
            visited.push(p);
            answer.push(p.val);
        }
    }
    
    return answer;
};
console.log(postorderTraversal(root));