class Item {
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
    const current = new Item(value);
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
    if (this.head === null) return null;
    const head = this.head;
    this.head = head.next;
    this.count--;
    return head.value;
  }
}

const queue = new Queue();
for (let i = 0; i <= 10; i++) {
  queue.enqueue(i);
}
while (queue.size() > 0) {
  console.log(queue.dequeue());
}
