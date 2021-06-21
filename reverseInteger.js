var reverse = function(x) {
    var MAX_NUMBER = Math.pow(2, 31),
        MIN_NUMBER = Math.pow(-2, 31);

    var nx = parseInt(Math.abs(x).toString().split("").reverse().join(""), 10);
    
    if(nx > MIN_NUMBER && nx < MAX_NUMBER) {
        return x < 0 ? nx * -1 : nx
    } else {
        return 0;
    }
}

console.log(reverse(1534236469));