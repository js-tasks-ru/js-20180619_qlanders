let calendar = {
	from: new Date('2018-01-01T15:09:10Z'),
	to  : new Date('2018-02-01T10:09:10Z')
};

calendar[Symbol.iterator] = function () {
	let dateFromMs = this.from.getTime();
	let dateToMs = this.to.getTime();
	let dayInMs = 86400000;

	return {
		next() {
			if (dateFromMs <= dateToMs) {
				dateFromMs += dayInMs;
				let result = new Date(dateFromMs);
				result = ("0" + result.getDate()).slice(-2);

				if ((new Date(dateFromMs)).getDay() === 0
					|| (new Date(dateFromMs)).getDay() === 6 ) {
					result = `[${result}]`;
				}

				return {
					done: false,
					value: result
				}
			} else {
				return {
					done: true
				}
			}
		}
	}
};

