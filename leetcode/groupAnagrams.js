/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const answer = strs.reduce((a, v) => {
        const key = v.split("").sort().join("");
        if(!a[key]) a[key] = [];
        a[key].push(v);
        return a;
    }, {});
    return Object.values(answer).sort((a, b) => a.length - b.length);
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
console.log(groupAnagrams([""]))
console.log(groupAnagrams(["a"]))
console.log(groupAnagrams(["","b",""]));
console.log(groupAnagrams(["ddddddddddg","dgggggggggg"]));
console.log(groupAnagrams(["hhhhu","tttti","tttit","hhhuh","hhuhh","tittt"]));

