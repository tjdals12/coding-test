function dfs(graph, startNode, visited) {
    const stack = [[startNode, -1]];
    while (stack.length > 0) {
        const [currentNode, parentNode] = stack.pop();
        if (visited[currentNode] === true) {
            continue;
        }
        stack.push([currentNode, parentNode]);
        visited[currentNode] = true;
        console.log(currentNode);
        for (let nextNode of graph[currentNode]) {
            if (visited[nextNode] === false) {
                stack.push([nextNode, currentNode]);
            }
        }
    }
}

const graph = [[1, 2, 4], [0, 5], [0, 5], [4], [0, 3], [1, 2]];
const visited = new Array(graph.length).fill(false);
dfs(graph, 0, visited);