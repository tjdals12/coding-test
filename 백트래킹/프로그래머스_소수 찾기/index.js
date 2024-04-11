function solution(numbers) {
    const arr = numbers.split("");
    const set = new Set();
    const visited = new Array(arr.length).fill(false);
    const permutation = (list, str) => {
        if (str !== "") {
            set.add(Number(str));
        }
        for (let i = 0; i < arr.length; i++) {
            if (visited[i] === false) {
                visited[i] = true;
                permutation(list, str + list[i]);
                visited[i] = false;
            }
        }
    }
    permutation(arr, "");

    const isPrime = (n) => {
        if (1 >= n) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    }

    const answer = Array.from(set).filter(isPrime).length;
    return answer;
}