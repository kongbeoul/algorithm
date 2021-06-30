/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

function ListNode(val, next) {
   this.val = (val===undefined ? 0 : val)
   this.next = (next===undefined ? null : next)
}

const head = new ListNode(1, new ListNode(2));


var isPalindrome = function(head) {
    let len = 0;
    const hash = {};

    function search(node, len) {
        if(node === null) return 0;
        hash[len] = node;
        ++len;
        let order = search(node.next, len); 
        if(order !== false) {
            order += 1;
            if(hash[order].val !== node.val) return false;
        }
        if(order === false) return false;
        return order;
    }

    const answer = search(head, len + 1);
    return answer !== false ? true : false;
};

isPalindrome(head);

// console.log(isPalindrome());