/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    return columnTitle.split("").reverse().reduce((a, c, i) => {
        let n = c.charCodeAt() - 'A'.charCodeAt();
        return a += Math.pow(26, i) * (n + 1);
    }, 0);
};

console.log(titleToNumber("FXSHRXW"))