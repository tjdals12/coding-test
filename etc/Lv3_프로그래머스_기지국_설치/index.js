function solution(n, stations, w) {
    const groups = [];
    if ((stations[0] - w) > 1) {
        groups.push((stations[0] - w) - 1);
    }
    for (let i = 1; i < stations.length; i++) {
        const count = ((stations[i] - w) - (stations[i - 1] + w)) - 1;
        if (count > 0) {
            groups.push(count);
        }
    }
    if (n > (stations[stations.length - 1] + w)) {
        groups.push(n - (stations[stations.length - 1] + w));
    }
    const answer = groups.reduce((acc, cur) => acc + Math.ceil(cur / ((w * 2) + 1)), 0);
    return answer;
}

console.log(solution(11, [4, 11], 1)); // 3
console.log(solution(16, [9], 2)); // 3