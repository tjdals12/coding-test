const Direction = { 
    Left: 0,
    Right: 1
}

function solution(name) {
    let minChangeCount = 0;
    const alphabet = [];
    for (let i = 'A'.charCodeAt(); i <= 'Z'.charCodeAt(); i++) {
        alphabet.push(String.fromCharCode(i));
    }
    for (let i = 0; i < name.length; i++) {
        if (name[i] === 'A') continue;
        const upCount = alphabet.findIndex((v) => v === name[i]);
        const downCount = alphabet.length - upCount;
        minChangeCount += Math.min(upCount, downCount);
    }

    let minMoveCount = Infinity;
    const arr = name.split("").map((v) => v === 'A');
    arr[0] = true;

    const findLastIndex = (arr, value) => {
        for (let i = arr.length - 1; i >= 0; i--) {
            if (arr[i] === value) return i;
        }
        return -1;
    }

    const backtrack = (direction, prevIndex, currentIndex, moveCount = 0) => {
        let currentMoveCount = 0;
        if (prevIndex !== currentIndex) {
            if (direction === Direction.Left) {
                if (prevIndex > currentIndex) {
                    currentMoveCount = prevIndex - currentIndex;
                } else {
                    currentMoveCount = (arr.length - currentIndex) + prevIndex;
                }
            } else if (direction === Direction.Right) {
                if (prevIndex > currentIndex) {
                    currentMoveCount = (arr.length - prevIndex) + currentIndex;
                } else {
                    currentMoveCount = currentIndex - prevIndex;
                }
            }
        }
        moveCount += currentMoveCount;
        if (arr.every((v) => v === true)) {
            minMoveCount = Math.min(minMoveCount, moveCount);
            return;
        }

        const rightIndex = arr.findIndex((v) => v === false);
        arr[rightIndex] = true;
        backtrack(Direction.Right, currentIndex, rightIndex, moveCount);
        arr[rightIndex] = false;

        const leftIndex = findLastIndex(arr, false);
        arr[leftIndex] = true;
        backtrack(Direction.Left, currentIndex, leftIndex, moveCount);
        arr[leftIndex] = false;
    }

    backtrack(Direction.Right, 0, 0);
    backtrack(Direction.left, 0, 0);

    return minChangeCount + minMoveCount;
}

console.log(solution("JEROEN")); // 56
console.log(solution("JEROEN")); // 56
console.log(solution("JAN")); // 23
console.log(solution("JAZ")); // 11
console.log(solution("AAA")); // 0
console.log(solution("ABC")); // 5
console.log(solution("ABAAB")); // 5
console.log(solution("BAABBAAA")) // 7
console.log(solution("BBBBAAAABA")) // 12
console.log(solution("AAB")) // 2
console.log(solution("AAA")) // 0 
console.log(solution("BAABA")); // 4