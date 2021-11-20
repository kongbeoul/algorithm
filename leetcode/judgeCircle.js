/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    const hash = {};
    moves.split("").forEach(move => {
      hash[move] = (hash[move] || 0) + 1;
    })
    return (hash['L'] === hash['R']) && (hash['U'] === hash['D']);
};

console.log(judgeCircle("UD"))
console.log(judgeCircle("LL"))
console.log(judgeCircle("RRDD"))
console.log(judgeCircle("LDRRLRUULR"))
console.log(judgeCircle("RLUURDDDLU"))