function dfs(graph, currentNode, visited) {
    visited[currentNode] = true;
    console.log(currentNode);
    for (let nextNode of graph[currentNode]) {
        if (visited[nextNode] === false) {
            dfs(graph, nextNode, visited);
        }
    }
}

const graph = [[1, 2, 4], [0, 5], [0, 5], [4], [0, 3], [1, 2]];
const visited = new Array(graph.length).fill(false);
dfs(graph, 0, visited);