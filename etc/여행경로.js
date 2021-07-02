function solution(tickets) {
    const answer = [];
    const visited = [];
    const len = tickets.length;

    tickets.sort();


    function dfs(start, result) {
        answer.push(start);

        if(result === len) return true;
        
        for(let i = 0; i < len; i++) {
            if(tickets[i][0] === start && !visited[i]) {
                visited[i] = true;
                if(dfs(tickets[i][1], result + 1)) {
                    return true;
                };
                visited[i] = false;
            }
        }

        answer.pop();
        return false;
    }

    answer.push('ICN');

    for(let i = 0; i < len; i++) {
        if(tickets[i][0] === 'ICN') {
            visited[i] = true;
            if(dfs(tickets[i][1], 1)) {
                return answer;
            }
            visited[i] = false;
        }
    }
}
console.log(solution([["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL","SFO"]]))

// console.log(solution([["ICN", "A"], ["A", "B"], ["A", "C"], ["C", "A"], ["B", "D"]]))
// 	["ICN", "BOO", "DOO", "BOO", "ICN", "COO", "DOO", "COO", "BOO"]