function solution(orders, course) {
    function combination(data, n) {
        const results = [];
        if(n === 1){
            return data.map((element) => [element]);
        }
        data.forEach((fixed, index, origin) => {
            const rest = origin.slice(index + 1);
            const combinations = combination(rest, n - 1);
            const attached = combinations.map((combination) => [fixed, ...combination]);
            results.push(...attached);
        });
        return results;
    }
    
    const list = {};

    const answer = [];

    for(const c of course) {
        orders.forEach(o => {
            if(o.length < c) return;
            const alpha = o.split("").sort();
            const combine = combination(alpha, c);
            combine.forEach(key => {
                list[key.join('')] = (list[key.join('')] || 0) + 1;
            })
        })        
    }

    const entries = Object.entries(list);

    for(const c of course) {
        const filter = entries.filter(([key, value]) => {
            return key.length === c && value > 1
        });
        
        const max = Math.max.apply(null, filter.map(([key, value]) => value));
        
        filter.forEach(([key, value]) => {
            value === max && answer.push(key);
        })
    }

    return answer.sort();
   
}

console.log(solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4]))
console.log(solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2, 3, 5]))
console.log(solution(["XYZ", "XWY", "WXA"], [2, 3, 4]))