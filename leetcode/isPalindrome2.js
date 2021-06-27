var isPalindrome = function(s) {
    s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let left = 0;
    let right = s.length - 1;
    console.log(s[left], s[right])
    while(left < right) {
        if(s[left] === s[right]) {
            left++;
            right--;   
        } else {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome("0P"))