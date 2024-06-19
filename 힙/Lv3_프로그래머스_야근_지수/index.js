class MaxHeap {
    heap = [];
    size() {
        return this.heap.length;
    }
    getParentIndex(currentIndex) {
        return Math.floor((currentIndex - 1) / 2);
    }
    getLeftChildIndex(currentIndex) {
        return (currentIndex * 2) + 1;
    }
    getRightChildIndex(currentIndex) {
        return (currentIndex * 2) + 2;
    }
    push(value) {
        this.heap.push(value);
        let currentIndex = this.heap.length - 1;
        let parentIndex = this.getParentIndex(currentIndex);
        while (true) {
            if (parentIndex === -1) break;
            if (this.heap[parentIndex] >= this.heap[currentIndex]) break;
            [this.heap[parentIndex], this.heap[currentIndex]] = [this.heap[currentIndex], this.heap[parentIndex]];
            currentIndex = parentIndex;
            parentIndex = this.getParentIndex(currentIndex);
        }
    }
    pop() {
        if (this.size() === 0) {
            return null;
        }
        if (this.size() === 1) {
            return this.heap.pop();
        }
        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        let currentIndex = 0;
        let leftChildIndex = this.getLeftChildIndex(currentIndex);
        let rightChildIndex = this.getRightChildIndex(currentIndex);
        while (true) {
            let biggestIndex = currentIndex;
            if (this.size() > biggestIndex && this.heap[leftChildIndex] > this.heap[biggestIndex]) {
                biggestIndex = leftChildIndex;
            }
            if (this.size() > biggestIndex && this.heap[rightChildIndex] > this.heap[biggestIndex]) {
                biggestIndex = rightChildIndex;
            }
            if (biggestIndex === currentIndex) break;
            [this.heap[biggestIndex], this.heap[currentIndex]] = [this.heap[currentIndex], this.heap[biggestIndex]];
            currentIndex = biggestIndex;
            leftChildIndex = this.getLeftChildIndex(currentIndex);
            rightChildIndex = this.getRightChildIndex(currentIndex);
        }
        return root;
    }
}

function solution(n, works) {
    const maxHeap = new MaxHeap();
    works.forEach((v) => {
        maxHeap.push(v);
    });
    for (let i = 0; i < n; i++) {
        const current = maxHeap.pop();
        if (current === 0) break;
        maxHeap.push(current - 1);
    }
    return maxHeap.heap.reduce((acc, cur) => acc + (cur * cur), 0);
}

console.log(solution(4, [4, 3, 3])); // 12
console.log(solution(1, [2, 1, 2])); // 6
console.log(solution(3, [1,1])); // 0