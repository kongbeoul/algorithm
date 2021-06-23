/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    const MIN_INTEGER = Math.pow(-2, 31);
    const MAX_INTEGER = Math.pow(2, 31) - 1;

    if(MIN_INTEGER > dividend > MAX_INTEGER) return -1;
    if(divisor === 1) return dividend;
    if(divisor === -1) {
        if(dividend > MAX_INTEGER + 1) return MIN_INTEGER;
        if(dividend < -MAX_INTEGER) return MAX_INTEGER;
        return -dividend;
    }

    let count = 0, 
        _dividend = Math.abs(dividend),
        _divisor = Math.abs(divisor);
    
    
    let exp = 1,
        a = _dividend,
        b = _divisor;

    while(a >= b) {
        exp += 1;
        b = Math.pow(_divisor, exp);
    }

    exp -= 1;
    b = Math.pow(_divisor, exp);

    while(a >= _divisor) {
        if(a >= b) {
            a -= b;
            count += Math.pow(_divisor, exp - 1)
        } else {
            exp -= 1;
            b = Math.pow(_divisor, exp);
        }
    }


    if((divisor > 0 && dividend < 0) || (divisor < 0 && dividend > 0)) count *= -1;
    if(count > MIN_INTEGER && count < MAX_INTEGER) return count;

};

console.log(divide(268, 3));