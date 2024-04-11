function solution(N, road, K) {
    const lines = Array.from(new Array(N + 1), () => []);
    road.forEach((r) => {
        const [start, end, cost] = r;
        lines[start].push({ next: end, cost: cost });
        lines[end].push({ next: start, cost: cost });
    });
    const distances = new Array(N + 1).fill(Number.MAX_SAFE_INTEGER);
    distances[1] = 0;
    const queue = [1];
    while (queue.length > 0) {
        const current = queue.pop();
        lines[current].forEach(({ next, cost }) => {
            if (distances[next] > distances[current] + cost) {
                distances[next] = distances[current] + cost;
                queue.push(next);
            }
        });
    }
    const count = distances.filter((distance) => K >= distance).length;
    return count;
}

console.log(solution(5, [[1,2,1],[2,3,3],[5,2,2],[1,4,2],[5,3,1],[5,4,2]], 3)) // 4
console.log(solution(6, [[1,2,1],[1,3,2],[2,3,2],[3,4,3],[3,5,2],[3,5,3],[5,6,1]], 4)) // 4