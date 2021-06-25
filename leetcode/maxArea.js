/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    if(height.length < 2) return height[0];

    let max = Math.pow(-2, 31);

    let left = 0;
    let right = height.length - 1;

    while(right - left > 0) {
        
        const x = right - left;
        const y = Math.min(height[left], height[right]);

        max = Math.max(max, x * y);

        if(height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return max;
};

console.log(maxArea([4, 3, 2, 1, 4]));
