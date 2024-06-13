function solution(maps) {
    maps = maps.map((v1) => v1.split("").map((v2) => v2 === "X" ? v2 : Number(v2)));
    const answer = [];
    const queue = [];
    for (let i = 0; i < maps.length; i++) {
        for (let j = 0; j < maps[i].length; j++) {
            if (maps[i][j] === 'X') continue;
            queue.push([i, j]);
            let result = 0;
            while (queue.length > 0) {
                const [y, x] = queue.shift();
                if (maps[y][x] === 'X') continue;
                result += maps[y][x];
                // top
                if ((y - 1) >= 0 && maps[y - 1][x] !== 'X') {
                    queue.push([y - 1, x]);
                }
                // bottom
                if (maps.length > (y + 1) && maps[y + 1][x] !== 'X') {
                    queue.push([y + 1, x]);
                }
                // left
                if ((x - 1) >= 0 && maps[y][x - 1] !== 'X') {
                    queue.push([y, x - 1]);
                }
                // right
                if (maps[y].length > (x + 1) && maps[y][x + 1] !== 'X') {
                    queue.push([y, x + 1]);
                }
                maps[y][x] = 'X';
            }
            answer.push(result);
        }
    }
    if (answer.length === 0) {
        return [-1];
    }
    return answer.sort((a, b) => a - b);
}

console.log(solution(["X591X","X1X5X","X231X", "1XXX1"])); //	[1, 1, 27]
console.log(solution(["XXX","XXX","XXX"])); //	[-1]