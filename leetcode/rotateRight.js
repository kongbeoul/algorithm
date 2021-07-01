/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
*/
var rotateRight = function(head, k) {
    function getTotalCount(node) {
        if(node === null) return 0;
        return getTotalCount(node.next) + 1;
    }
 
    const total = getTotalCount(head);
    if(head === null || k === 0 || total <= 1) return head;

    function findLastNode(node) {
        if(node === null) return true;
        const l = findLastNode(node.next);

        if(l && node.next === null) {
            return node;
        }

        if(l && node.next !== null) {
            node.next = null;
        }
        return l;
    }
    
    
    
};