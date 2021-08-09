function solution(scores) {
    const N = scores.length;
    const answer = [];

    let x = 0;
    let y = 0;
    
    while(y < N) {
        const score = scores[y][y];
        const hash = {};
        
        let max = score;
        let min = score;
        let sum = 0;

        while(x < N) {
            sum += scores[x][y];

            if(scores[x][y] > max) {
                max = scores[x][y]
            }

            if(scores[x][y] < min) {
                min = scores[x][y]
            }

            hash[scores[x][y]] = (hash[scores[x][y]] || 0) + 1; 
            x++;
        }

        y++;
        x = 0;

        if(
            max === score && hash[score] < 2 ||
            min === score && hash[score] < 2
        ) {
            sum -= score;
            answer[y - 1] = Math.floor(sum / (N - 1));
            continue;
        } 
        
        answer[y - 1] = Math.floor(sum / N);
    } 

    return answer.map(v => {
        if(v >= 90) return 'A';
        else if(v >= 80 && v < 90) return 'B';
        else if(v >= 70 && v < 80) return 'C';
        else if(v >= 50 && v < 70) return 'D';
        else return 'F';
    }).join('');

}

console.log(solution([[100,90,98,88,65],[50,45,99,85,77],[47,88,95,80,67],[61,57,100,80,65],[24,90,94,75,65]]))
console.log(solution([[50,90],[50,87]]))
console.log(solution([[70,49,90],[68,50,38],[73,31,100]]))