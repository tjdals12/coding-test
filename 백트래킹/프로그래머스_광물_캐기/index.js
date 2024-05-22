function solution(picks, minerals) {
    const table = [
        [1, 1, 1],
        [5, 1, 1],
        [25, 5, 1],
    ]
    let count = picks.reduce((acc, cur) => acc + cur, 0);
    const costs = [];
    while (minerals.length > 0) {
        const cost = minerals.splice(0, 5).reduce((acc, cur) => {
            if (cur === "diamond") {
                acc[0] += table[0][0];
                acc[1] += table[1][0];
                acc[2] += table[2][0];
            } else if (cur === "iron") {
                acc[0] += table[0][1];
                acc[1] += table[1][1];
                acc[2] += table[2][1];
            } else if (cur === "stone") {
                acc[0] += table[0][2];
                acc[1] += table[1][2];
                acc[2] += table[2][2];
            }
            return acc;
        }, [0, 0, 0]);
        costs.push(cost);
        if (costs.length === count) {
            break;
        }
    }
    const result = [];
    const traverse = (current, list) => {
        if (count === 0) {
            result.push(current);
            return;
        }
        for (let i = 0; i < list.length; i++) {
            if (picks[i] > 0) {
                picks[i]--;
                count--;
                current += list[i];
                if (costs.length === 0) {
                    result.push(current);
                } else {
                    const nextList = costs.shift();
                    traverse(current, nextList);
                    costs.unshift(nextList);
                }
                current -= list[i];
                count++;
                picks[i]++;
            }
        }
    }
    traverse(0, costs.shift());
    return Math.min(...result);
}

console.log(solution([1, 1, 0], ["stone", "stone", "iron", "stone", "diamond", "diamond", "diamond", "diamond", "diamond", "diamond"])); // 14
console.log(solution([1, 3, 2], ["diamond", "diamond", "diamond", "iron", "iron", "diamond", "iron", "stone"])); // 12
console.log(solution([0, 1, 1], ["diamond", "diamond", "diamond", "diamond", "diamond", "iron", "iron", "iron", "iron", "iron", "diamond"])); // 50
console.log(solution([2,1,0], ["diamond","diamond","diamond","diamond","diamond","iron","iron","iron","iron","iron","stone","stone","stone","stone","stone"])); // 15
console.log(solution([0, 1, 0], ["stone","stone","stone","stone","stone"])); // 5
console.log(solution([0,1,1],["iron", "iron", "stone", "stone", "stone", "iron","iron", "stone"])); // 16
console.log(solution([1,1,1],["diamond"])); // 16
console.log(solution([1,0,0],["diamond","diamond","diamond","diamond","diamond","diamond"])); // 16
console.log(solution([0,1,0], ["diamond", "iron", "iron", "iron", "iron", "diamond", "diamond", "iron", "iron", "iron"])); // 9
console.log(solution([0,1,0], ["diamond", "iron", "iron", "iron", "iron", "diamond", "diamond", "iron", "iron"])); // 9