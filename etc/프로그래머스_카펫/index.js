function solution(brown, yellow) {
    const area = brown + yellow;
    let width = 3;
    let height = 1;
    while (true) {
        const currentArea = width * height;
        if (currentArea > area) {
            width++;
            height = 1;
        } else if (currentArea === area) {
            const currentBrown = ((width + height) * 2) - 4;
            if (currentBrown === brown) {
                break;
            }
            width++;
            height = 1;
        } else {
            height++;
        }
    }
    return [Math.max(width, height), Math.min(width, height)];
}