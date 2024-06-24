function solution(s1, s2) {
    const row = s1.length;
    const col = s2.length;
    const dp = new Array(row + 1).fill().map(() => new Array(col + 1).fill(0));
    for (let i = 1; i <= row; i++) {
        for (let j = 1; j <= col; j++) {
            if (s1[i - 1] === s2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[row][col];
}

console.log(solution("abcde", "aceb")); // 3