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
const left = new TreeNode(1)
const right = new TreeNode(2);
const root = new TreeNode(3, left, right);

// DFS
var inorderTraversal = function(root) {
    if(root === null) return [];
    
    const answer = [];
    const visited = [];
    const stack = [];

    stack.push(root);

    while(stack.length) {
        const q = stack.pop();
        visited.push(q);

        if(q.left && !visited.includes(q.left)) {
            stack.push(q);
            stack.push(q.left);
            continue;
        }
        
        answer.push(q.val);
        
        if(q.right) {
            stack.push(q.right);
        }
    }

    return answer;
};

console.log(inorderTraversal(root));