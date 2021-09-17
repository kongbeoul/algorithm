function solution(enter, leave) {
    const n = enter.length;
    const queue = [];
    const answer = new Array(n).fill(0);
    let enterIndex = 0;
    let leaveIndex = 0;
    
    while(enterIndex < n || leaveIndex < n) {
        const nextEnter = enter[enterIndex];
        const nextLeave = leave[leaveIndex];
        if(!queue.includes(nextLeave)) {
            queue.push(nextEnter);
            enterIndex++;
        } else {
            queue.splice(queue.indexOf(nextLeave), 1);
            if(queue.length > 0) {
                queue.forEach(q => answer[q - 1]++);
                answer[nextLeave - 1] += queue.length;
            }
            leaveIndex++;
        }
    }
    
    return answer;
}

console.log(solution([1,3,2], [1,2,3]))
console.log(solution([1,4,2,3], [2,1,3,4]))