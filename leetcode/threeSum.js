/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// 틀린 소스
// var threeSum = function(nums) {
//     if(nums.length < 3) return [];
//     const firstPositive = nums.findIndex((num) => num > 0)

//     if (firstPositive === -1) {
//       if (nums.filter((num) => num === 0).length >= 3) {
//         return [[0, 0, 0]]
//       }
//       return []
//     }

//     const N = 3;
//     const answer = [];

//     function DFS(t, v, i, c) {
//         if(c === N && t !== 0) return false; 
//         if(c === N && t === 0) return true;
        
//         for(let j = i + 1; j < nums.length; j++) {
//             const h = DFS(t + nums[j], nums[j], j, c + 1);
//             if(h) {
//                 answer.push([t - v, v, nums[j]])
//                 break;
//             };
//         }
//     }

//     for(let n = 0; n <= nums.length % N; n++) {
//         DFS(nums[n], nums[n], 0, 1);
//     }
//     answer.forEach(v => v.sort());
//     return answer;
// };

var threeSum = function(nums) {
    const answer = [];
    nums.sort((a, b) => a - b) // sort nums array in ascending order

    const positive = nums.findIndex(v => v > 0);    
    if(positive < 0) {
        if (nums.filter((num) => num === 0).length >= 3) {
            return [[0, 0, 0]]
          }
        return []
    }

    for(let i = 0; i < positive; i++) {
        if(i > 0 && nums[i] === nums[i - 1]) continue;

        const num = nums[i];
        let left = i + 1;
        let right = nums.length - 1;

        while(left < right) {
            let sum = num + nums[left] + nums[right];

            if(sum > 0) right--;
            else if(sum < 0) left++;
            else {
                answer.push([num, nums[left], nums[right]]);
                left++;
                right--;
                while(left < right && nums[left] === nums[left - 1]) left++;
                while(left < right && nums[right] === nums[right + 1]) right--;
            }
        }
    }
    return answer;
}

console.log(threeSum([1,-1,-1,0]))