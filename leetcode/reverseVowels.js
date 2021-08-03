/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    if(!s.match(/[aeiouAEIOU]/g)) return s;

    let left = 0;
    let right = s.length - 1;

    s = s.split("");

    while(left < right) {
        while(!'aeiouAEIOU'.includes(s[left])) left++;
        while(!'aeiouAEIOU'.includes(s[right])) right--;

        if(left >= right) break;

        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;

        left++;
        right--;
    }

    return s.join("");

};

console.log(reverseVowels('hello'))
console.log(reverseVowels('leetcode'))
console.log(reverseVowels('aA'))