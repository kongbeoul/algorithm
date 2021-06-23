/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// 재귀 호출
var removeNthFromEnd = function(head, n) {
    const r = { count: 0 };

    function search(node, n, r) {
        if(node === null) return null;
        else {
            const k = search(node.next, n, r);
            r.count++;
            if(r.count == n) {
                return node.next;
            }
            node.next = k;
            return node;
        }
    }
    return search(head, n, r);
};
