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

console.log(combination([1, 2, 3], 2));