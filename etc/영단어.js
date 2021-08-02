function solution(s) {
    const hash = {
        "zero": "0",
        "one": "1",
        "two": "2",
        "three": "3",
        "four": "4",
        "five": "5",
        "six": "6",
        "seven": "7",
        "eight": "8",
        "nine": "9"
    };

    for(const v of Object.keys(hash)) {
        if(s.includes(v)) {
            s = s.replace(new RegExp(v, "g"), hash[v])
        }
    }
    return parseInt(s);

}

console.log(solution("nineninenine"))