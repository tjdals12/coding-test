function dfs(graph, startNode, visited) {
    const stack = [];
    stack.push(startNode);
    while (stack.length > 0) {
        const currentNode = stack.pop();
        if (visited[currentNode] === false) {
            console.log(currentNode);
            visited[currentNode] = true;
            for (let nextNode of graph[currentNode]) {
                if (visited[nextNode] === false) {
                    stack.push(nextNode);
                }
            }
        }
    }
}

const graph = [[1, 2, 4], [0, 5], [0, 5], [4], [0, 3], [1, 2]];
const visited = new Array(graph.length).fill(false);
dfs(graph, 0, visited);