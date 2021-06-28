/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    const visited = [];
    let node = head;
    while(node !== null) {
        if(visited.includes(node)) return true;
        visited.push(node);
        node = node.next;
    }
    return false;
};