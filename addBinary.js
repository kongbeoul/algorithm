/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    a = a.split("");
    b = b.split("");

    if(a.length > b.length) while(a.length > b.length) { b.unshift("0") }
    if(a.length < b.length) while(a.length < b.length) { a.unshift("0") } 

    let carry = 0;
    for(let i = a.length - 1; i >= 0; i--) {
        const n = parseInt(a[i]) + parseInt(b[i]) + carry;
        if(n >= 2) {
            carry = 1;
            a[i] = (n % 2) + "";
        } else {
            carry = 0;
            a[i] = n + "";
        }
    }
    if(carry === 1) a.unshift("1");
    return a.join("");
};

console.log(addBinary("1111", "1111"))