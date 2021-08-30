function solution(word) {
    const alphabet = ["A", "E", "I", "O", "U"];
    let answer = 0;
    let order = 0;

    function dfs(result) {
        if(result.length > 5) {
            order--;
            return;
        };

        if(result === word) {
            answer = order;
            return;
        }

        for(let i = 0; i < alphabet.length; i++) {
            dfs(result + alphabet[i], ++order);
        }
    }

    for(let i = 0; i < alphabet.length; i++) {
        dfs(alphabet[i], ++order);
    }
    
    return answer;
}

console.log(solution("AAAAE"));
console.log(solution("AAAE"));
console.log(solution("I"));
console.log(solution("EIO"));
console.log(solution("A"));
