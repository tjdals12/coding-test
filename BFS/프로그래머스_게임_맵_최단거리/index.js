const WALL = 0;
const WAY = 1;

function solution(maps) {
    const startPosition = [0, 0];
    const endPosition = [maps.length - 1, maps[0].length - 1];
    const queue = [];
    queue.push(startPosition);
    const visited = new Array(maps.length).fill().map(() => new Array(maps[0].length).fill(false));
    let answer = 1;
    while (queue.length > 0) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const [y, x] = queue.shift();
            if (visited[y][x] === true) continue;
            if (y === endPosition[0] && x === endPosition[1]) return answer;
            // top
            if ((y - 1) >= 0 && maps[y - 1][x] === WAY) {
                queue.push([y - 1, x]);
            }
            // bottom
            if (maps.length > (y + 1) && maps[y + 1][x] === WAY) {
                queue.push([y + 1, x]);
            }
            // left
            if ((x - 1) >= 0 && maps[y][x - 1] === WAY) {
                queue.push([y, x - 1]);
            }
            // right
            if (maps[0].length > (x + 1) && maps[y][x + 1] === WAY) {
                queue.push([y, x + 1]);
            }
            visited[y][x] = true;
        }
        answer++;
    }
    return -1;
}

console.log(solution(
    [
        [1,0,1,1,1],
        [1,0,1,0,1],
        [1,0,1,1,1],
        [1,1,1,0,1],
        [0,0,0,0,1]
    ]
)); //	11
console.log(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]])); //	-1