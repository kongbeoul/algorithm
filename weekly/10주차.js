function solution(line) {
	const cross = [];

	let minX = Infinity;
	let minY = Infinity;
	let maxX = -Infinity;
	let maxY = -Infinity;

	for (let i = 0; i < line.length; i++) {
		for (let j = i + 1; j < line.length; j++) {
			const [A, B, E] = line[i];
			const [C, D, F] = line[j];

			const divisor = A * D - B * C;

			if (divisor === 0) continue;

			const dividedX = B * F - E * D;
			const dividedY = E * C - A * F;

			if (dividedX % divisor !== 0 || dividedY % divisor !== 0) continue;

			let x = dividedX / divisor;
			let y = dividedY / divisor;

			cross.push([x, y]);

			minX = Math.min(x, minX);
			minY = Math.min(y, minY);
			maxX = Math.max(x, maxX);
			maxY = Math.max(y, maxY);
		}
	}

	const tx = maxX - minX;
	const ty = maxY - minY;

	const answer = new Array(ty + 1).fill(null).map(() => new Array(tx + 1).fill("."));

	for (const [x, y] of cross) {
		let ny = maxY - y;
		let nx = x - minX;
		answer[ny][nx] = "*";
	}

	return answer.map((v) => v.join(""));
}

console.log(
	solution([
		[2, -1, 4],
		[-2, -1, 4],
		[0, -1, 1],
		[5, -8, -12],
		[5, 8, 12],
	])
);

console.log(
	solution([
		[0, 1, -1],
		[1, 0, -1],
		[1, 0, 1],
	])
);

console.log(
	solution([
		[1, -1, 0],
		[2, -1, 0],
	])
);

console.log(
	solution([
		[1, -1, 0],
		[2, -1, 0],
		[4, -1, 0],
	])
);
