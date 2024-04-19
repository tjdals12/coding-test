function solution(numbers) {
    const answer = [];
    numbers.forEach((number) => {
        if (number % 2 === 0) {
            answer.push(number + 1);
        } else {
            const bin = number.toString(2).split("");
            if (bin[0] === "1") {
                bin.unshift("0");
            }
            const lastIndex = bin.lastIndexOf("0");
            bin[lastIndex] = "1";
            bin[lastIndex + 1] = "0";
            answer.push(parseInt(bin.join(""), 2));
        }
    });
    return answer;
}

console.log(solution([2,7])); //[3, 11];