function solution(picks, minerals) {
    const table = [
        [1, 1, 1],
        [5, 1, 1],
        [25, 5, 1],
    ];
    let count = picks.reduce((acc, cur) => acc + cur);
    const costs = [];
    while(minerals.length > 0) {
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
        // 곡괭이를 모두 사용한 경우
        if (costs.length === count) {
            break;
        }
    }
    const result = [];
    const traverse = (currentCount, currentCost, list) => {
        if (currentCount === count) {
            result.push(currentCost);
            return;
        }
        for (let i = 0; i < list.length; i++) {
            if (picks[i] > 0) {
                picks[i]--;
                currentCount++;
                currentCost += list[i];
                if (costs.length === 0) {
                    result.push(currentCost);
                } else {
                    const nextList = costs.shift();
                    traverse(currentCount, currentCost, nextList);
                    costs.unshift(nextList);
                }
                currentCost -= list[i];
                currentCount--;
                picks[i]++;
            }
        }
    }
    traverse(0, 0, costs.shift());
    return Math.min(...result);
}

console.log(solution([1, 3, 2], ["diamond", "diamond", "diamond", "iron", "iron", "diamond", "iron", "stone"])); // 12
console.log(solution([0, 1, 1], ["diamond", "diamond", "diamond", "diamond", "diamond", "iron", "iron", "iron", "iron", "iron", "diamond"])); // 50