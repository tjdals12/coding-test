function solution(cap, n, deliveries, pickups) {
    let answer = 0;
    while (deliveries[deliveries.length - 1] === 0) {
        deliveries.pop();
    }
    while (pickups[pickups.length - 1] === 0) {
        pickups.pop();
    }
    while (deliveries.length > 0 || pickups.length > 0) {
        answer += Math.max(deliveries.length, pickups.length);
        let delivered = 0;
        while (deliveries.length > 0) {
            delivered += deliveries.pop();
            if (delivered > cap) {
                deliveries.push(delivered - cap);
                break;
            }
        }
        let pickedUp = 0;
        while (pickups.length > 0) {
            pickedUp += pickups.pop();
            if (pickedUp > cap) {
                pickups.push(pickedUp - cap);
                break;
            }
        }
    }
    return answer * 2;
}

console.log(solution(4, 5, [1, 0, 3, 1, 2], [0, 3, 0, 4, 0])); // 16
console.log(solution(2, 7, [1, 0, 2, 0, 1, 0, 2], [0, 2, 0, 1, 0, 2, 0])); // 30
console.log(solution(1, 5, [0, 0, 1, 0, 0], [0, 0, 0, 0, 0])); // 6
console.log(solution(2, 2, [0, 0], [0, 4])); // 8
console.log(solution(3, 2, [2, 4], [4, 2])); // 8