/**
 * @written 2021.04.15
 * 
 * 
 */

const input = `
5
11 -15 -15
14 -5 -15
-1 -1 -5
10 -4 -1
19 -4 19
`;

function find_parent(parent, x) {
    if(parent[x] !== x) {
        parent[x] = find_parent(parent, parent[x]);
    };
    return parent[x];
}

function union_parent(parent, a, b) {
    const _a = find_parent(parent, a);
    const _b = find_parent(parent, b);

    if(_a < _b) {
        parent[_b] = _a 
    } else {
        parent[_a] = _b;
    }
}


function solution(input) {
    const N = parseInt(input[0]);
    input = input.slice(1).map(v => v.split(" ").map(_v => +_v))

    const parent = new Array(N).fill(0).map((v, i) => i);

    let graph = [];

    for(let i = 0; i < N -1; i++) {
        for(let j = i + 1; j < N; j++) {
            const [x1, y1, z1] = input[i];
            const [x2, y2, z2] = input[j];
            const nx = Math.abs(x1 - x2);
            const ny = Math.abs(y1 - y2);
            const nz = Math.abs(z1 - z2);
            
            graph.push([i, j, Math.min(nx, ny, nz)])
        }
    }    
    console.log(graph);

    graph = graph.sort((a, b) => a[2] - b[2]);

    let result = 0;

    for(let v of graph) {
        const [a, b, cost] = v;
        if(find_parent(parent, a) != find_parent(parent, b)) {
            union_parent(parent, a, b);
            result += cost;
        }
    }

    console.log(result);
}

console.log(solution(input.split("\n").slice(1, -1)));