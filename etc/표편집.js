function solution(n, k, cmd) {
    function Node(prev, value, next) {
        this.prev = prev || null;
        this.value = value || 0;
        this.next = next || null;
    }
    const answer = new Array(n).fill("X");
    const root = new Node();
    const stack = [];

    let target = root;

    for(let i = 1; i < n; i++) {
        target.next = new Node(target, i);
        target = target.next;
    }

    target = root;

    for(let i = 0; i < k; i++) {
        target = target.next;
    }

    for(const command of cmd) {
        if(command.includes('D') || command.includes('U')) {
            const [operation, distance] = command.split(" ");
            let x = 0;
            if(operation === "D") {
                while(x < distance) {
                    target = target.next;
                    x++;
                }
            } else if(operation === "U") {
                while(x < distance) {
                    target = target.prev;
                    x++;
                }
            }
        } else if(command === "C") {
            stack.push(target);
            
            if(target.prev !== null) {
                target.prev.next = target.next;
            }

            if(target.next !== null) {
                target.next.prev = target.prev;
            }

            if(target.next === null) {
                target = target.prev;
            } else {
                target = target.next;
            }

        }  else if(command === "Z") {
            const last = stack.pop();

            if(last.prev !== null) {
                last.prev.next = last;
            }

            if(last.next !== null) {
                last.next.prev = last;            
            }
        }
    }

    target = root;
    
    while(target !== null) {
        answer[target.value] = "O";
        target = target.next;
    }

    return answer.join("");

}

console.log(solution(8, 2, ["D 2","C","U 3","C","D 4","C","U 2","Z","Z"]))
console.log(solution(8, 2, ["D 2","C","U 3","C","D 4","C","U 2","Z","Z","U 1","C"]))