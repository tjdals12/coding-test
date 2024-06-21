function solution(nums) {
    const dp = new Array(nums.length).fill(0);
    dp[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(nums[i], nums[i] + dp[i - 1]);
    }
    return Math.max(...dp);
}

console.log(solution([-3, 1, 3, -1, 2, -4, 2]));