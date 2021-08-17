const subway = ["1 2 3 4 5 6 7", "2 7 8 9 11", "8 9"];
const start = 1;
const end = 9;

function solution(subway, start, end) {
    const map = subway.reduce((a, c, idx) => {
        const split = c.split(" ");
        split.forEach((v, i) => {
            a[v] = (a[v] || []);
            if(split[i + 1]) {
                a[v].push({
                    next: Number(split[i + 1]),
                    line: idx + 1
                });
            }
        })
        return a;
    }, {});

    const visited = [];

    let answer = Infinity;
    
    const dfs = (start, line, result) => {
        if(start === end) {
            answer = Math.min(answer, result);
            return;
        }
        for(let i = 0; i < map[start].length; i++) {
            const { next, line: _line } = map[start][i];
            if(!visited[next]) {
                visited[next] = true;
                dfs(next, _line, line === _line ? result : result + 1);
                visited[next] = false;
            }
        }
    }

    dfs(start, 1, 0);

    return answer;
}

console.log(solution(subway, start, end))