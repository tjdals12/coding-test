function solution(weights) {
    let answer = 0;
    const counts = weights.reduce((acc, cur) => {
        acc[cur] = acc[cur] === undefined ? 1 : acc[cur] + 1;
        return acc;
    }, {});
    weights.forEach((weight) => {
        let base;
        if (weight % 2 === 0) {
            base = (weight / 2) * 3;
            if (1000 >= base) {
                answer += counts[base] ?? 0;
            }
        }
        if (weight % 3 === 0) {
            base = (weight / 3) * 4;
            if (1000 >= base) {
                answer += counts[base] ?? 0;
            }
        }
        base = weight * 2;
        if (1000 >= base) {
            answer += counts[base] ?? 0;
        }
    });
    Object.values(counts).forEach((count) => {
        if (count >= 2) {
            answer += (count * (count - 1)) / 2;
        }
    });
    return answer;
}

console.log(solution([100,180,360,100,270])); // 4