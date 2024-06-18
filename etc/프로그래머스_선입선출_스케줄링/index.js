function solution(n, cores) {
    let minTime = 0;
    let maxTime = 10_000 * cores.length;
    let time = 0;
    let workCount = 0;
    while (minTime < maxTime) {
        const midTime = Math.floor((minTime + maxTime) / 2);
        const currentWorkCount = cores.reduce((acc, cur) => {
            acc += Math.floor(midTime / cur);
            return acc;
        }, cores.length);
        if (currentWorkCount >= n) {
            maxTime = midTime;
        } else {
            minTime = midTime + 1;
            time = minTime;
            workCount = currentWorkCount;
        }
    }
    let remainWorkCount = n - workCount;
    for (let i = 0; i < cores.length; i++) {
        if (time % cores[i] === 0) {
            remainWorkCount--;
            if (remainWorkCount === 0) {
                return i + 1;
            }
        }
    }
    return -1;
}

console.log(solution(6, [1,2,3])); // 2