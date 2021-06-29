/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    function search(node, val) {
        if(node === null) return null;
        const n = search(node.next, val);
        if(node.val === val) return n;
        else {
            node.next = n;
            return node;
        }
    }

    return search(head, val);

};