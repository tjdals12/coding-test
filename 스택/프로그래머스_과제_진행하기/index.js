function solution(plans) {
    const getEnd = (start, playtime) => {
        const [hours, minutes] = start.split(":");
        const endHours = Number(hours) + Math.floor((Number(minutes) + Number(playtime)) / 60);
        const endMinutes = (Number(minutes) + Number(playtime)) % 60;
        return `${endHours}:${endMinutes}`;
    }
    const getTotalMinutes = (time) => {
        const [hours, minutes] = time.split(":");
        return Number(hours) * 60 + Number(minutes);
    }
    const getDiff = (time1, time2) => {
        const totalMinutes1 = getTotalMinutes(time1);
        const totalMinutes2 = getTotalMinutes(time2);
        return totalMinutes2 - totalMinutes1;
    }
    plans.sort((a, b) => getTotalMinutes(a[1]) - getTotalMinutes(b[1]));
    const answer = [];
    const stack = [];
    for (let i = 0; i < plans.length; i++) {
        const [curName, curStart, curPlaytime] = plans[i];
        if (i === plans.length - 1) {
            answer.push(curName);
            break;
        }
        const [nextName, nextStart, nextPlaytime] = plans[i + 1];
        let diff = getDiff(getEnd(curStart, curPlaytime), nextStart);
        if (diff === 0) {
            answer.push(curName);
        } else if (diff > 0) {
            answer.push(curName);
            while (stack.length > 0) {
                const [name, remainTime] = stack.pop();
                if (diff >= remainTime) {
                    diff -= remainTime;
                    answer.push(name);
                } else {
                    stack.push([name, remainTime - diff]);
                    break;
                }
            }
        } else {
            const playtime = getDiff(curStart, nextStart);
            const remainTime = curPlaytime - playtime;
            stack.push([curName, remainTime]);
        }
    }
    while (stack.length > 0) {
        const [name] = stack.pop();
        answer.push(name);
    }
    return answer;
}

console.log(solution([["korean", "11:40", "30"], ["english", "12:10", "20"], ["math", "12:30", "40"]])); //	["korean", "english", "math"]
console.log(solution([["science", "12:40", "50"], ["music", "12:20", "40"], ["history", "14:00", "30"], ["computer", "12:30", "100"]])); //	["science", "history", "computer", "music"]
console.log(solution([["aaa", "12:00", "20"], ["bbb", "12:10", "30"], ["ccc", "12:40", "10"]])); //	["bbb", "ccc", "aaa"]