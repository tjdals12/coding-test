function gcd(num1, num2) {
    let a = Math.max(num1, num2);
    let b = Math.min(num1, num2);
    let remain;
    while ((a % b) > 0) {
        remain = a % b;
        a = b;
        b = remain;
    }
    return b;
}

function solution(w, h) {
    const whole = w * h;
    const broken = w + h - gcd(w, h);
    return whole - broken;
}