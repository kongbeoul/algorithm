var isPalindrome = function(x) {
    x = x.toString().split("");
    const reverse = x.slice().reverse();

    for(let i = 0; i < x.length; i++) {
        if(x[i] !== reverse[i]) return false;
    }

    return true;
}

console.log(isPalindrome(-1))