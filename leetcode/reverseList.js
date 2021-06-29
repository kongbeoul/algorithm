/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(head === null) return null;
    const nNode = new ListNode();
    function search(node) {
        if(node === null) return null;
        const n = search(node.next);
        if(n === null) {
            nNode.val = node.val;
            return nNode
        } else {
            n.next = node;
            return node;
        }
    }
    search(head);
    head.next = null;
    return nNode;
};