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
    enqueue(value)  {
        const current = new Node(value);
        if (this.head == null) {
            this.head = current;
            this.tail = current;
        } else {
            this.tail.next = current;
            this.tail = current;
        }
        this.count++;
    }
    dequeue() {
        if (this.head == null) {
            return null;
        } else {
            this.count--;
            const head = this.head;
            this.head = head.next;
            return head.value;
        }
    }
    peek() {
        return this.head.value;
    }
}

function BFS(graph, currentNode, visited) {
    const queue = new Queue();
    queue.enqueue(currentNode);
    visited[currentNode] = true;

    while (queue.size() > 0) {
        const current = queue.dequeue();
        for (const next of graph[current]) {
            if (visited[next] == false) {
                visited[next] = true;
                queue.enqueue(next);
            }
        }
    }
}

const graph = [[1, 2, 4], [0, 5], [0, 5], [4], [0, 3], [1, 2]];
const visited = new Array(graph.length).fill(false);
BFS(graph, 0, visited);