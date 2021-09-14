/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    function matched(s1, s2) {
        for(let i = 0; i < 26; i++) {
            if(s1[i] !== s2[i]) return false;
        }
        return true;
    }

    if(s1.length > s2.length) return false;
    const alphabet = new Array(26).fill(0);
    
    for(let i = 0; i < s1.length; i++) {
        alphabet[s1.charCodeAt(i) - 'a'.charCodeAt()]++
    }
    
    for(let i = 0; i <= s2.length - s1.length; i++) {
        const temp = new Array(26).fill(0);
        for(let j = 0; j < s1.length; j++) {
            temp[s2.charCodeAt(i + j) - 'a'.charCodeAt()]++;
        }
        if(matched(alphabet, temp)) return true;
    }
    return false;
};

console.log(checkInclusion("ab", "eidbaooo"));
console.log(checkInclusion("intention", "execution"));