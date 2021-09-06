function solution(weights, head2head) {
    const map = weights.reduce((a, c, k) => {
 
        const result = head2head[k].split("");
       
        const total = result.reduce((a, c) => {
            if(c === 'W' || c === 'L') a++;
            return a;
        }, 0);

        let winCount = 0,
            biggerThanSelfWinCount = 0;

        for(let i = 0; i < result.length; i++) {
            if(result[i] === "N") continue;
            if(result[i] === "W") winCount++;
            if(weights[i] > c && result[i] === "W") biggerThanSelfWinCount++
        }

        a.push({
            weight: c,
            number: k + 1,
            rate: total === 0 ? 0 : winCount / total,
            biggerThanSelfWinCount
        });

        return a;
    }, []);

    map.sort((a, b) => {
        if(a.rate !== b.rate) {
            return b.rate - a.rate
        } else {
            if(a.biggerThanSelfWinCount !== b.biggerThanSelfWinCount) {
                return b.biggerThanSelfWinCount - a.biggerThanSelfWinCount;
            } else {
                if(a.weight !== b.weight) {
                    return b.weight - a.weight;
                } else {
                    return a.number - b.number;
                }
            }
        }
    })
    console.log(map);
    return map.map(v => v.number);
    
}

console.log(solution([50,82,75,120], ["NLWL","WNLL","LWNW","WWLN"]))
console.log(solution([145,92,86], ["NLW","WNL","LWN"]))
console.log(solution([60,70,60], ["NNN","NNN","NNN"]))