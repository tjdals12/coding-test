function solution(relation) {
    const rowSize = relation.length;
    const columnSize = relation[0].length;
    const indice = new Array(columnSize).fill(0).map((v, i) => v + i);
    const uniques = [];

    const backtrack = (index, result) => {
        if (result.length > 0) {
            const keys = relation.map((tuple) => tuple.filter((v, i) => result.includes(i)).join("_"));
            const set = new Set(keys);
            if (set.size === rowSize) {
                uniques.push(result);
                return;
            }
        }
        for (let i = index; i < columnSize; i++) {
            backtrack(i + 1, [...result, indice[i]]);
        }
    }
    backtrack(0, []);
    for (let i = 0; i < uniques.length; i++) {
        const arr1 = uniques[i];
        for (let j = 0; j < uniques.length; j++) {
            if (i === j) continue;
            const arr2 = uniques[j];

            const lessArrIndex = arr1.length > arr2.length ? j : i;
            const lessArr = arr1.length > arr2.length ? arr2 : arr1;
            const greaterArrIndex = arr1.length > arr2.length ? i : j;
            const greaterArr = arr1.length > arr2.length ? arr1 : arr2;
            if (lessArr.every((v) => greaterArr.includes(v))) {
                uniques[greaterArrIndex] = uniques[lessArrIndex];
            }
        }
    }
    const candiateKeys = new Set(uniques);
    return candiateKeys.size;
}

console.log(solution(
    [
        ["100","ryan","music","2"],
        ["200","apeach","math","2"],
        ["300","tube","computer","3"],
        ["400","con","computer","4"],
        ["500","muzi","music","3"],
        ["600","apeach","music","2"]
    ]
)); // 2

console.log(solution(
    [
        ["a","b","c"],
        ["1","b","c"],
        ["a","b","4"],
        ["a","5","c"]
    ]
)); // 1

console.log(solution(
    [
        ["a","1","4"],
        ["2","1","5"],
        ["a","2","4"],
    ]
)); // 2

console.log(solution(
    [
        ["100", "ryan",     "2", "music"],
        ["200", "apeach",   "2", "math"],
        ["300", "tube",     "3", "computer"],
        ["400", "con",      "4", "computer"],
        ["500", "muzi",     "3", "music"],
        ["600", "apeach",   "2", "music"]
    ]
)); // 2

console.log(solution([
    ["a","1","aaa","c","ng"],
    ["a","1","bbb","e","g"],
    ["c","1","aaa","d","ng"],
    ["d","2","bbb","d","ng"]
])); // 5