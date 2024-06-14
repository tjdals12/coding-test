function solution(orders, course) {
	const map = {};
	const traverse = (order, index, current) => {
		if (current.length >= 2) {
			map[current] = map[current] === undefined ? 1 : map[current] + 1;
		}
		for (let i = index; i < order.length; i++) {
			traverse(order, i + 1, current + order[i]);
		}
	}
	orders.forEach((order) => {
		order = order
			.split("")
			.sort((a, b) => {
				if (a > b) {
					return 1;
				} else if (b > a) {
					return -1;
				} else {
					return 0;
				}
			})
			.join("");
		traverse(order, 0, "");
	});
	const answer = [];
	course.forEach((length) => {
		const currentMap = {};
		let maxCount = 2;
		Object.keys(map).forEach((k) => {
			if (k.length === length) {
				currentMap[k] = map[k];
				maxCount = Math.max(maxCount, map[k]);
			}
		});
		Object.keys(currentMap).forEach((k) => {
			if (currentMap[k] === maxCount) {
				answer.push(k);
			}
		});
	});
	return answer.sort((a, b) => {
		if (a > b) {
			return 1;
		} else if (b > a) {
			return -1;
		} else {
			return 0;
		}
	});
}

console.log(solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2,3,4])); // ["AC", "ACDE", "BCFG", "CDE"]
console.log(solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2,3,5])); // ["ACD", "AD", "ADE", "CD", "XYZ"]
console.log(solution(["XYZ", "XWY", "WXA"], [2,3,4])); //	["WX", "XY"]
