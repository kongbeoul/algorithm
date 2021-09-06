function solution(weights, head2head) {
    const map = weights.map((v, i) => {
 
        const result = head2head[i].split("");
       
        const len = result.filter(f => f !== "N").length;

        let winCount = 0,
            biggerThanSelfWinCount = 0;

        for(let j = 0; j < result.length; j++) {
            if(result[j] === "N") continue;
            if(result[j] === "W") winCount++;
            if(weights[j] > v && result[j] === "W") biggerThanSelfWinCount++
        }

        return {
            weight: v,
            number: i + 1,
            rate: len === 0 ? 0 : winCount / len,
            biggerThanSelfWinCount
        }
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

    return map.map(v => v.number);
    
}

console.log(solution([50,82,75,120], ["NLWL","WNLL","LWNW","WWLN"]))
console.log(solution([145,92,86], ["NLW","WNL","LWN"]))
console.log(solution([60,70,60], ["NNN","NNN","NNN"]))