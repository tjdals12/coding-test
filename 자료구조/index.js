class MinHeap {
  heap = [];
  size() {
    return this.heap.length;
  }
  getParentIndex(currentIndex) {
    if (currentIndex === 0) return -1;
    return Math.floor((currentIndex - 1) / 2);
  }
  getLeftChildIndex(currentIndex) {
    return currentIndex * 2 + 1;
  }
  getRightChildIndex(currentIndex) {
    return currentIndex * 2 + 2;
  }
  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = this.getParentIndex(currentIndex);
    while (true) {
      if (parentIndex === -1) break;
      if (this.heap[currentIndex] >= this.heap[parentIndex]) break;
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
        this.heap.length > leftChildIndex &&
        this.heap[smallestChildIndex] > this.heap[leftChildIndex]
      ) {
        smallestChildIndex = leftChildIndex;
      }
      if (
        this.heap.length > rightChildIndex &&
        this.heap[smallestChildIndex] > this.heap[rightChildIndex]
      ) {
        smallestChildIndex = rightChildIndex;
      }
      if (currentIndex === smallestChildIndex) break;
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

const heap = new MinHeap();
for (let i = 10; i >= 0; i--) {
  heap.push(Math.floor(Math.random() * 100));
}
while (heap.size() > 0) {
  console.log(heap.pop());
}
