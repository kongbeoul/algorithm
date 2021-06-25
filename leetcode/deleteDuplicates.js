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
// var deleteDuplicates = function(head) {
//     let dummy = head;

//     function search(node) {
//         if(node === null) return null;
//         else {
//             const n = search(node.next);
//             if(n !== null && node.val === n.val) {
//                 node.next = n.next;
//             }
//             return node;
//         }
//     }
//     return search(dummy);
// };

var deleteDuplicates = function(head) {
    let node = head;
    while(node && node.next !== null) {
        if(node.val === node.next.val) {
            node.next = node.next.next;
        } else {
            node = node.next;
        }
    }
    return head;
};