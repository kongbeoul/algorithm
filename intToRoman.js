/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const hash = {
        1000: 'M',
        900: 'CM',
        500: 'D',
        400: 'CD',
        100: 'C',
        90: 'XC',
        50: 'L',
        40: 'XL',
        10: 'X',
        9: 'IX',
        5: 'V',
        4: 'IV',
        1: 'I'
    }
    let answer = '';

    Object.keys(hash).map(v => +v).sort((a, b) => b - a).forEach(v => {
        if(num >= v) {
            const count = parseInt(num / v);
            answer += hash[v].repeat(count);
            num = num % v;
        }
    })
    return answer;
}

intToRoman(1994);