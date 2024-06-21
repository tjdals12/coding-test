function solution(envelopes) {
    const heights = envelopes
        .sort((a, b) => {
            if (a[0] === b[0]) {
                return b[1] - a[1];
            } else {
                return a[0] - b[0];
            }
        })
        .map((v) => v[1]);
    const dp = new Array(heights.length).fill(1);
    for (let i = 0; i < heights.length; i++) {
        for (let j = 0; j < i; j++) {
            if (heights[i] > heights[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    return Math.max(...dp);
}

console.log(solution(
    [
        [5, 4],
        [6, 4],
        [6, 7],
        [2, 3],
    ]
));