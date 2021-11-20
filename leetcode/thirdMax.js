/**
 * @param {number[]} nums
 * @return {number}
 */
// var thirdMax = function(nums) {
//   nums = nums.sort((a, b) => a - b);
  
//   let index = 0;

//   let first = nums[index],
//       second = null,
//       third = null;

//   while(index < nums.length) {
//     if(nums[index] > first) {
//       third = second;
//       second = first;
//       first = nums[index];
//     } else if(nums[index] > second && nums[index] < first) {
//       third = second;
//       second = nums[index];
//     }
//     index += 1;
//   }

//   if(third === null || (third !== null && second >= first)) {
//     return Math.max(...nums)
//   }

//   return third;
// };

var thirdMax = function(nums) {
  const unique = Array.from(new Set(nums)).sort((a, b) => b - a);
  if(unique.length < 3) {
    return Math.max(...unique);
  } else {
    return unique[2];
  }
}

console.log(thirdMax([3,2,1]))
console.log(thirdMax([1,2]))
console.log(thirdMax([2,2,3,1]))
console.log(thirdMax([1, 1, 2]))
console.log(thirdMax([1, 2, 2]))