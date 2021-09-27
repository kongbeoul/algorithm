/**
 * Definition for a binary tree node.
 */
 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
    const inorder = (node1, node2) => {
      if(node1 === null && node2 === null) return node2;

      if(node1 !== null && node1.val >= 0 && node2 !== null && node2.val >= 0) {
        node2.val += node1.val;
      }

      if(node1 && node2 === null) {
        return node1;
      } 

      if(node1 === null && node2) {
        return node2;
      }

      if(node1.left !== null && node2.left !== null) {
        inorder(node1.left, node2.left);
      } else if(node1.left !== null && node2.left === null) {
        node2.left = node1.left
      }

      if(node1.right !== null && node2.right !== null) {
        inorder(node1.right, node2.right)
      } else if(node1.right !== null && node2.right === null) {
        node2.right = node1.right;
      }

      return node2;
    }

    inorder(root1, root2);

    // console.log(root1, root2);

    return root2;
};

console.log(mergeTrees(new TreeNode(1), new TreeNode(0)));