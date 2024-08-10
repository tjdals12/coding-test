class MinHeap {
  heap = [];
  size() {
    return this.heap.length;
  }
  getLeftChildIndex(currentIndex) {
    return 2 * currentIndex + 1;
  }
  getRightChildIndex(currentIndex) {
    return 2 * currentIndex + 2;
  }
  getParentIndex(currentIndex) {
    if (currentIndex === 0) return -1;
    return Math.floor((currentIndex - 1) / 2);
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
    if (this.size() === 0) return null;
    if (this.size() === 1) {
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
        this.size() > leftChildIndex &&
        this.heap[smallestChildIndex] > this.heap[leftChildIndex]
      ) {
        smallestChildIndex = leftChildIndex;
      }
      if (
        this.size() > rightChildIndex &&
        this.heap[smallestChildIndex] > this.heap[rightChildIndex]
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
}

const minHeap = new MinHeap();
for (let i = 10; i >= 0; i--) {
  minHeap.push(i);
}
while (minHeap.size() > 0) {
  console.log(minHeap.pop());
}
