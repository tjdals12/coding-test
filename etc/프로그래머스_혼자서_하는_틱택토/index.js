function solution(board) {
    board = board.map((v) => v.split(""));
    const isWin = (value) => {
        // horizontal
        for (let i = 0; i < board.length; i++) {
            if (board[i].every((v) => v === value)) {
                return true;
            }
        }
        // vertical
        for (let i = 0; i < board.length; i++) {
            const arr = [];
            for (let j = 0; j < board[i].length; j++) {
                arr.push(board[j][i]);
            }
            if (arr.every((v) => v === value)) {
                return true;
            }
        }
        // left diagonal
        const leftDiagonal = [];
        for (let i = 0; i < board.length; i++) {
            leftDiagonal.push(board[i][i]);
        }
        if (leftDiagonal.every((v) => v === value)) {
            return true;
        }
        // rightDiagonal
        const rightDiagonal = [];
        for (let i = 0; i < board.length; i++) {
            rightDiagonal.push(board[i][(board.length - 1) - i]);
        }
        if (rightDiagonal.every((v) => v === value)) {
            return true;
        }
        return false;
    }
    let first = 0, second = 0;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === "O") {
                first++;
            } 
            if (board[i][j] === "X") {
                second++;
            }
        }
    }
    if ((first - second) > 1) {
        return 0;
    }
    if (second > first) {
        return 0;
    }
    if (first > second) {
        return isWin("X") ? 0 : 1;
    }
    if (first === second) {
        return isWin("O") ? 0 : 1;
    }
    return 1;
}

console.log(solution(["O.X", ".O.", "..X"])); // 1
console.log(solution(["OOO", "...", "XXX"])); // 0
console.log(solution(["...", ".X.", "..."])); // 0
console.log(solution(["...", "...", "..."])); // 1