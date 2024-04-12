function solution(people, limit) {
    people.sort((a, b) => b - a);
    let boatCount = 0;
    let leftIndex = 0;
    let rightIndex = people.length - 1;
    while (true) {
        if (leftIndex > rightIndex) {
            break;
        } else if (leftIndex === rightIndex) {
            boatCount++;
            break;
        }
        if (people[leftIndex] === limit) {
            boatCount++;
            leftIndex++;
        } else if (people[rightIndex] === limit) {
            boatCount++;
            rightIndex--;
        } else if ((people[leftIndex] + people[rightIndex]) > limit) {
            boatCount++;
            leftIndex++;
        } else if (limit >= (people[leftIndex] + people[rightIndex])) {
            boatCount++;
            leftIndex++;
            rightIndex--;
        }
    }
    return boatCount;
}

console.log(solution([70, 50, 80, 50], 100)); // 3
console.log(solution([70, 80, 50], 100)); // 3