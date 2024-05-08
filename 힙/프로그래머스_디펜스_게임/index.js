class MaxHeap {
    heap = [];

    getParentIndex(currentIndex) {
        return Math.floor((currentIndex - 1) / 2);
    }

    getLeftChildIndex(currentIndex) {
        return (2 * currentIndex) + 1;
    }

    getRightChildIndex(currentIndex) {
        return (2 * currentIndex) + 2;
    }

    size() {
        return this.heap.length;
    }

    push(value) {
        this.heap.push(value);
        let currentIndex = this.heap.length - 1;
        let parentIndex = this.getParentIndex(currentIndex);
        while (true) {
            if (parentIndex === -1) break;
            if (this.heap[parentIndex] >= this.heap[currentIndex]) break;
            [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]];
            currentIndex = parentIndex;
            parentIndex = this.getParentIndex(currentIndex);
        }
    }

    pop() {
        if (this.heap.length === 0) {
            return null;
        }
        if (this.heap.length === 1) {
            return this.heap.pop();
        }
        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        let currentIndex = 0;
        let leftChildIndex = this.getLeftChildIndex(currentIndex);
        let rightChildIndex = this.getRightChildIndex(currentIndex);
        while (true) {
            let biggestIndex = currentIndex;
            if (this.size() > leftChildIndex && this.heap[leftChildIndex] > this.heap[biggestIndex]) {
                biggestIndex = leftChildIndex;
            }
            if (this.size() > rightChildIndex && this.heap[rightChildIndex] > this.heap[biggestIndex]) {
                biggestIndex = rightChildIndex;
            }
            if (biggestIndex === currentIndex) break;
            [this.heap[currentIndex], this.heap[biggestIndex]] = [this.heap[biggestIndex], this.heap[currentIndex]];
            currentIndex = biggestIndex;
            leftChildIndex = this.getLeftChildIndex(currentIndex);
            rightChildIndex = this.getRightChildIndex(currentIndex);
        }
        return root;
    }
}

function solution(n, k, enemy) {
    if (k >= enemy.length) return enemy.length;
    const maxHeap = new MaxHeap();
    let answer = 0;
    for (let i = 0; i < enemy.length; i++) {
        const current = enemy[i];
        maxHeap.push(current);
        if (current > n) {
            if (k === 0) break;
            const prev = maxHeap.pop();
            n += prev;
            k--;
        }
        n -= current;
        answer++;
    }
    return answer;
}