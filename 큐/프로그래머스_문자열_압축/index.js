function solution(s) {
    let minLength = s.length;
    for (let i = 1; i <= s.length; i++) {
        const queue = [];
        for (let j = 0; j < s.length; j += i) {
            queue.push(s.substr(j, i));
        }
        let compressed = "";
        while (queue.length > 0) {
            const str1 = queue.shift();
            let count = 1;
            while (queue.length > 0) {
                const str2 = queue[0];
                if (str1 === str2) {
                    count++;
                    queue.shift();
                } else {
                    break;
                }
            }
            if (count === 1) {
                compressed += str1;
            } else {
                compressed += `${count}${str1}`;
            }
        }
        minLength = Math.min(minLength, compressed.length);
    }
    return minLength;
}

console.log(solution("aabbaccc")); // 7
console.log(solution("ababcdcdababcdcd")); // 9
console.log(solution("abcabcdede")); // 8
console.log(solution("abcabcabcabcdededededede")); // 14
console.log(solution("xababcdcdababcdcd")); // 17