function solution(n, wires) {
    const graph = new Array(n + 1).fill().map(() => []);
    wires.forEach((v) => {
        const [t1, t2] = v;
        graph[t1].push(t2);
        graph[t2].push(t1);
    });
    const traverse = (cur, visited) => {
        visited[cur] = true;
        let count = 1;
        graph[cur].forEach((next) => {
            if (visited[next] === false) {
                count += traverse(next, visited);
            }
        });
        return count;
    }
    let answer = Infinity;
    wires.forEach((v) => {
        const [t1, t2] = v;
        graph[t1].splice(graph[t1].indexOf(t2), 1);
        graph[t2].splice(graph[t2].indexOf(t1), 1);
        const visited = new Array(n + 1).fill(false);
        const count = traverse(1, visited);
        const diff = Math.abs(count - (n - count));
        answer = Math.min(answer, diff);
        graph[t1].push(t2);
        graph[t2].push(t1);
    });
    return answer;
}

console.log(solution(9, [[1,3],[2,3],[3,4],[4,5],[4,6],[4,7],[7,8],[7,9]])); //	3
console.log(solution(4, [[1,2],[2,3],[3,4]])); //	0
console.log(solution(7, [[1,2],[2,7],[3,7],[3,4],[4,5],[6,7]])); //	1