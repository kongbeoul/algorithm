/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let answer = '';
    while(columnNumber !== 0) {
        answer += String.fromCharCode((columnNumber - 1) % 26 + 'A'.charCodeAt())
        columnNumber = Math.floor((columnNumber - 1) / 26);
    }
    return answer.split("").reverse().join("")
};

console.log(convertToTitle(701))