function solution(startX, startY, endX, endY) {
    const dx = Math.abs(endX - startX);
    const dy = Math.abs(endY - startY);
    // 선의 가로 방향이 우측인지 좌측인지
    const horizontalStep = (endX > startX) ? 1 : -1;
    // 선의 세로 방향이 위인지 아래인지
    const verticalStep = (endY > startY) ? 1 : -1;

    let pointX = startX;
    let pointY = startY;
    const points = [];

    let diff = dx - dy;
    while (true) {
        const doubleDiff = 2 * diff;
        if (doubleDiff > -dy) {
            diff -= dy;
            pointX += horizontalStep;
        }
        if (dx > doubleDiff) {
            diff += dx;
            pointY += verticalStep;
        }
        if (pointX === endX && pointY === endY) break;
        points.push({ x: pointX, y: pointY });
    }
    
    return points;
}