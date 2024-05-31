function solution(n) {
    const answer = [];
    const hanoi = (num, start, end, middle) => {
        if (num === 0) return;
        hanoi(num - 1, start, middle, end);
        answer.push([start, end]);
        hanoi(num - 1, middle, end, start);
    }
    hanoi(n, 1, 3, 2);
    return answer;
}

console.log(solution(2)); // [ [1,2], [1,3], [2,3] ]