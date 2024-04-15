function solution(numbers, target) {
    let answer = 0;
    const total = numbers.reduce((acc, cur) => acc + cur, 0);

    const traverse = (index, current) => {
        if (target === current) {
            answer++;
            return;
        }
        if (target > current) {
            return;
        }
        for (let i = index; i < numbers.length; i++) {
            traverse(i + 1, current - (numbers[i] * 2));
        }
    }

    traverse(0, total);

    return answer;
}