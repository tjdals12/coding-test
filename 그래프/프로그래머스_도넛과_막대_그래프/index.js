function solution(edges) {
    const graphInfo = {};
    edges.forEach((edge) => {
        const [start, end] = edge;
        if (graphInfo[start] === undefined) {
            graphInfo[start] = { send: 1, receive: 0 };
        } else {
            graphInfo[start].send++;
        }
        if (graphInfo[end] === undefined) {
            graphInfo[end] = { send: 0, receive: 1 };
        } else {
            graphInfo[end].receive++;
        }
    });
    let startPoint;
    let graphCount;
    let stickGraphCount = 0;
    let eightGraphCount = 0;
    let donutGraphCount = 0;
    for (let point in graphInfo) {
        const { send, receive } = graphInfo[point];
        if (send >= 2 && receive === 0) {
            startPoint = Number(point);
            graphCount = send;
        }
        if (send === 0) {
            stickGraphCount++;
        } else if (send >= 2 && receive >= 2) {
            eightGraphCount++;
        }
    }
    donutGraphCount = graphCount - stickGraphCount - eightGraphCount; 
    return [startPoint, donutGraphCount, stickGraphCount, eightGraphCount];
}

console.log(solution([[2, 3], [4, 3], [1, 1], [2, 1]])); // [2, 1, 1, 0]
console.log(solution([[4, 11], [1, 12], [8, 3], [12, 7], [4, 2], [7, 11], [4, 8], [9, 6], [10, 11], [6, 10], [3, 5], [11, 1], [5, 3], [11, 9], [3, 8]])); // [4, 0, 1, 2]