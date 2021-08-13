function solution(arr) {
    const answer = new Array(2).fill(0);

    function recursive(arr, startX, startY, size) {
        const value = arr[startX][startY];

        if(size === 1) {
            value === 0 ? answer[0] += 1 : answer[1] += 1;
            return;
        };
        
        let flag = true;
        
        for(let x = startX; x < startX + size; x++) {
            for(let y = startY; y < startY + size; y++) {
                if(value !== arr[x][y]) {
                    flag = false;
                    break;
                }
            }
            if(!flag) break;
        }

        if(flag) {
            value === 0 ? answer[0] += 1 : answer[1] += 1;
            return;
        } else {

            const half = size / 2;

            recursive(arr, startX, startY, half);
            recursive(arr, startX, startY + half, half);
            recursive(arr, startX + half, startY, half);
            recursive(arr, startX + half, startY + half, half);
            return;
        }
    }

    recursive(arr, 0, 0, arr.length);


    return answer;
}

console.log(solution([[1,1,0,0],[1,0,0,0],[1,0,0,1],[1,1,1,1]]));
console.log(solution([[1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,1],[0,0,0,0,1,1,1,1],[0,1,0,0,1,1,1,1],[0,0,0,0,0,0,1,1],[0,0,0,0,0,0,0,1],[0,0,0,0,1,0,0,1],[0,0,0,0,1,1,1,1]]))