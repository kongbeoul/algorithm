/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let carry = 1;
    for(let i = digits.length - 1; i >= 0; i--) {
        digits[i] += carry;
        if(digits[i] >= 10) {
            digits[i] = 0;
        } else {
            carry = 0;
        }
    }

    if(carry > 0) {
        digits[0] = 0;
        digits.unshift(1);
    }
    return digits;
};

console.log(plusOne([
    6, 1, 4, 5, 3, 9, 0,
    1, 9, 5, 1, 8, 6, 7,
    0, 5, 5, 4, 3
  ]))