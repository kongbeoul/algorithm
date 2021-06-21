var myAtoi = function(s) {
    const MIN_NUMBER = Math.pow(-2, 31),
        MAX_NUMBER = Math.pow(2, 31) - 1;
    s = s.trim();    
    
    for(let i = 0; i < s.length; i++) {
        if(s.charAt(i).match(/[^\-\+0-9]/) !== null) {
            s = s.substring(0, i);
            break;
        } 
    }

    s = parseInt(s);

    if(s > MIN_NUMBER && s < MAX_NUMBER) return s;
    if(s <= MIN_NUMBER) return MIN_NUMBER;
    if(s >= MAX_NUMBER) return MAX_NUMBER;

    return 0;


}

console.log(myAtoi("  -0012a42"));