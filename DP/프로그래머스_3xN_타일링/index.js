function solution(n) {
    const dp = {
        0: 0,
        2: 3,
        4: 11
    }
    const mod = 1_000_000_007;
    for (let i = 6; i <= n; i += 2) {
        dp[i] = dp[i - 2] * dp[2];
        for (let j = i - 4; j > 0; j -= 2) {
            dp[i] += dp[j] * 2;
        }
        dp[i] += 2;
        dp[i] %= mod;
    }
    return dp[n];
}