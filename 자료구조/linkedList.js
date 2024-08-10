class Node {
  value = null;
  next = null;
  constructor(value) {
    this.value = value;
  }
}

class LinkedList {
  head = null;
  tail = null;
  count = 0;

  size() {
    return this.count;
  }
  push(value) {
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
  insert(index, value) {
    if (index > this.count) return;
    const current = new Node(value);
    let prev = this.head;
    for (let i = 0; i < index; i++) {
      prev = prev.next;
    }
    if (prev.next === null) {
      prev.next = current;
      this.tail = current;
    } else {
      current.next = prev.next;
      prev.next = current;
    }
    this.count++;
  }
  get(index) {
    let node = this.head;
    for (let i = 0; i < index; i++) {
      node = node.next;
    }
    return node.value;
  }
  remove(index) {
    let current = this.head;
    let prev = null;
    for (let i = 0; i < index; i++) {
      prev = current;
      current = current.next;
    }
    if (prev === null) {
      this.head = null;
    } else {
      prev.next = current.next;
    }
    this.count--;
  }
}

const linkedList = new LinkedList();
for (let i = 0; i <= 10; i++) {
  linkedList.push(i);
}
for (let i = 0; i < linkedList.size(); i++) {
  console.log(linkedList.get(i));
}
linkedList.remove(1);
for (let i = 0; i < linkedList.size(); i++) {
  console.log(linkedList.get(i));
}
linkedList.insert(0, 1);
for (let i = 0; i < linkedList.size(); i++) {
  console.log(linkedList.get(i));
}
