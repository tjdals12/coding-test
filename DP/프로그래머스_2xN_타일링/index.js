function solution(n) {
    const dp = {};
    const mod = 1_000_000_007;
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 2;
    for (let i = 2; i <= n; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % mod;
    }
    return dp[n];
}