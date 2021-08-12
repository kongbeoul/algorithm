function solution(relation) {
    const M = relation[0].length;
    const len = 1 << M;

    const keys = new Set();

    for(let i = 1; i < len; i++) {
        const temp = relation.map(v => {
            return v.filter((_, c) => {
                return i & (1 << c);
            }).join('');
        })
        const set = new Set(temp);
        
        if(temp.length === set.size) keys.add(i);
    }

    for(const x of keys) {
        for(const y of keys) {
            if(x >= y) continue;
            if((x & y) === x) keys.delete(y);
        }
    }

    return keys.size;

}

console.log(solution(
    [
        ["100","ryan","music","2"],
        ["200","apeach","math","2"],
        ["300","tube","computer","3"],
        ["400","con","computer","4"],
        ["500","muzi","music","3"],
        ["600","apeach","music","2"]
    ]
))