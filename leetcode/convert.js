/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

/** 
 * Cycle을 찾아야 하는 문제
 * 
 */
// var convert = function(s, numRows) {
//     if(s.length === numRows || numRows < 2) return s;
//     const answer = new Array(numRows).fill("");
//     const cycle = (numRows - 1) * 2;

//     for(let i = 0; i < s.length; i++) {
//         const temp = i % cycle;
//         if(temp < numRows) {
//             answer[temp] += s[i]
//         } else {
//             answer[cycle - temp] += s[i]
//         }
//     }

//     return answer.join("");
// };

var convert = function(s, numRows) {
    if(numRows < 2) return s;

    const answer = new Array(numRows).fill("");

    let flag = 1,
        x = -1;

    for(let i = 0; i < s.length; i++) {
        let nx = x + flag;
        if(nx >= numRows) {
            nx -= 2;
            flag *= -1
        } else if(nx < 0) {
            nx += 2;
            flag *= -1
        }        

        answer[nx] += s[i];
        x = nx;
    }

    return answer.join("");
}



convert("PAYPALISHIRING", 3)