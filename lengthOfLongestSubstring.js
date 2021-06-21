/**
 * 
 * Given a string s, find the length of the longest substring without repeating characters.
 * 
 * @example
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 * 
 * @example
 * Input: s = "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 * 
 * @example
 * Input: s = "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 * 
 * @example
 * Input: s = ""
 * Output: 0
 */

var lengthOfLongestSubstring = function(s) {
    let answer = 0;
    let i = 0;

    const hash = {};

    for(let j = 0; j < s.length; j++) {
        if(hash[s[j]]) {
            i = Math.max(hash[s[j]], i);
        }

        answer = Math.max(answer, j - i + 1);
        hash[s[j]] = j + 1;
    }

   return answer;
}

lengthOfLongestSubstring(" ")