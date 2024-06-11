function solution(elements) {
    const set = new Set();
    const maxLength = elements.length;
    elements.push(...elements);
    for (let length = 1; length <= maxLength; length++) {
        for (let startIndex = 0; startIndex <= elements.length - length; startIndex++) {
            let num = 0;
            for (let currentIndex = startIndex; currentIndex < startIndex + length; currentIndex++) {
                num += elements[currentIndex];
            }
            set.add(num);
        }
    }
    return set.size;
}

console.log(solution([7,9,1,1,4])); // 18