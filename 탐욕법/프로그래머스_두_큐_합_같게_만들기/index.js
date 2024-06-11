function solution(queue1, queue2) {
    const getSum = (arr) => {
        return arr.reduce((acc, cur) => acc + cur, 0);
    }
    let q1Sum = getSum(queue1);
    let q1Index = 0;
    let q2Sum = getSum(queue2);
    let q2Index = 0;
    const maxCount = (queue1.length + queue2.length) * 2;
    let answer = 0;
    while (true)  {
        if (q1Sum === q2Sum) {
            return answer;
        };
        if (answer > maxCount) {
            return -1;
        }
        if (q1Index >= queue1.length || q2Index >= queue2.length) {
            return -1;
        }
        if (q1Sum > q2Sum) {
            const cur = queue1[q1Index++];
            q1Sum -= cur;
            q2Sum += cur;
            queue2.push(cur);
        } else if (q2Sum > q1Sum) {
            const cur = queue2[q2Index++];
            q1Sum += cur;
            q2Sum -= cur;
            queue1.push(cur);
        }
        answer++;
    }
}

console.log(solution([3, 2, 7, 2], [4, 6, 5, 1])); //	2
console.log(solution([1, 2, 1, 2], [1, 10, 1, 2])); //	7
console.log(solution([1, 1], [1, 5])); //	-1