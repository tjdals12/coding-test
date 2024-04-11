function solution(n) {
    let answer = 0;
    const queens = [];
    const isThreatened = (list) => {
        const row = list.length - 1;
        for (let current = 0; current < row; current++) {
            if (list[current] === list[row] || Math.abs(list[current] - list[row]) ===  Math.abs(current - row)) {
                return true;
            }
        }
        return false;
    }
    const backtrack = (list) => {
        if (isThreatened(list)) {
            return;
        }
        if (list.length === n) {
            answer++;
            return;
        }
        for (let column = 0; column < n; column++) {
            list.push(column);
            backtrack(list);
            list.pop();
        }
    }
    backtrack(queens);
    return answer;
}

console.log(solution(8)); // 2