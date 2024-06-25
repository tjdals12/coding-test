function solution(str) {
    const length = str.length;
    const dp = new Array(length).fill().map(() => new Array(length).fill(0));
    for (let i = length - 2; i >= 0; i--) {
        for (let j = i + 1; j < length; j++) {
            if (str[i] === str[j]) {
                dp[i][j] = dp[i + 1][j - 1];
            } else {
                dp[i][j] = Math.min(dp[i + 1][j], dp[i][j - 1]) + 1;
            }
        }
    }
    return dp[0][length - 1];
}

console.log(solution("abcea")); // 2