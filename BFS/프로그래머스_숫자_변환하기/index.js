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
        } else {
            this.count--;
            const head = this.head;
            this.head = head.next;
            return head.value;
        }
    }
}

function solution(x, y, n) {
    let answer = 0;
    const queue = new Queue();
    queue.enqueue(x);
    const set = new Set();
    while (queue.size() > 0) {
        const size = queue.size();
        for (let i = 0; i < size; i++) {
            const cur = queue.dequeue();
            if (set.has(cur)) continue;
            if (cur === y) {
                return answer;
            }
            set.add(cur);
            if (y >= (cur * 3)) {
                queue.enqueue(cur * 3);
            }
            if (y >= (cur * 2)) {
                queue.enqueue(cur * 2);
            }
            if (y >= (cur + n)) {
                queue.enqueue(cur + n);
            }
        }
        answer++;
    }
    return -1;
}

console.log(solution(10, 40, 5)); // 2
console.log(solution(10, 40, 30)); // 1
console.log(solution(2, 5, 4)); // -1
console.log(solution(38, 40, 2)); // 1
console.log(solution(1, 1_000_000, 2)); // 