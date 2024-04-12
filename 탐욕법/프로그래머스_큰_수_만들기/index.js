function solution(number, k) {
    const answer = [];
    let removeCount = 0;
    for (let i = 0; i < number.length; i++) {
        if (removeCount === k) {
            answer.push(number.substr(i));
            break;
        }
        if (answer.length === 0) {
            answer.push(number[i]);
        } else {
            while (true) {
                if (number[i] > answer[answer.length - 1]) {
                    answer.pop();
                    removeCount++;
                    if (removeCount === k) {
                        answer.push(number[i]);
                        break;
                    }
                } else {
                    answer.push(number[i]);
                    break;
                }
            }
        }
    }
    return answer.join("").substr(0, number.length - k);
}

console.log(solution("1924", 2)); // 94
console.log(solution("1231234", 3)); // 3234
console.log(solution("4177252841", 4)); // 775841
console.log(solution("19", 1)); // 9
console.log(solution("20", 1)); // 2
console.log(solution("321", 1)); // 2