
let obj = {
	start: 10,
	end: 15
}

obj[Symbol.iterator] = () => {
	const itr = {
		next() {
			if (obj.start <= obj.end) {
				return { value: obj.start++, done: false };
			}
			else {
				return { done: true };
			}
		}
	}
	return itr;
}

for (var i of obj) {
	console.log(i);
}
