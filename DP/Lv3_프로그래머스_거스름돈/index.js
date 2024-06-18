function solution(n, money) {
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    money.forEach((m) => {
        for (let i = m; i <= n; i++) {
            dp[i] = dp[i] + dp[i - m];
        }
    });
    return dp[n] % 1_000_000_007;
}