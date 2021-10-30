/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const map = new Map();
  const visited = [];
  for(let i = 0; i < s.length; i++) {
    if(map.has(s[i])) {
      map.delete(s[i])
    } else {
      if(visited.indexOf(s[i]) > -1) continue;
      map.set(s[i], i);
      visited.push(s[i]);
    }
  };
  return map.size > 0 ? map.values().next().value : -1;
};

console.log(firstUniqChar("leetcode"))
console.log(firstUniqChar("loveleetcode"))
console.log(firstUniqChar("aabb"))