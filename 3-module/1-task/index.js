/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
	let string= '';
	for (const item of data) {
		if (item.age <= age) {
			string += `${item.name}, ${item.balance}\n`;
		}
	}
	return string.replace(/\n$/, '');
}


