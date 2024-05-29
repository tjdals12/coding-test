const Flag = {
    WAY: ".",
    START: "R",
    WALL: "D",
    END: "G",
    VISITED: "X"
}

function solution(board) {
    board = board.map((v) => v.split(""));
    let startPosition;
    let endPosition;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === Flag.START) {
                startPosition = [i, j];
            } 
            if (board[i][j] === Flag.END) {
                endPosition = [i, j];
            }
        }
        if (startPosition !== undefined && endPosition !== undefined) {
            break;
        }
    }
    const queue = [];
    queue.push(startPosition);
    let answer = 1;
    while (queue.length > 0) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const [y, x] = queue.shift();
            // left
            if ((x - 1) >= 0 && board[y][x - 1] !== Flag.WALL) {
                let nextX = x;
                while (nextX >= 0) {
                    if (nextX === 0) {
                        if (endPosition[0] === y && endPosition[1] === nextX) {
                            return answer;
                        }
                        if (board[y][nextX] !== Flag.VISITED) {
                            board[y][nextX] = Flag.VISITED;
                            queue.push([y, nextX]);
                        }
                        break;
                    } else if (board[y][nextX - 1] === Flag.WALL) {
                        if (endPosition[0] === y && endPosition[1] === nextX) {
                            return answer;
                        }
                        if (board[y][nextX] !== Flag.VISITED) {
                            board[y][nextX] = Flag.VISITED;
                            queue.push([y, nextX]);
                        }
                        break;
                    }
                    board[y][nextX] = Flag.VISITED;
                    nextX--;
                }
            }
            // down
            if (board.length > (y + 1) && board[y + 1][x] !== Flag.WALL) {
                let nextY = y;
                while ((board.length - 1) >= nextY) {
                    if (nextY === (board.length - 1)) {
                        if (endPosition[0] === nextY && endPosition[1] === x) {
                            return answer;
                        }
                        if (board[nextY][x] !== Flag.VISITED) {
                            board[nextY][x] = Flag.VISITED;
                            queue.push([nextY, x]);
                        }
                        break;
                    } else if (board[nextY + 1][x] === Flag.WALL) {
                        if (endPosition[0] === nextY && endPosition[1] === x) {
                            return answer;
                        }
                        if (board[nextY][x] !== Flag.VISITED) {
                            board[nextY][x] = Flag.VISITED;
                            queue.push([nextY, x]);
                        }
                        break;
                    }
                    board[nextY][x] = Flag.VISITED;
                    nextY++;
                }
            }
            // up
            if ((y - 1) >= 0 && board[y - 1][x] !== Flag.WALL) {
                let nextY = y;
                while (nextY >= 0) {
                    if (nextY === 0) {
                        if (endPosition[0] === nextY && endPosition[1] === x) {
                            return answer;
                        }
                        if (board[nextY][x] !== Flag.VISITED) {
                            board[nextY][x] = Flag.VISITED;
                            queue.push([nextY, x]);
                        }
                        break;
                    } else if (board[nextY - 1][x] === Flag.WALL) {
                        if (endPosition[0] === nextY && endPosition[1] === x) {
                            return answer;
                        }
                        if (board[nextY][x] !== Flag.VISITED) {
                            board[nextY][x] = Flag.VISITED;
                            queue.push([nextY, x]);
                        }
                        break;
                    }
                    board[nextY][x] = Flag.VISITED;
                    nextY--;
                }
            }
            // right
            if (board[y].length > (x + 1) && board[y][x + 1] !== Flag.WALL) {
                let nextX = x;
                while ((board[y].length - 1) >= nextX) {
                    if (nextX === (board[y].length - 1)) {
                        if (endPosition[0] === y && endPosition[1] === nextX) {
                            return answer;
                        }
                        if (board[y][nextX] !== Flag.VISITED) {
                            board[y][nextX] = Flag.VISITED;
                            queue.push([y, nextX]);
                        }
                        break;
                    } else if (board[y][nextX + 1] === Flag.WALL) {
                        if (endPosition[0] === y && endPosition[1] === nextX) {
                            return answer;
                        }
                        if (board[y][nextX] !== Flag.VISITED) {
                            board[y][nextX] = Flag.VISITED;
                            queue.push([y, nextX]);
                        }
                        break;
                    }
                    board[y][nextX] = Flag.VISITED;
                    nextX++;
                }
            }
        }
        answer++;
    }
    return -1;
}

console.log(solution(["...D..R", ".D.G...", "....D.D", "D....D.", "..D...."])); // 7
console.log(solution([".D.R", "....", ".G..", "...D"])); // -1