(function () {
    let input = require("fs")
      .readFileSync("/dev/stdin")
      .toString()
      .split("\n");

      const [ N, M, K, X ] = input[0].split(" ");
      const data = new Array(parseInt(N) + 1).fill().map(v => []);
  
      input.slice(1).forEach(v => {
          v = v.split(" ");
          data[v[0]].push(v[1]);
      });
      
      const visited = new Array(parseInt(N) + 1).fill(-1);
      const queue = [];
  
      visited[X] = 0;
      queue.push(X);
  
      while(queue.length > 0) {
          const v = queue.shift();
          for(let i of data[v]) {
              if(visited[i] == -1) {
                  visited[i] = visited[v] + 1;
                  queue.push(i);
              }
          }
      }
  
      let check = false;
      for(let i = 0, len = visited.length; i < len; i++) {
          if(visited[i] == K) {
              console.log(i);
              check = true;
          }
      }
  
      if(check == false) {
          console.log(-1);
      }
})();



    

