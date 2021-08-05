function solution(skill, skill_trees) {
    let answer = 0;
    const keys = skill.split("");
    const order = keys.reduce((a, c, k) => {
        a[c] = k;
        return a;
    }, {});

    for(const s of skill_trees) {
        let flag = true, count = 0;
        for(let i = 0; i < s.length; i++) {
            if(keys.includes(s[i])) {
                if(count !== order[s[i]]) {
                    flag = false;
                    break;
                } else {
                    count += 1;
                }
            }
        }
        if(flag) {
            answer += 1;
        }
    }

    return answer;

}

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]));
console.log(solution("ABC", ["OPQ"]));
console.log(solution("XYZ", ["BACDE", "CBADF", "AECB", "BDA", "AQWER"]));