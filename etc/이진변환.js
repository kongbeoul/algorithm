function solution(s) {
    let tried = 0, count = 0;

    while(s > 1) {
        const len = s.match(/0/g);

        if(len) {
            count += s.match(/0/g).length;
            s = s.replace(/0/g, '').length.toString(2);
        } else {
            s = s.length.toString(2);
        }
        tried += 1;
    }

    return [tried, count];
}

console.log(solution("110010101001"));
console.log(solution("01110"));
console.log(solution("1111111"));
