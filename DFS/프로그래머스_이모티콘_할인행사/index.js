function solution(users, emoticons) {
    const emoticonSales = [40, 30, 20, 10];
    const visited = new Array(emoticonSales.length).fill(0);
    let maxCount = 0;
    let maxAmount = 0;
    const traverse = (result) => {
        if (result.length === emoticons.length) {
            let count = 0;
            let amount = 0;
            users.forEach((user) => {
                const [sale, budget] = user;
                const price = result.reduce((acc, cur, index) => {
                    if (cur >= sale) {
                        const emoticonPrice = emoticons[index];
                        acc += emoticonPrice - Math.floor((emoticonPrice * (cur / 100)));
                    }
                    return acc;
                }, 0);
                if (price >= budget) {
                    count++;
                } else {
                    amount += price;
                }
            });
            if (count > maxCount) {
                maxCount = count;
                maxAmount = amount;
            } else if (count === maxCount) {
                if (amount > maxAmount) {
                    maxAmount = amount;
                }
            }
            return;
        }
        for (let i = 0; i < emoticonSales.length; i++) {
            if (emoticons.length > visited[i]) {
                visited[i]++;
                result.push(emoticonSales[i]);
                traverse(result);
                result.pop();
                visited[i]--;
            }
        }
    }
    traverse([]);
    return [maxCount, maxAmount];
}

console.log(solution([[40, 10000], [25, 10000]], [7000, 9000])); //	[1, 5400]
console.log(solution([[40, 2900], [23, 10000], [11, 5200], [5, 5900], [40, 3100], [27, 9200], [32, 6900]], [1300, 1500, 1600, 4900])); // [4, 13860]