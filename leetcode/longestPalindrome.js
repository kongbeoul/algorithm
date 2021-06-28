/**
 * @param {string} s
 * @return {string}
 */
// Brute Force
// var longestPalindrome = function(s) {
//     if(s.length < 2) return s;
//     let answer = '';
//     for(let i = 0; i < s.length; i++) {
//         for(let j = i; j < s.length; j++) {
//             if(s[i] === s[j]) {
//                 const substr = s.substring(i, j + 1);
//                 let left = i + 1;
//                 let right = j - 1;
//                 let flag = 0;
//                 while(left < right) {
//                     if(s[left] === s[right]) {
//                         left++;
//                         right--;
//                     } else {
//                         flag = 1;
//                         break;
//                     }
//                 }
//                 if(flag === 0 && substr.length > answer.length) {
//                     answer = substr;
//                 }
//             }
//         }
//     }
//     return answer;
// };

// Dynamic Programing
var longestPalindrome = function(s) {
    const len = s.length;
    const dp = new Array(len).fill().map(v => new Array());
    let answer = s[0];

    for(let i = 0; i < len; i++) {
        dp[i][i] = true;
    }

    for(let i = 0; i < len - 1; i++) {
        if(s[i] === s[i + 1]) {
            dp[i][i + 1] = true;
            answer = s.substring(i, i + 2);
        }
    }

    for(let i = 2; i < len; i++) {
        let left = 0;
        let right = i;
        while(right < len) {
            if((dp[left + 1][right - 1] && s[left] === s[right])) {
                dp[left][right] = true;
                answer = s.substring(left, right + 1);
            } else {
                dp[left][right] = false;
            }
            left++;
            right++;
        }
    }
    return answer;
};

console.log(longestPalindrome("babad"))