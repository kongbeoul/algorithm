/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    let result = new Array(num1.length + num2.length).fill(0);

    for (let i = num1.length - 1; i >= 0; i--) {
        let index = num2.length + i;
        let carry = 0;
        for (let j = num2.length - 1; j >= 0; j--) {
            let value = num1[i] * num2[j] + carry + result[index];
            result[index] = value % 10;
            carry = (value - result[index]) / 10;
            index--;
        }
        result[index] += carry;
    }
    if (result[0] === 0) {
        while (result[0] === 0 && result.length !== 1) {
            result.shift();
        }
    }
    return result.join("").toString();
};


console.log(multiply("123456789", "987654321"))