function solution(numbers) {
    const answer = new Array(numbers.length).fill(-1);
    for (let i = numbers.length - 2; i >= 0; i--) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[j] > numbers[i]) {
                answer[i] = numbers[j];
                break;
            } else if (answer[j] === -1) {
                break;
            } else if (answer[j] > numbers[i]) {
                answer[i] = answer[j];
                break;
            }
        }
    }
    return answer;
}

console.log(solution([2, 3, 3, 5])); // [3, 5, 5, -1]	
console.log(solution([9, 1, 5, 3, 6, 2])); // [-1, 5, 6, 6, -1, -1]	