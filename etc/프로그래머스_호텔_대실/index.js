function solution(book_time) {
    book_time = book_time
    .map((v1) => {
        return v1.map((v2) => {
            const [hours, minutes] = v2.split(":");
            return Number(hours) * 60 + Number(minutes);
        });
    })
    .sort((a, b) => a[0] - b[0]);
    let answer = 1;
    for (let i = 1; i < book_time.length; i++) {
        const currentCheckInTime = book_time[i][0];
        let canUse = false;
        for (let j = 0; j < i; j++) {
            if (book_time[j] === null) continue;
            const prevCheckOutTime = book_time[j][1];
            if ((currentCheckInTime - prevCheckOutTime) >= 10) {
                book_time[j] = null;
                canUse = true;
                break;
            }
        }
        if (canUse === false) {
            answer++;
        }
    }
    return answer;
}

console.log(solution([["15:00", "17:00"], ["16:40", "18:20"], ["14:20", "15:20"], ["14:10", "19:20"], ["18:20", "21:20"]])); // 3
console.log(solution([["09:10", "10:10"], ["10:20", "12:20"]])); // 1
console.log(solution([["10:20", "12:30"], ["10:20", "12:30"], ["10:20", "12:30"]])); // 3