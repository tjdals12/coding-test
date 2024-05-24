const EMPTY = 0;
const OIL = 1;

class Node {
    value = null;
    next = null;
    constructor(value) {
        this.value = value;
    }
}

class Queue {
    head = null;
    tail = null;
    count = 0;
    size() {
        return this.count;
    }
    enqueue(value) {
        const current = new Node(value);
        if (this.head === null) {
            this.head = current;
            this.tail = current;
        } else {
            this.tail.next = current;
            this.tail = current;
        }
        this.count++;
    }
    dequeue() {
        if (this.head === null) return null;
        const head = this.head;
        this.head = head.next;
        this.count--;
        return head.value;
    }
}

function solution(land) {
    const maxRow = land.length;
    const maxCol = land[0].length;

    let groupIndex = 0;
    const visited = new Array(maxRow).fill().map(() => new Array(maxCol).fill(false));
    const oils = {};

    const queue = [];
    for (let i = 0; i < maxRow; i++) {
        for (let j = 0; j < maxCol; j++) {
            if (land[i][j] === OIL) {
                let oil = 0;
                queue.push([i, j]);
                while (queue.length > 0) {
                    const [row, col] = queue.shift();
                    if (visited[row][col] !== false) continue;
                    // top
                    if ((row - 1) >= 0 && land[row - 1][col] === OIL && visited[row - 1][col] === false) {
                        queue.push([row - 1, col]);
                    }
                    // bottom
                    if (maxRow > (row + 1) && land[row + 1][col] === OIL && visited[row + 1][col] === false) {
                        queue.push([row + 1, col]);
                    }
                    // left
                    if ((col - 1) >= 0 && land[row][col - 1] === OIL && visited[row][col - 1] === false) {
                        queue.push([row, col - 1]);
                    }
                    // right
                    if (maxCol > (col + 1) && land[row][col + 1] === OIL && visited[row][col + 1] === false) {
                        queue.push([row, col + 1]);
                    }
                    oil++;
                    visited[row][col] = groupIndex;
                }
                if (oil > 0) {
                    oils[groupIndex++] = oil;
                }
            }
        }
    }

    let answer = 0;
    for (let col = 0; col < maxCol; col++) {
        const groupIndice = {};
        for (let row = 0; row < maxRow; row++) {
            if (visited[row][col] !== false) {
                groupIndice[visited[row][col]] = oils[visited[row][col]];
            }
        }
        let oil = Object.values(groupIndice).reduce((acc, cur) => acc + cur, 0);
        answer = Math.max(answer, oil);
    }
    return answer;
}

console.log(solution(
    [
        [0, 0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0],
        [1, 1, 0, 0, 0, 1, 1, 0],
        [1, 1, 1, 0, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0, 1, 1]
    ]
)); // 9

console.log(solution(
    [
        [1, 0, 1, 0, 1, 1],
        [1, 0, 1, 0, 0, 0],
        [1, 0, 1, 0, 0, 1],
        [1, 0, 0, 1, 0, 0],
        [1, 0, 0, 1, 0, 1],
        [1, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1]
    ]
)); // 16

const arr = [];
for (let i = 0; i < 500; i++) {
    arr.push([]);
    for (let j = 0; j < 500; j++) {
        arr[i].push(1);
    }
}
console.log(solution(arr));