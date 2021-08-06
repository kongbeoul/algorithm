function solution(info, query) {
    const answer = [];
    const map = {};

    function combination(array, score, start) {
        const key = array.join('');
        const value = map[key];

        if(value) {
            map[key].push(score)
        } else {
            map[key] = [ score ];
        }

        for(let i = start; i < array.length; i++) {
            const temp = [...array ];
            temp[i] = '-';
            combination(temp, score, i + 1);
        }
    }

    info.forEach(i => {
        const key = i.split(" ");
        const score = Number(key.pop());
        combination(key, score, 0);       
    })

    for(const k in map) {
        map[k].sort((a, b) => a - b);
    }

    query.forEach(q => {
        const split = q.replace(/ and /g, " ").split(" ");
        const score = Number(split.pop());
        const key = split.join('');
        const value = map[key];

        if(value) {
            let start = 0;
            let end = value.length;

            while(start < end) {
                const mid = Math.floor((start + end) / 2);

                if(value[mid] >= score) {
                    end = mid;
                } else if(value[mid] < score) {
                    start = mid + 1;
                }
            }

            const result = value.length - start;
            answer.push(result);
        } else {
            answer.push(0)
        }
    })

    return answer;
}

console.log(solution(
    [
        "java backend junior pizza 150",
        "python frontend senior chicken 210",
        "python frontend senior chicken 150",
        "cpp backend senior pizza 260",
        "java backend junior chicken 80",
        "python backend senior chicken 50"
    ],
    [
        "java and backend and junior and pizza 100",
        "python and frontend and senior and chicken 200",
        "cpp and - and senior and pizza 250",
        "- and backend and senior and - 150",
        "- and - and - and chicken 100",
        "- and - and - and - 150"
    ]
    )
)