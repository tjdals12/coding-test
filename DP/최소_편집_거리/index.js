function solution(str1, str2) {
    const row = str1.length;
    const col = str2.length;
    const dp = new Array(row + 1).fill().map(() => new Array(col + 1).fill(0));
    for (let i = 1; i <= row; i++) {
        dp[i][0] = i;
    }
    for (let j = 1; j <= col; j++) {
        dp[0][j] = j;
    }
    for (let i = 1; i <= row; i++) {
        for (let j = 1; j <= col; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(
                    dp[i - 1][j] + 1,
                    dp[i][j - 1] + 1,
                    dp[i - 1][j - 1] + 1
                );
            }
        }
    }
    return dp[row][col];
}

console.log(solution("intention", "execution")); // 5