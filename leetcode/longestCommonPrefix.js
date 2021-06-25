var longestCommonPrefix = function(strs) {
    strs.sort((a, b) => a.length - b.length);
    let answer = "";

    for(let i = 1; i <= strs[0].length; i++) {
        const repeat = strs[0].substring(0, i);
        for(let j = 1; j < strs.length; j++) {
            if(repeat !== strs[j].substring(0, i)) return answer;
        }
        answer = repeat;
    }
    return answer;
}

console.log(longestCommonPrefix(["dog","racecar","car"]));
console.log(longestCommonPrefix(["flower","flow","flight"]));