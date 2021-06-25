/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    if(n == 0) return;
    let left = 0;
    let right = 0;

    const copy = nums1.slice(0, m);

    let nIndex = 0;

    while(left < m) {
        if(copy[left] > nums2[right]) {
            nums1[nIndex] = nums2[right];
            right++;
            nIndex++;
        } else if(copy[left] <= nums2[right]) {
            nums1[nIndex] = copy[left];
            left++;
            nIndex++;
        }
        if(left === m || right === n) break;
    } 

    while(right < n && left === m) {
        nums1[nIndex] = nums2[right];
        nIndex++;
        right++;
    }

    while(left < m && right === n) {
        nums1[nIndex] = copy[left];
        nIndex++;
        left++;
    }

    console.log(nums1);

};

console.log(merge([-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [1, 2, 2], 3));