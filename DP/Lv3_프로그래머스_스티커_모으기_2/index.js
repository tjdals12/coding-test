function solution(sticker) {
    if (3 >= sticker.length) return Math.max(...sticker);
    const dp1 = [sticker[0], sticker[0]];
    for (let i = 2; i < sticker.length - 1; i++) {
        dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + sticker[i]);
    }
    const dp2 = [0, sticker[1]];
    for (let i = 2; i < sticker.length; i++) {
        dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + sticker[i]);
    }
    return Math.max(dp1.pop(), dp2.pop());
}