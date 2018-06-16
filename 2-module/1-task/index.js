/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
function clone (obj) {
	let newObj = {};

	for (let prop in obj) {
		newObj[prop] = obj[prop];
	}
	return newObj;
}