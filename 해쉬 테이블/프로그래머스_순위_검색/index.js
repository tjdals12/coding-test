function solution(info, query) {
    const table = {};
    const traverse = (arr, index, score) => {
        const key = arr.join("|");
        if (table[key] === undefined) {
            table[key] = [Number(score)];
        } else {
            table[key].push(Number(score));
        }
        for (let i = index; i < arr.length; i++) {
            const temp = arr[i];
            arr[i] = "-";
            traverse(arr, i + 1, score);
            arr[i] = temp;
        }
    }
    const lowerBound = (arr, target) => {
        let left = 0;
        let right = arr.length;
        let mid;
        while (left < right) {
            mid = Math.floor((left + right) / 2);
            if (target > arr[mid]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return right;
    }
    info.forEach((v) => {
        const [language, position, career, soulFood, score] = v.split(" ");
        traverse([language, position, career, soulFood], 0, score);
    });
    Object.values(table).forEach((v) => v.sort((a, b) => a - b));
    const answer = query.map((q) => {
        const [language, position, career, soulFood, score] = q.split(" ").filter((v) => v !== "and");
        const key = `${language}|${position}|${career}|${soulFood}`;
        const value = table[key] || [];
        const index = lowerBound(value, score);
        return value.length - index;
    });
    return answer;
}

const info = ["java backend junior pizza 150","python frontend senior chicken 210","python frontend senior chicken 150","cpp backend senior pizza 260","java backend junior chicken 80","python backend senior chicken 50"];
const query = ["java and backend and junior and pizza 100","python and frontend and senior and chicken 200","cpp and - and senior and pizza 250","- and backend and senior and - 150","- and - and - and chicken 100","- and - and - and - 150"];
console.log(solution(info, query));