const START = "S";
const END = "E";
const WALL = "X";
const WAY = "O";
const LEVER = "L";

function solution(maps) {
    let answer = 0;
    let visited = maps.map((v, i) => new Array(maps[i].length).fill(false));
    let startPosition = null;
    for (let i = 0; i < maps.length; i++) {
        for (let j = 0; j < maps[i].length; j++) {
            if (maps[i][j] === START) {
                startPosition = [i, j];
                break;
            }
        }
    }
    let queue = [startPosition];
    let isFoundLever = false;
    while (queue.length > 0) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const [y, x] = queue.shift();
            if (visited[y][x] === true) continue;
            if (maps[y][x] === LEVER) {
                isFoundLever = true;
                visited = maps.map((v, i) => new Array(maps[i].length).fill(false));
                queue = [];
                startPosition = [y, x];
                break;
            }
            // top
            if ((y - 1) >= 0 && maps[y - 1][x] !== WALL) {
                queue.push([y - 1, x]);
            }
            // bottom
            if (maps.length > (y + 1) && maps[y + 1][x] !== WALL) {
                queue.push([y + 1, x]);
            }
            // left
            if ((x - 1) >= 0 && maps[y][x - 1] !== WALL) {
                queue.push([y, x - 1]);
            }
            // right
            if (maps[y].length > (x + 1) && maps[y][x + 1] !== WALL) {
                queue.push([y, x + 1]);
            }
            visited[y][x] = true;
        }
        if (isFoundLever === true) {
            break;
        }
        answer++;
    }
    queue.push(startPosition);
    let isFoundEntrance = false;
    while (queue.length > 0) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const [y, x] = queue.shift();
            if (visited[y][x] === true) continue;
            if (maps[y][x] === END) {
                isFoundEntrance = true;
                break;
            }
            // top
            if ((y - 1) >= 0 && maps[y - 1][x] !== WALL) {
                queue.push([y - 1, x]);
            }
            // bottom
            if (maps.length > (y + 1) && maps[y + 1][x] !== WALL) {
                queue.push([y + 1, x]);
            }
            // left
            if ((x - 1) >= 0 && maps[y][x - 1] !== WALL) {
                queue.push([y, x - 1]);
            }
            // right
            if (maps[y].length > (x + 1) && maps[y][x + 1] !== WALL) {
                queue.push([y, x + 1]);
            }
            visited[y][x] = true;
        }
        if (isFoundEntrance === true) {
            break;
        }
        answer++;
    }
    return (isFoundLever === false || isFoundEntrance === false) ? -1 : answer;
}

console.log(solution(["SOOOL","XXXXO","OOOOO","OXXXX","OOOOE"])); //	16
console.log(solution(["LOOXS","OOOOX","OOOOO","OOOOO","EOOOO"])); //	-1