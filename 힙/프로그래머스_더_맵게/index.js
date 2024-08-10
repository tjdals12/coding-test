class MinHeap {
  heap = [];

  getParentIndex(currentIndex) {
    if (currentIndex === 0) return -1;
    return Math.floor((currentIndex - 1) / 2);
  }

  getLeftChildIndex(currentIndex) {
    return 2 * currentIndex + 1;
  }

  getRightChildIndex(currentIndex) {
    return 2 * currentIndex + 2;
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
      if (this.heap[currentIndex] >= this.heap[parentIndex]) return;
      [this.heap[currentIndex], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[currentIndex],
      ];
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
      let smallestChildIndex = currentIndex;
      if (
        leftChildIndex < this.size() &&
        this.heap[leftChildIndex] < this.heap[smallestChildIndex]
      ) {
        smallestChildIndex = leftChildIndex;
      }
      if (
        rightChildIndex < this.size() &&
        this.heap[rightChildIndex] < this.heap[smallestChildIndex]
      ) {
        smallestChildIndex = rightChildIndex;
      }
      if (smallestChildIndex === currentIndex) break;
      [this.heap[currentIndex], this.heap[smallestChildIndex]] = [
        this.heap[smallestChildIndex],
        this.heap[currentIndex],
      ];
      currentIndex = smallestChildIndex;
      leftChildIndex = this.getLeftChildIndex(currentIndex);
      rightChildIndex = this.getRightChildIndex(currentIndex);
    }
    return root;
  }

  peek() {
    return this.heap[0];
  }
}

function solution(scovilles, K) {
  const minHeap = new MinHeap();
  scovilles.forEach((v) => minHeap.push(v));
  let answer = 0;
  while (true) {
    if (minHeap.peek() >= K) break;
    if (2 > minHeap.size()) {
      return -1;
    }
    const min1 = minHeap.pop();
    const min2 = minHeap.pop();
    const scoville = min1 + min2 * 2;
    minHeap.push(scoville);
    answer++;
  }
  return answer;
}

console.log(solution([1, 2, 3, 9, 10, 12], 7)); // 2;
