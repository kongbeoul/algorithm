function solution(cacheSize, cities) {
    if(cacheSize <= 0) return 5 * cities.length;
  
    const queue = [];
    
    let total = 0;

    for(let i = 0, len = cities.length; i < len; i++) {
        const value = cities[i].toLowerCase();
        const index = queue.indexOf(value)
       
        queue.push(value);

        if(index > -1) {
            queue.splice(index, 1);
            total += 1;
        } else {
            if(queue.length > cacheSize) queue.shift();
            total += 5;
        }

    }
    
    return total;

}

console.log(solution(3, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]))
// console.log(solution(3, ["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"]))
// console.log(solution(2, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]))
// console.log(solution(5, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]))
// console.log(solution(2, ["Jeju", "Pangyo", "NewYork", "newyork"]))
// console.log(solution(0, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA"]))
// console.log(solution(5, ["Jeju", "Jeju", "Jeju"]))
