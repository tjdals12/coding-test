function check(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];
        if (current === "(") {
            count++;
        } else if (current === ")") {
            count--;
        }
        if (0 > count) {
            return false;
        }
    }
    return count === 0;
}

function seperate(u, v) {
    if (v.length === 0) return v;
    let leftCount = 0;
    let rightCount = 0;
    while (true) {
        const current = v.shift();
        if (current === "(") {
            leftCount++;
        } else if (current === ")") {
            rightCount++;
        }
        u.push(current);
        if (leftCount === rightCount) {
            break;
        }
    }
    if (check(u) === true) {
        const result = seperate([], v);
        u.push(...result);
        return u;
    } else {
        const result = seperate([], v);
        result.unshift("(");
        result.push(")");
        u.shift();
        u.pop();
        u.forEach((v, i) => {
            if (v === "(") {
                u[i] = ")";
            } else {
                u[i] = "(";
            }
        });
        result.push(...u);
        return result;
    }
}

function solution(p) {
    const u = [];
    const v = p.split("");
    const result = seperate(u, v);
    return result.join("");
}

console.log(solution("(()())()")); // "(()())()"
console.log(solution(")(")); // "()"
console.log(solution("()))((()")); // "()(())()"