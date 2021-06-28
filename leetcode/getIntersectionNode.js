/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    
    function getListLength(node) {
        if(node === null) return 0;
        return getListLength(node.next) + 1;
    }

    let len1 = getListLength(headA);
    let len2 = getListLength(headB);

    if(len1 > len2) {
        while(len1 - len2 > 0) { headA = headA.next; len1--; }
    } else if(len2 > len1) {
        while(len2 - len1 > 0) { headB = headB.next; len2--; }
    }

    while(headA !== null && headB !== null) {
        if(headA === headB) return headA;
        headA = headA.next;
        headB = headB.next;
    }
    return null;
};