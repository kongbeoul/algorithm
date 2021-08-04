/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const hash = {}; let odd = 0;
    for(let i = 0; i < s.length; i++) {
        hash[s[i]] = (hash[s[i]] || 0) + 1;
    }

    Object.values(hash).forEach(v => {
        if(v % 2 !== 0) odd++;
    });

    return odd > 0 ? s.length - odd + 1 : s.length;
};

console.log(longestPalindrome('adam'))