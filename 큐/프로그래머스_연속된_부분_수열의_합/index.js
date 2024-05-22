class Node {
    value = null;
    next = null;
    constructor(value) {
        this.value = value;
    }
}

class Queue {
    head = null;
    tail = null;
    count = 0;
    size() {
        return this.count;
    }
    enqueue(value) {
        const current = new Node(value);
        if (this.head === null) {
            this.head = current;
            this.tail = current;
        } else {
            this.tail.next = current;
            this.tail = current;
        }
        this.count++;
    }
    dequeue() {
        if (this.head === null) {
            return null;
        }
        const head = this.head;
        this.head = head.next;
        this.count--;
        return head.value;
    }
}

function solution(sequence, k) {
    const queue = new Queue();
    let sum = 0;
    let startIndex;
    let endIndex;
    let length;
    for (let i = 0; i < sequence.length; i++) {
        sum += sequence[i];
        if (sum === k) {
            queue.enqueue(sequence[i]);
            const curStartIndex = i - (queue.size() - 1);
            const curEndIndex = i;
            const currentLength = curEndIndex - curStartIndex;
            if (length === undefined || length > currentLength) {
                startIndex = curStartIndex;
                endIndex = curEndIndex;
                length = currentLength;
            }
        } else if (sum > k) {
            while (queue.size() > 0) {
                const prev = queue.dequeue();
                sum -= prev;
                if (sum === k) {
                    const curStartIndex = i - queue.size();
                    const curEndIndex = i;
                    const currentLength = curEndIndex - curStartIndex;
                    if (length === undefined || length > currentLength) {
                        startIndex = curStartIndex;
                        endIndex = curEndIndex;
                        length = currentLength;
                    }
                    break;
                } else if (k > sum) {
                    break;
                }
            }
            queue.enqueue(sequence[i]);
        } else {
            queue.enqueue(sequence[i]);
        }
    }
    return [startIndex, endIndex];
}

console.log(solution([1, 2, 3, 4, 5], 7)); //	[2, 3]
console.log(solution([0, 1, 1, 2, 3, 4, 5],	5)); //	[6, 6]
console.log(solution([2, 2, 2, 2, 2], 6)); //	[0, 2]

const arr = [];
for (let i = 0; i < 999_999; i++) {
    arr.push(1);
}
arr.push(999_999);
console.log(solution(arr, 999_999)); // [999_999, 999_999];